import React, { useState, useEffect} from "react";
import gameStyles from "./GameStyles";
import Signout from "../../assets/Signout";
import Chat from "./Chat";
import WorldMap from "./WorldMap"
import axios from 'axios'




const Game = (props) => {
    const [worldArray, setWorldArray] = useState([null]);
    const[worldSize, setWorldSize] = useState(0)
    let player = 
        {
            x: 20,
            y: 20
        }
    
    let world = []
    useEffect(() => {
        
        let worldArray = [];
        axios.get('https://gnarly-funky.herokuapp.com/api/adv/world/')
            .then(response => {
                let world = response.data.world;
                
                for (let row = 0; row < 41; row++) {
                    worldArray[row] = [null];
                for (let col = 0; col< 41; col++) {
                    worldArray[row][col]=[null]
            }
        }
        for (let i = 0; i < world.length; i++){
            worldArray[world[i].y][world[i].x] = world[i]
        }
                setWorldArray(worldArray)
            })
        .catch(error => {console.log(error)})
        },[])

    
    

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
                {worldArray[0] != null ? <div className={classes.window}><WorldMap worldArray={worldArray} player={player} /></div> : <div className={classes.window}><p>LOADING...</p></div>}
                
                
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
