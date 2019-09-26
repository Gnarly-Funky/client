import React from "react";
import All from "../../assets/Main/js/All";
import East from "../../assets/Main/js/East";
import ESW from "../../assets/Main/js/ESW";
import NE from "../../assets/Main/js/NE";
import NES from "../../assets/Main/js/NES";
import North from "../../assets/Main/js/North";
import NW from "../../assets/Main/js/NW";
import SE from "../../assets/Main/js/SE";
import South from "../../assets/Main/js/South";
import SW from "../../assets/Main/js/SW";
import SWN from "../../assets/Main/js/SWN";
import West from "../../assets/Main/js/West";
import WNE from "../../assets/Main/js/WNE";
import { makeStyles } from "@material-ui/styles";

const Tile = props => {
    // console.log(props.icon);
    const classes = makeStyles(theme => ({
        tile: {
            display: "flex",
            width: "11%",
            margin: "0",
            background: "black",
            "& svg": {
                fill: "gray",
                zIndex: "1000",
            },
        },
    }))();

    //NSEW
    switch (props.icon) {
        case "NSEW":
            return (
                <div className={classes.tile}>
                    <All />
                </div>
            );
        case "NSE":
            return (
                <div className={classes.tile}>
                    <NES />
                </div>
            );
        case "NSW":
            return (
                <div className={classes.tile}>
                    <SWN />
                </div>
            );
        case "NEW":
            return (
                <div className={classes.tile}>
                    <WNE />
                </div>
            );
        case "SEW":
            return (
                <div className={classes.tile}>
                    <ESW />
                </div>
            );
        case "NE":
            return (
                <div className={classes.tile}>
                    <NE />
                </div>
            );
        case "NW":
            return (
                <div className={classes.tile}>
                    <NW />
                </div>
            );
        case "SE":
            return (
                <div className={classes.tile}>
                    <SE />
                </div>
            );
        case "SW":
            return (
                <div className={classes.tile}>
                    <SW />
                </div>
            );
        case "N":
            return (
                <div className={classes.tile}>
                    <North />
                </div>
            );
        case "S":
            return (
                <div className={classes.tile}>
                    <South />
                </div>
            );
        case "E":
            return (
                <div className={classes.tile}>
                    <East />
                </div>
            );
        case "W":
            return (
                <div className={classes.tile}>
                    <West />
                </div>
            );
        default:
            return <div className={classes.tile} />;
    }
};

export default Tile;
