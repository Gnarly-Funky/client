import React, { useState, useEffect } from "react";
import gameStyles from "./GameStyles";
import Signout from "../../assets/Signout";
import Chat from "./Chat";
import WorldMap from "./WorldMap";
import axios from "axios";
import Minimap from "./Minimap";
import Inventory from "./Inventory";
import { DialogContent, Dialog, makeStyles } from "@material-ui/core";
import Controlspng from "../../assets/Main/Controlspng.png";

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [disabled, setDisabled] = useState(false);
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        if (disabled) {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        }
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, [disabled]); // Empty array ensures that effect is only run on mount and unmount

    return [keyPressed, setDisabled];
}

const Game = props => {
    const [focus, setFocus] = useState(false);
    const [worldArray, setWorldArray] = useState();
    const [worldSize, setWorldSize] = useState(0);
    const [player, setPlayer] = useState({
        x: 20,
        y: 20,
    });
    const [serverPlayer, setServerPlayer] = useState({
        "player_uuid": "",
        "room_uuid": "",
        "player_id": 0,
        "player_name": "",
        "room_id": 0,
        "room_title": "",
        "room_description": "",
        "other_players": [],
    });
    const [roomPlayers, setRoomPlayers] = useState([])

    const [wPress, setWDisabled] = useKeyPress("w");
    const [aPress, setADisabled] = useKeyPress("a");
    const [sPress, setSDisabled] = useKeyPress("s");
    const [dPress, setDDisabled] = useKeyPress("d");

    useEffect(() => {
        if (focus) {
            setWDisabled(true)
            setADisabled(true)
            setSDisabled(true)
            setDDisabled(true)
        } else {
            setWDisabled(false)
            setADisabled(false)
            setSDisabled(false)
            setDDisabled(false)
        }
    })

    useEffect(() => {
        axios
            .get("https://gnarly-funky.herokuapp.com/api/adv/world/")
            .then(response => {
                let pulled_worlds = [];
                for (let row = 0; row < 41; row++) {
                    pulled_worlds[row] = [];
                    for (let col = 0; col < 41; col++) {
                        pulled_worlds[row].push(null);
                    }
                }
                let world = response.data.world;
                console.dir(response.data.world);
                console.log(JSON.stringify(response.data.world));
                for (let i = 0; i < world.length; i++) {
                    pulled_worlds[world[i].x][world[i].y] = world[i];
                }
                setWorldArray([...pulled_worlds]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const headthing = `Token ${localStorage.getItem('token')}`;
        axios
            .get('https://gnarly-funky.herokuapp.com/api/adv/init/', { headers: { authorization: headthing } })
            .then(response => {
                console.log(response.data)
                let myId = response.data.room_id
                setServerPlayer(response.data)
                setPlayer({ x: response.data.room_x, y: response.data.room_y })
                axios
                    .post('https://gnarly-funky.herokuapp.com/api/adv/move/', { 'room_id': myId }, { headers: { authorization: headthing } })
                    .then(response => {
                        setRoomPlayers(response.data.other_players)
                        console.log(`other players in my room: ${ response.data.other_players }`)
                    })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const classes = gameStyles();

    const [currentTab, setCurrentTab] = useState("chat");

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        props.history.push("/");
    };

    const inventoryTab = e => {
        e.preventDefault();
        setCurrentTab("inventory");
    };

    const chatTab = e => {
        e.preventDefault();
        setCurrentTab("chat");
    };

    useEffect(() => {
        // console.log(wPress);
        if (!focus) {
            if (wPress === true && worldArray[player.x][player.y].north) {
                HandleMove(0, -1)
                    ;
            } else if (aPress === true && worldArray[player.x][player.y].west) {
                HandleMove(-1, 0)
                    ;
            } else if (sPress === true && worldArray[player.x][player.y].south) {
                HandleMove(0, 1)
                    ;
            } else if (dPress === true && worldArray[player.x][player.y].east) {
                HandleMove(1, 0)
                    ;
            }
        }
    }, [wPress, aPress, sPress, dPress]);

    const HandleMove = (dx, dy) => {
        let newRoomCoords = { x: player.x + dx, y: player.y + dy }
        setPlayer({
            ...player,
            x: player.x + dx,
            y: player.y + dy
        })
        //find the room ID of the room we are moving to.
        let newId = worldArray[newRoomCoords.x][newRoomCoords.y].id
        console.log(newId)

        const headthing = `Token ${localStorage.getItem('token')}`;

        axios
            .post('https://gnarly-funky.herokuapp.com/api/adv/move/', { 'room_id': newId }, { headers: { authorization: headthing } })
            .then(response => {
                if (response.data.other_players) {
                    setRoomPlayers(response.data.other_players)
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const paperClasses = makeStyles((theme) => ({
        paper: {
            width: "100%",
            margin: "0",
            background: "#202020",
            "& .dialog-title": {
                margin: "1rem",
                fontSize: "5rem",
                color: "#c4c4c4"
            },
            "& .dialog-controls": {
                margin: "1rem",
                fontSize: "4rem",
                color: "#c4c4c4"
            }
        }
    }))()

    return (
        <div className={classes.root}>
            <div className={classes.menu}>
                <div className={classes.menuTabContainer}>
                    <div className={classes.menuTab} onClick={handleOpen}>Controls</div>
                    <div className={classes.menuTab} onClick={logout}>
                        <Signout />
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                {worldArray ? (
                    <div className={classes.window}>
                        <WorldMap worldArray={worldArray} player={player} />
                        <div className={classes.mainBottom}>
                            <div className={classes.descWindow}>
                                <div className={classes.descTitle}>
                                    {worldArray[0] && player
                                        ? worldArray[player.x][player.y].title
                                        : ""}
                                </div>
                                <div className={classes.desc}>
                                    {worldArray[0] && player
                                        ? worldArray[player.x][player.y].desc
                                        : ""}
                                </div>
                            </div>
                            <div >
                                <div className={classes.playerlistTitle}>Playerlist</div>
                                <div>
                                    {roomPlayers.map(player => {
                                        return(
                                        <div className={classes.playerlist}>{player.username}</div>
                                    )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className={classes.window}>
                            <p>LOADING...</p>
                        </div>
                    )}

                <div className={classes.sidebar}>
                    <div className={classes.top}>
                        {worldArray ? (
                            <Minimap worldArray={worldArray} player={player} />
                        ) : (
                                <p>LOADING...</p>
                            )}
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.tabs}>
                            <div
                                className={
                                    currentTab === "chat"
                                        ? classes.tab + " active"
                                        : classes.tab
                                }
                                onClick={chatTab}
                            >
                                Chat
                            </div>
                            <div
                                className={
                                    currentTab === "inventory"
                                        ? classes.tab + " active"
                                        : classes.tab
                                }
                                onClick={inventoryTab}
                            >
                                Players
                            </div>
                        </div>
                        {currentTab === "chat" ? <Chat setFocus={setFocus} serverPlayer={serverPlayer}/> : <div>
                                    {serverPlayer.other_players.map(player => {
                                        return(
                                        <div className={classes.playerlist}>{player.username}</div>
                                    )
                                    })}
                                </div>}
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                are-labelledby="remove-profile-dialog"
                classes={paperClasses}
            >
                <div className='dialog-title'>
                    Controls
                </div>
                <DialogContent>
                    <img src={Controlspng} />
                </DialogContent>
                <div className='dialog-controls'>
                    WASD = Move
                </div>
            </Dialog>
        </div>
    );
};

export default Game;