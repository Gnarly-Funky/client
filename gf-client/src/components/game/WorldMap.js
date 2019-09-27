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
            let currentX = player.x - Math.floor(columns / 2);
            let currentY = player.y - Math.floor(columns / 2);
            let newArr = []
            for (let y = 0; y < columns; y++) {
                for (let x = 0; x < columns; x++) {
                    if ((currentX > 40 || currentY > 40) || (currentX < 0 || currentY < 0)) {
                        newArr=[...newArr, "null"]
                    } else if (worldArray[currentX][currentY] === null) {
                        newArr = [...newArr, "null"]
                    } else {
                        let tilename = "";
                        if (worldArray[currentX][currentY].north === true) {
                            tilename += "N";
                        }
                        if (worldArray[currentX][currentY].south === true) {
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
                currentX = player.x - Math.floor(columns / 2)
                currentY++
            }
            setDisplayArr([...newArr])
        }
    }, [worldArray, player]);

    // useEffect(() => {
    //     // Finish
    // }, [displayArr])

    return (
        <div className={classes.worldMap}>
            {displayArr.map((tile, index) => {
                if (index === 40) {
                    return <Tile key={index} icon={tile} player={true}/>
                }
                return <Tile key={index} icon={tile} />
            })}
        </div>
    );
};

export default WorldMap;
