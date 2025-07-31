import { Text, View } from "react-native";
import Styles from "./BoxesStyle"


function Boxes({ day, isToday }) {
    return (
        <View style={[Styles.container, isToday&&Styles.selectedBox]}>
            <Text style={Styles.day}>
                {day}
            </Text>
        </View>
    )
}

export default Boxes;