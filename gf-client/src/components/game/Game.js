import React, { useState, useEffect } from "react";
import gameStyles from "./GameStyles";
import Signout from "../../assets/Signout";
import Chat from "./Chat";
import WorldMap from "./WorldMap";
import axios from "axios";
import Minimap from "./Minimap";
import { spread } from "q";

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed

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

        return () => {
            window.removeEventListener("keydown", downHandler);

            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

const Game = props => {
    const [worldArray, setWorldArray] = useState();
    const [worldSize, setWorldSize] = useState(0);
    const [player, setPlayer] = useState({
        x: 20,
        y: 20,
    });

    const wPress = useKeyPress("w");
    const aPress = useKeyPress("a");
    const sPress = useKeyPress("s");
    const dPress = useKeyPress("d");

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

    useEffect(() => {
        console.log(wPress);
        if (wPress === true && worldArray[player.x][player.y].north) {
            setPlayer({
                ...player,
                y: player.y-1
            })
        } else if (aPress === true && worldArray[player.x][player.y].west) {
            setPlayer({
                ...player,
                x: player.x-1
            })
        } else if (sPress === true && worldArray[player.x][player.y].south) {
            setPlayer({
                ...player,
                y: player.y+1
            })
        } else if (dPress === true && worldArray[player.x][player.y].east) {
            setPlayer({
                ...player,
                x: player.x+1
            })
        }
    }, [wPress, aPress, sPress, dPress])

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
