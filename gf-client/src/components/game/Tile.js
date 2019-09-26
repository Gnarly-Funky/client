import React from "react";
import E from "../../assets/Main/js/E";
import EW from "../../assets/Main/js/EW";
import N from "../../assets/Main/js/N";
import NE from "../../assets/Main/js/NE";
import NEW from "../../assets/Main/js/NEW";
import NS from "../../assets/Main/js/NS";
import NSE from "../../assets/Main/js/NSE";
import NSEW from "../../assets/Main/js/NSEW";
import NSW from "../../assets/Main/js/NSW";
import NW from "../../assets/Main/js/NW";
import S from "../../assets/Main/js/S";
import SE from "../../assets/Main/js/SE";
import SEW from "../../assets/Main/js/SEW";
import SW from "../../assets/Main/js/SW";
import W from "../../assets/Main/js/W";
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
            },
        },
        emptyTile: {
            display: "flex",
            width: "11%",
            margin: "0",
            background: "black",
            "& svg": {
                fill: "rgba(0,0,0,0)",
            },
        },
    }))();

    //NSEW
    switch (props.icon) {
        case "NSEW":
            return (
                <div className={classes.tile}>
                    <NSEW />
                </div>
            );
        case "NSE":
            return (
                <div className={classes.tile}>
                    <NSE />
                </div>
            );
        case "NSW":
            return (
                <div className={classes.tile}>
                    <NSW />
                </div>
            );
        case "NEW":
            return (
                <div className={classes.tile}>
                    <NEW />
                </div>
            );
        case "SEW":
            return (
                <div className={classes.tile}>
                    <SEW />
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
        case "EW":
            return (
                <div className={classes.tile}>
                    <EW />
                </div>
            );
        case "NS":
            return (
                <div className={classes.tile}>
                    <NS />
                </div>
            );
        case "N":
            return (
                <div className={classes.tile}>
                    <N />
                </div>
            );
        case "S":
            return (
                <div className={classes.tile}>
                    <S />
                </div>
            );
        case "E":
            return (
                <div className={classes.tile}>
                    <E />
                </div>
            );
        case "W":
            return (
                <div className={classes.tile}>
                    <W />
                </div>
            );
        default:
            return (
                <div className={classes.emptyTile}>
                    <E />
                </div>
            );
    }
};

export default Tile;
