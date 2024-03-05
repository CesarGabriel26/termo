import React from "react";
import { View, Text } from "react-native-web";

import { styles } from "../../styles/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Cell(porps) {
    return (
        <View style={[styles.Cell, Colors.colorCellBOrder]} >
            <Text>P {porps.Text}</Text>
        </View>
    )
}
