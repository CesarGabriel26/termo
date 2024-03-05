import React from "react";
import { View, Text } from "react-native-web";

import { styles } from "../styles/styles";
import Cell from "./Cell";


export default function Row(porps) {

    let Upper = porps.Word.toUpperCase()

    return (
        <View style={styles.Row}>
            <Cell size={80} Text = {Upper[0]} />
            <Cell size={80} Text = {Upper[1]} />
            <Cell size={80} Text = {Upper[2]} />
            <Cell size={80} Text = {Upper[3]} />
            <Cell size={80} Text = {Upper[4]} />
        </View>
    )
}
