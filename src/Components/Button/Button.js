

import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "./ButtonStyle"

const Button = ({ buttonText, onPress, loading, theme, iconName, imageUrl }) => {

    const images = {
        google: require("../../Assets/googleIcon.png"),
        facebook: require("../../Assets/facebookIcon.png"),
        login: require("../../Assets/loginIcon.png"),
        login1: require("../../Assets/loginIcon2.png"),
        // sun: require("../../assets/sun.png"),
    };

    return (
        <TouchableOpacity
            style={Styles[theme].container}
            onPress={onPress}
            disabled={loading}>
            {
                loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <View style={Styles[theme].buttonContainer}>
                        <Icon name={iconName} size="21" />
                        {/* <Image source={require(imageUrl)}/> */}
                        {
                            imageUrl && images[imageUrl] && (
                                <Image
                                    source={images[imageUrl]}
                                    style={Styles[theme].image}
                                />
                            )
                        }
                        <Text style={Styles[theme].title}>{buttonText}</Text>

                    </View>
                )
            }

        </TouchableOpacity>
    )
}

export default Button;

