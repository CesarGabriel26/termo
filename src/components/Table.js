import React from "react";
import { View, Text } from "react-native-web";

import { styles } from "../styles/styles";
import Row from "./Row";


export default function Table(porps) {

    let palavra = porps.palavra

    return (
        <View style={styles.Col}>
            <Row Word = "senai" />
            <Row Word = "" />
            <Row Word = "" />
            <Row Word = "" />
            <Row Word = "" />
        </View>
    )
}
