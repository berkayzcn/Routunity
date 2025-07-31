import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 7,
        padding: 14,
        borderRadius: 10,
        borderRadius: 16,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        // backgroundColor: '#c2eebc',
        backgroundColor: 'rgba(74, 144, 226, 1)',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"


    },

    username: {
        fontSize: 10
    },

    date: {

        fontSize: 10
    },

    text: {
        fontSize: 15,
        textAlign: "center",


    },
    completedCard: {
        backgroundColor: "rgba(130, 201, 169, 1)"
        // backgroundColor: "#d1e7dd", // yeşilimsi arka plan
        // backgroundColor : "rgba(255, 128, 0, 1)",
    },

    completedText: {
        color: "#2e7d32", // koyu yeşil yazı
        color: "rgba(60, 60, 60, 1)", // koyu yeşil yazı,
        textDecorationLine: "line-through",
    },

    iconContainer: {
        marginRight: 6
    },




})