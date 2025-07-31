import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Styles from "./OnboardingStyle"
import Button from "../../../Components/Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Onboarding = ({ navigation }) => {

    const toEmailLogin = () => {
        navigation.navigate("EmailLogin")
    }

    return (

        <ImageBackground
            source={require("../../../Assets/Onboarding.png")}
            // source={require("../../../Assets/onboarding2.png")}
            style={{ flex: 1 }}
        >



            <View style={Styles.container}>

                <View style={Styles.logoContainer}>
                    <Image
                        source={require("../../../Assets/logo27.png")}
                        style={Styles.logoImage}
                    />
                    <Image
                        source={require("../../../Assets/logotitle2.png")}
                        style={Styles.logoTitleImage}
                    />

                    {/* <Text style={Styles.logoText}>Routinity</Text> */}
                </View>

                <View style={Styles.titleContainer}>
                    <Text style={Styles.titleSecondLine}>Create</Text>
                    <Text style={Styles.titleSecondLine}>Good Habits</Text>
                    <Text style={Styles.titleFirstLine}>Change your life by slowly adding new healty habits and stickking to them</Text>
                </View>

                <View style={{ marginHorizontal: 14 }}>
                    {/* <Icon name="login"/> */}
                    <Button
                    buttonText={"Continue With E-mail"}
                    onPress={toEmailLogin}
                    theme={"secondary"}
                    imageUrl={"login"}
                    />
                </View>

                <View style={{ flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 17,
                    marginTop : 15 }}>
                    <View style={{
                        //marginRight: 25,
                        //  width: 100,

                    }}>
                        <Button theme={"secondary"} buttonText={"Apple"} iconName={"apple"} />
                    </View>

                    <View style={{
                       // marginRight: 25,
                        //  width: 100,

                    }}>
                        <Button theme={"secondary"} buttonText={"Google"} imageUrl={"google"}/>
                    </View>

                    <View
                        style={{
                            // marginRight : 25,
                            //  width: 100,
                        }}
                    >
                        <Button theme={"secondary"} buttonText={"Facebook"} imageUrl={"facebook"} />
                    </View>
                </View>

            </View>


        </ImageBackground>


    )
}

export default Onboarding;