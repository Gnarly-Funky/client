import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import { makeStyles } from "@material-ui/core";

const WorldMap = ({ columns = 9, player, worldArray }) => {

    const classes = makeStyles(theme => ({
        worldMap: {
            display: "flex",
            flexWrap: "wrap",
        }
    }))()

    const [displayArr, setDisplayArr] = useState([]);

    useEffect(() => {
        if (worldArray[0]) {
            // console.log(worldArray);
            let currentX = player.x - Math.floor(columns / 2);
            let currentY = player.y - Math.floor(columns / 2);
            // console.log(currentX, currentY)
            let newArr = []
            for (let y = 0; y < columns; y++) {
                for (let x = 0; x < columns; x++) {
                    if (worldArray[currentX][currentY] === null) {
                        newArr = [...newArr, "null"]
                    } else {
                        let tilename = "";
                        if (worldArray[currentX][currentY].north === true) {
                            tilename += "N";
                        }
                        if (worldArray[currentX][currentY].south === true) {
                            console.log("hey")
                            tilename += "S";
                        }
                        if (worldArray[currentX][currentY].east === true) {
                            tilename += "E";
                        }
                        if (worldArray[currentX][currentY].west === true) {
                            tilename += "W";
                        }
                        newArr = [...newArr, tilename]
                    }
                    currentX++
                }
                // console.log(currentY)
                currentX = player.x - Math.floor(columns / 2)
                currentY++
            }
            // console.log(newArr)
            setDisplayArr([...newArr, "asdf"])
        }
        // console.log(displayArr)
    }, [worldArray]);

    return (
        <div className={classes.worldMap}>
            {displayArr.map(tile => (
                <Tile className="world-map-tile" icon={tile} />
            ))}
        </div>
    );
};

export default WorldMap;
