import React, { useState, useEffect } from "react";
import gameStyles from "./GameStyles";
import Signout from "../../assets/Signout";
import Chat from "./Chat";
import WorldMap from "./WorldMap";
import axios from "axios";
import Minimap from "./Minimap";

const Game = props => {
    const [worldArray, setWorldArray] = useState();
    const [worldSize, setWorldSize] = useState(0);
    let player = {
        x: 32,
        y: 28,
    };

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

    return (
        <div className={classes.root}>
            <div className={classes.menu}>
                <div className={classes.menuTabContainer}>
                    <div className={classes.menuTab}>Controls</div>
                    <div className={classes.menuTab} onClick={logout}>
                        <Signout />
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                {worldArray ? (
                    <div className={classes.window}>
                        <WorldMap worldArray={worldArray} player={player} />
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
                                Inventory
                            </div>
                        </div>
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
