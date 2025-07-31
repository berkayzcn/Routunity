import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./HabitCardStyle";
import { formatDistance, parseISO } from "date-fns";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import IconAnt from "react-native-vector-icons/AntDesign"
// import { tr } from 'date-fns/locale'


function HabitCard({ text, pressCheck, pressEdit, pressDelete, completed, checkIcon, editIcon, deleteIcon }) {

    // const formattedDates = formatDistance(parseISO(date), new Date(), { 
    //     addSuffix: true, 
    //     locale : tr
    // })

    return (
        // <TouchableOpacity style={[Styles.container, completed && Styles.completedCard]} onPress={onPress}>
        <View style={[Styles.container, completed && Styles.completedCard]}>

            <View style={{ flexDirection: "row", alignItems : "center" }}>

                <TouchableOpacity style={Styles.iconContainer} onPress={pressCheck}>
                    <Icon name={checkIcon} size={23} color="white" />
                </TouchableOpacity>

                <Text style={[Styles.text, completed && Styles.completedText]}>{text}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems : "center" }}>

                <TouchableOpacity style={Styles.iconContainer} onPress={pressEdit}>
                    <IconAnt name={editIcon} size={20} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={Styles.iconContainer} onPress={pressDelete}>
                    <Icon name={deleteIcon} size={20} color="black" />
                </TouchableOpacity>
            </View>


           
        </View>
    )
}

export default HabitCard;
{/* </TouchableOpacity> */ }