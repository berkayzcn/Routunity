import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import emailLogin from "./Auth/EmailLogin/emailLogin";
import Onboarding from "./Auth/Onboarding/Onboarding";
import CreateEmailAccount from "./Auth/CreateEmailAccount";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import Home from "./Home";
import { getAuth } from "@react-native-firebase/auth";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icon1 from "react-native-vector-icons/MaterialIcons"


const Stack = createNativeStackNavigator()

function App() {

  const [userSession, setUserSession] = useState()

  useEffect(() => {
    getAuth().onAuthStateChanged(user => {
      setUserSession(!!user) //dolu geliyorsa true, boş geliyorsa false olarak set etmek için
      // setUserSession(Boolean(user)) farklı yazım aynı anlam
    })
  }, [])



  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EmailLogin"
          component={emailLogin}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon1
                name="arrow-back-ios"
                size={25}
                style={{ marginLeft: 8 }}
                onPress={() => navigation.goBack()}
              />
            ),
            title: "Continue with E-mail",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 18,
            },
          })}
        />
        <Stack.Screen name="CreateAccount" component={CreateEmailAccount} />
      </Stack.Navigator>
    )
  }

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white"
          }
        }}
      >
        {
          !userSession ? (

            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          ) : (

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                // headerShown : false,
                headerRight: () => (
                  <Icon
                    name="logout"
                    size="25"
                    onPress={() => getAuth().signOut()}
                  />
                ),
                title: ""

              }}
            />
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}



export default App;
