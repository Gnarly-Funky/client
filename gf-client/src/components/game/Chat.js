import React, { useState, useEffect } from "react";
import gameStyles from "./GameStyles";
import Pusher from "pusher-js";
import axios from "axios";

const Chat = props => {
    const [messages, setMessages] = useState(["asdf", "asdf"]);

    const [message, setMessage] = useState("");

    const addMessage = (newMessage) => {
        console.log("add message ", messages);
        const newMessages = [...messages, newMessage]
        // console.log(messages);
        setMessages([...newMessages]);
    }

    useEffect(() => {
        const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
            cluster: process.env.REACT_APP_PUSHER_CLUSTER,
        });

        const channel = pusher.subscribe("a_channel");

        channel.bind("an_event", data => {
            const newMessage = `${data.name}: ${data.message}`
            addMessage(newMessage);
            channel.unbind_all();
        });
    }, [messages]);

    const classes = gameStyles();

    const submit = e => {
        e.preventDefault();
        const headthing = `Token ${localStorage.getItem("token")}`;
        axios
            .post("https://gnarly-funky.herokuapp.com/ajax/chat/", {
            // .post("http://127.0.0.1:8000/ajax/chat/", {
                headers: {
                    authorization: headthing
                },
                message: message,
                username: props.serverPlayer.player_name
            })
            .then(() => {})
            .catch(err => {
                console.dir(err);
            });
    };

    const handleChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    return (
        <div>
            <div className={classes.chat}>
                {messages.map(message => (
                    <div className={classes.message}>{message}</div>
                ))}
            </div>
            <form onSubmit={submit}>
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
