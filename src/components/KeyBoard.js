import React from "react";
import { View, Text } from "react-native-web";

import { styles } from "../styles/styles";
import { Bgs } from "../styles/Colors";
import Cell from "./Cell";


export default function Keyboard(porps) {
    return (
        <View style={{ marginTop : 20, display : "flex", justifyContent : 'center', alignItems : 'center', }}>
            
            <View style={styles.Row}>
                <Cell Text="Q" />
                <Cell Text="W" />
                <Cell Text="E" />
                <Cell Text="R" />
                <Cell Text="T" />
                <Cell Text="Y" />
                <Cell Text="U" />
                <Cell Text="I" />
                <Cell Text="O" />
                <Cell Text="P" />
            </View>
            <View style={styles.Row}>
                <Cell Text="A" />
                <Cell Text="S" />
                <Cell Text="D" />
                <Cell Text="F" />
                <Cell Text="G" />
                <Cell Text="H" />
                <Cell Text="J" />
                <Cell Text="K" />
                <Cell Text="L" />
            </View>
            <View style={styles.Row}>
                <Cell Text="Z" />
                <Cell Text="X" />
                <Cell Text="C" />
                <Cell Text="V" />
                <Cell Text="B" />
                <Cell Text="N" />
                <Cell Text="M" />
            </View>

        </View>
    )
}
