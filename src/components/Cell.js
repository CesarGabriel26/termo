import React from "react";
import { View, Text } from "react-native-web";

import { styles } from "../styles/styles";
import { Bgs } from "../styles/Colors";


export default function Cell(porps) {
    return (
        <View style={[styles.Cell, Bgs.colorCellBorder, { height : porps.size, width : porps.size} ]} >
            <Text style = {[styles.CellText, Bgs.colorCellText]}>{porps.Text}</Text>
        </View>
    )
}
