import { StyleSheet } from "react-native";
export default StyleSheet.create({

    // container : {
    //    // marginTop : 35,

    // },
    // innerContainer: {
    //     backgroundColor: "#e0e0e0",
    //     margin: 10,
    //     padding: 9,
    //     borderRadius: 7,
    //     flexDirection: "row",
        
        
    // },

    // input : {
    //     flex : 1,

    // },

    // title : {
    //     // fontSize : 2
    //     paddingLeft : 14,
    //     fontSize : 10,
    // }

  
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 12,
    color: "#333",
    paddingLeft: 4,
    marginBottom: 4,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: "#000",
  },
  icon: {
    marginLeft: 8,
  },
  underline: {
    borderBottomWidth: 2,
    marginTop: 2,
  },


})