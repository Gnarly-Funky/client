import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const Minimap = ({ columns = 20, player, worldArray }) => {
    const classes = makeStyles(theme => ({
        minimap: {
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
        },
        room: {
            width: "5%",
            height: "5%",
            background: "#4a4a4a",
            "&.empty": {
                background: "#202020"
            },
            "&.player": {
                background: "#d94a38"
            }
        },
    }))();

    const [displayArr, setDisplayArr] = useState([]);

    useEffect(() => {
        if (worldArray[0]) {
            let currentX = player.x - Math.floor(columns / 2);
            let currentY = player.y - Math.floor(columns / 2);
            let newArr = [];
            for (let y = 0; y < columns; y++) {
                for (let x = 0; x < columns; x++) {
                    if (
                        currentX > 40 ||
                        currentY > 40 ||
                        (currentX < 0 || currentY < 0)
                    ) {
                        newArr = [...newArr, "null"];
                    } else if (worldArray[currentX][currentY] === null) {
                        newArr = [...newArr, "null"];
                    } else {
                        let tilename = "A";
                        if (currentX === player.x && currentY === player.y) {
                            tilename = "P";
                        }
                        newArr = [...newArr, tilename];
                    }
                    currentX++;
                }
                currentX = player.x - Math.floor(columns / 2);
                currentY++;
            }
            setDisplayArr([...newArr]);
        }
    }, [worldArray, player]);

    return (
        <div className={classes.minimap}>
            {displayArr.map(tile => {
                if (tile === "P") {
                    return <div className={classes.room + " player"} />;
                } else if (tile !== "null") {
                    return <div className={classes.room} />;
                } else {
                    return <div className={classes.room + " empty"} />;
                }
            })}
        </div>
    );
};

export default Minimap;
