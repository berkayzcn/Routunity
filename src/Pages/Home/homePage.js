import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";
import ContentInputModal from "../../Hooks/ContentInputModal";
import FloatingButton from "../../Components/FloatingButton";
import Styles from "./homePageStyle"
import { useEffect, useState } from "react";
import database, { update } from "@react-native-firebase/database"
import HabitCard from "../../Components/HabitCard";
import useParseData from "../../Hooks/useParseData/useParseData";
import Boxes from "../../Components/Boxes";
import EditHabitModal from "../../Components/EditModal";


function Home() {
    const [inputModalVisible, setInputModalVisible] = useState()
    const [todayHabits, setTodayHabits] = useState([]);
    const [completedHabits, setCompletedHabits] = useState([])

    const [editModalVisible, setEditModalVisible] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"  ]

    function openEditModal(habit) {
        setSelectedHabit(habit);
        setEditModalVisible(true);
    }

        function handleHabitUpdate(habitId, newText) {
        database().ref(`Habits/${habitId}`).update({
            text: newText
        });
        }


    

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible)
    }

    const todayIndex = new Date().getDay(); // Bugünkü gün indexi

    useEffect(() => {

        const habitsRef = database().ref('Habits');

        const onValueChange = habitsRef.on('value', snapshot => {
            const contentData = snapshot.val();
            if (contentData) {
        
                  console.log('bu ilk şekli', contentData)

                const parsedData = useParseData(contentData)

                console.log("bu parse edilmiş", parsedData)//parse ederek key leri id oalrak obje içine tanımladık

                
                const filteredToDos = parsedData.filter(habit =>
                    Array.isArray(habit.days) && 
                    habit.days.includes(todayIndex) && 
                    habit.isCompleted == false
                );

                const dones = parsedData.filter(habit =>
                    Array.isArray(habit.days) &&
                    habit.days.includes(todayIndex) &&
                    habit.isCompleted == true
                )



                setTodayHabits(filteredToDos);
                setCompletedHabits(dones)
            } else {
                setTodayHabits([]);
            }
        });

        // Temizleme fonksiyonu, component kapanınca dinleyiciyi kaldır
        return () => {
            habitsRef.off('value', onValueChange);
        };
    }, [])


    function handleHabitSave(habitText, selectedDays) {
        const normalizedDays = selectedDays.map(dayIndex => (dayIndex + 1) % 7); //cunku veir çekirken birgün sonrasını algılıyor bugünün tarihi yani kayıtda bir sıkıntı var
        const habitObject = {
            text: habitText,
            date: new Date().toISOString(),
            days: normalizedDays,
            isCompleted : false
        }
        console.log("Secilen Günler", selectedDays)
        database().ref('Habits').push(habitObject)
        handleInputToggle()
    }

    function habitSend(text, days) {
        handleHabitSave(text, days)
        handleInputToggle()
    }

        // function markHabitAsCompleted ({habitId}) { habitıd yi parantez İÇİNDE VERDİĞİM İÇİN KOCA BİR HATAYLA UĞRAŞTIM
    function markHabitAsCompleted (habitId) {
        console.log('Gelen habitId:', habitId); // bu satırı ekle
        if (!habitId) return;

        database()
            .ref(`Habits/${habitId}`)
            .update({isCompleted : true})
    }

        // function markHabitAsCompleted ({habitId}) { habitıd yi parantez İÇİNDE VERDİĞİM İÇİN KOCA BİR HATAYLA UĞRAŞTIM
    function markHabitBack (habitId) {
        console.log('Gelen habitId:', habitId); // bu satırı ekle
        if (!habitId) return;

        database()
            .ref(`Habits/${habitId}`)
            .update({isCompleted : false})
    }

    function deleteHabit (habitId) {
        database()
        .ref(`Habits/${habitId}`)
        .remove()
    }

    const renderHabitToDo = ({ item }) => {
        return (

            <HabitCard 
                text={item.text}
                pressCheck={() => markHabitAsCompleted(item.id)}
                checkIcon={"check-outline"}
                editIcon={"edit"}
                deleteIcon={"delete"}
                pressDelete={()=>deleteHabit(item.id)}
                pressEdit={()=>openEditModal(item)}
             />
        )
    }

    function renderHabitDones ({item}){
        return(
            <HabitCard
                text={item.text}
                pressCheck={()=>markHabitBack(item.id)}
                completed={true}
                checkIcon={"check-bold"}
            />
        )

    }


    const deviceSize = Dimensions.get("window");

    const today = new Date();

    // Mountg/ d / y gösterim
     const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
     });

  const renderDays = ({item, index}) =>{
    return(
        <View style={Styles.boxesContainer}>
            <Boxes day={item}  isToday={index === todayIndex}/>
        </View>
    )
  }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{marginTop : 25}} >
                <Text style={Styles.today}>Today,</Text>
                <Text style={Styles.date}>{formattedDate}</Text>
            </View>

            {/* günleri listeleme */}
            <View>
                <FlatList
                style = {{
                    marginTop : 8,
                     borderWidth : 1,
                    borderColor : "black",
                    borderRadius : 6,
                    padding : 5,
                    backgroundColor : "#d2e8ff",
                    backgroundColor : "#d2e8ff",
                     borderRightWidth: 3,
                     borderBottomWidth: 3,
                }}
                contentContainerStyle={{
                    height : 50,
                    marginVertical : 5
                }}
                data={days}
                renderItem={renderDays}
                horizontal
                />
            </View>


            <View style={Styles.toDoContainer}>
                <Text style={Styles.toDoText}>To Do</Text>
            </View>
        
                <FlatList
                    data={todayHabits}
                    renderItem={renderHabitToDo}
                    style={{
                        top : 15
                    }}
                />

            <View>
                <Text style={Styles.toDoText}>Done</Text>
            </View>

               <FlatList
                    data={completedHabits}
                    renderItem={renderHabitDones}
                    style={{
                     
                    }}
                />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleHabitSave}
            />

            <EditHabitModal 
                visible={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                onSave={handleHabitUpdate}
                habit={selectedHabit}
            />
            <FloatingButton icon={'plus'} onPress={handleInputToggle} />
        {/* </View> */}
        </SafeAreaView>
    )
}

export default Home;



    