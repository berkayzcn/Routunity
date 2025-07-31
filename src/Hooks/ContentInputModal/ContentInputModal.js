import { FlatList, Text, TextInput, View } from "react-native";
import Styles from "./ContentInputStyle"
import { useState } from "react";
// import Button from "../../Button";
import Button from "../../Components/Button";
import Modal from 'react-native-modal';

function ContentInputModal({ visible, onClose, onSend }) {

    const [text, setText] = useState()
    const weekDays = ["Mon", "Tue", "Wed", "Thu", " Fri  ", " Sat  ", " Sun "];
    const [selectedDays, setSelectedDays] = useState([]); //Bu array, tıklanan günleri (index olarak) içinde tutacak. Örneğin [0, 2, 4].



    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            style={Styles.modal}
            swipeDirection={"down"}
        >
            <View style={Styles.container}>
                <View style={Styles.inputContainer}>
                    <Text style={Styles.title}>Let's personalize </Text>
                    <Text style={Styles.title2}>your habits</Text>
                    <TextInput
                        placeholder="Add Habit"
                        onChangeText={setText}
                        multiline
                        style={{
                            // flex: 1,
                            paddingTop: 24
                        }}
                    />
                    <Text>______________________________________________</Text>

                    <FlatList
                        data={weekDays}
                        horizontal={false} // istersen true yap, ama grid istiyoruz
                        numColumns={4}     // 4x2 şeklinde kutular (7 gün için ideal)
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => { //index o günün kaçıncı sırada oldğn un gösterir
                            const isSelected = selectedDays.includes(index); //item a aşit olan index numarsını selecteddayas in içinde varmı kontrol eder
                            return (
                                <Text
                                    onPress={() => {
                                        if (isSelected) {
                                            setSelectedDays(selectedDays.filter(day => day !== index)); //index yani seçilen değer dışındakileri al, dön.yani 
                                        } else {
                                            setSelectedDays([...selectedDays, index]);
                                            //bu bir birleştirme.yani ...selectedDays ve index i set et 
                                        }
                                    }}
                                    style={[
                                        Styles.dayBox,
                                        isSelected && Styles.dayBoxSelected
                                    ]}
                                >
                                    {item}
                                </Text>
                            );
                        }}
                        contentContainerStyle={Styles.daysContainer}
                    />

                </View>
                <Button buttonText={'Create new habit'} theme={"primary"} onPress={() => onSend(text, selectedDays)} />
            </View>
        </Modal>
    )
}

export default ContentInputModal;
