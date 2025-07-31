// import { StyleSheet } from "react-native";


// export default StyleSheet.create({
//     container : {
//         backgroundColor : "white",
//         // marginHorizontal : 14,
//         borderRadius : 25,
//         padding : 17,
//         borderColor : "blue",
//         borderWidth : 1
//     },

//     text : {
//         textAlign : "center",
//         fontWeight : "600",
//         fontSize : 15
//     }
// })


import { StyleSheet } from "react-native"

//BASE DE TUTTUĞKLARIMIZ STYLER İÇİN ORTAK VERDİĞİMİZ DEĞERLER İÇİN
//TEKRAR TEKRAR AYNI JKODLARI YAZMAMAK İÇİN SIK KULLANDIKLARIMIZ BURADA TUTUP STYLE İÇİNDE VERİYORUZ

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: "center"
    },

    buttonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    title: {
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 17,
        color: "white"
    },

    image : {
        width : 20,
        height : 20
    }
})

export default {
    primary: StyleSheet.create({
       
        ...base_style, 
       
        container: {
            ...base_style.container,
            backgroundColor: "green",
            backgroundColor: "#3843FF",
            borderRadius : 15,
        backgroundColor: "#4CAF50",

        },

        title: {
            ...base_style.title,
            fontWeight: "normal",
            color : "white",
            fontSize : 17,

        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
            borderRadius: 15
        },

        title: {
            ...base_style.title,
            fontWeight: "normal",
            color: "black",
            textAlign: "center",
            fontWeight: "600",
            fontSize: 15


        }
    }),



    third: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            // backgroundColor: "white"
        },

        title: {
            ...base_style.title,
            fontWeight: "normal",
            color: "#3843FF",
            fontSize : 13

        }
    }),


}

