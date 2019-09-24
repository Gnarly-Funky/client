import React, { useState } from "react";
import gameStyles from "./GameStyles";
import Signout from "../../assets/Signout";
import Chat from "./Chat";

const Game = props => {
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
                <div className={classes.window}></div>
                <div className={classes.sidebar}>
                    <div className={classes.top}></div>
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
