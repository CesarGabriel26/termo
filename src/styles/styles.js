import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Cell : {
        minHeight : 60,
        minWidth : 60,
        borderWidth : 4,
        borderRadius : 10,
        display : "flex",
        justifyContent : 'center',
        alignItems : 'center',
        margin : 2
    },

    CellText : {
        fontSize : 35
    },

    Row : {
        display : 'flex',
        flexDirection : 'row',
    },

    Col : {
        display : 'flex',
        flexDirection : 'column'
    },

    inp : { 
        height : 80, 
        borderWidth : 2, 
        width: '40%', 
        marginTop : 20, 
        paddingLeft : 5, 
        borderRadius : 10, 
        color : 'white',
        fontSize : 30
    }

});