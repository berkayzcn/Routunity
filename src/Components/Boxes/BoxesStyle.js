import { StyleSheet } from "react-native";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

export default StyleSheet.create({
    container : {
        borderRadius : 14,
        // borderWidth : 1,
        padding : 10,
        margin : 1,
        marginHorizontal : 3,
        height : 50,
        width : 45,
        backgroundColor : "yellow",
        backgroundColor : "#ede97d",
        backgroundColor : "#ecea7d",
        backgroundColor : "white",
        boxShadow : " 5"

    },

    day : {
        fontSize : 10.5,
        textAlign : "center", 
        fontWeight : "bold",
    },

    selectedBox : {

        backgroundColor: "red",
        backgroundColor: "#4a53fe",
        backgroundColor: "#4a53fe",
        backgroundColor: "rgba(74, 144, 226, 1)",
        backgroundColor: "rgba(130, 201, 169, 1)",
        // backgroundColor: "#c2eebc",

    }
    
})