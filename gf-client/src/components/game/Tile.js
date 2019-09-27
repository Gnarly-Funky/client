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
    const classes = makeStyles(theme => ({
        tile: {
            display: "flex",
            position: "relative",
            width: "11.11%",
            margin: "0",
            background: "#4a4a4a",
            "& svg": {
                fill: "#000",
            },
        },
        emptyTile: {
            display: "flex",
            width: "11.11%",
            margin: "0",
            background: "#202020",
            "& svg": {
                fill: "rgba(0,0,0,0)",
            },
        },
        player: {
            position: "absolute",
            width: "20%",
            height: "20%",
            top: "40%",
            left: "40%",
            background: "#d94a38",
            boxShadow: "2px 2px #000000"
        }
    }))();

    //NSEW
    switch (props.icon) {
        case "NSEW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NSEW />
                </div>
            );
        case "NSE":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NSE />
                </div>
            );
        case "NSW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NSW />
                </div>
            );
        case "NEW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NEW />
                </div>
            );
        case "SEW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <SEW />
                </div>
            );
        case "NE":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NE />
                </div>
            );
        case "NW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NW />
                </div>
            );
        case "SE":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <SE />
                </div>
            );
        case "SW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <SW />
                </div>
            );
        case "EW":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <EW />
                </div>
            );
        case "NS":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <NS />
                </div>
            );
        case "N":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <N />
                </div>
            );
        case "S":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <S />
                </div>
            );
        case "E":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <E />
                </div>
            );
        case "W":
            return (
                <div className={classes.tile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <W />
                </div>
            );
        default:
            return (
                <div className={classes.emptyTile}>
                    {props.player ? (
                        <div className={classes.player} />
                    ) : (
                        <div />
                    )}
                    <E />
                </div>
            );
    }
};

export default Tile;
