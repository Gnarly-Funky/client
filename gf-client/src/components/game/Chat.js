import React, { useState, useEffect, useRef } from "react";
import gameStyles from "./GameStyles";
import Pusher from "pusher-js";
import axios from "axios";

const Chat = props => {
    const [messages, setMessages] = useState([]);

    const [message, setMessage] = useState("");

    const chatRef = useRef(null);

    const addMessage = newMessage => {
        const newMessages = [...messages, newMessage];
        setMessages([...newMessages]);
    };

    const [pusher] = useState(
        new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
            cluster: process.env.REACT_APP_PUSHER_CLUSTER,
        })
    );

    useEffect(() => {
        return () => {
            pusher.disconnect();
        };
    }, [pusher]);

    useEffect(() => {
        const channel = pusher.subscribe("a_channel");

        channel.bind("an_event", data => {
            const newMessage = `${data.name}: ${data.message}`;
            addMessage(newMessage);
            channel.unbind_all();
            pusher.unsubscribe("a_channel");
        });

        if (chatRef) {
            chatRef.current.scrollIntoView()
        }
    }, [messages]);

    const classes = gameStyles();

    const submit = e => {
        e.preventDefault();
        const headthing = `Token ${localStorage.getItem("token")}`;
        axios
            .post("https://gnarly-funky.herokuapp.com/ajax/chat/", {
                // .post("http://127.0.0.1:8000/ajax/chat/", {
                headers: {
                    authorization: headthing,
                },
                message: message,
                username: props.serverPlayer.player_name,
            })
            .then(() => {
                setMessage("");
            })
            .catch(err => {
                console.dir(err);
            });
    };

    const handleChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    return (
        <div className={classes.chat}>
            <div className={classes.chatSection}>
                {messages.map(message => (
                    <div className={classes.message}>{message}</div>
                ))}
                <div ref={chatRef}/>
            </div>
            <form onSubmit={submit} className={classes.chatForm}>
                <input
                    type="text"
                    className={classes.chatInput}
                    value={message}
                    onChange={handleChange}
                    onFocus={() => {
                        props.setFocus(true);
                    }}
                    onBlur={() => {
                        props.setFocus(false);
                    }}
                />
            </form>
        </div>
    );
};

export default Chat;
