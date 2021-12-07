import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function MediaCard({ title, lastMessage }) {
    return ( <
        >
        <
        Card sx = {
            { maxWidth: 345 } }
        style = {
            { marginTop: "15px" }, { "backgroundColor": "grey" } } >
        <
        CardContent >
        <
        Typography gutterBottom variant = "h5"
        component = "div" > { title } <
        /Typography> <
        Typography variant = "body2"
        color = "text.secondary"
        back > { lastMessage } <
        /Typography> <
        /CardContent> <
        /Card> <
        />
    );
}