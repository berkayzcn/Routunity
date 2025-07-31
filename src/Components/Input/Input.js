// import { Text, TextInput, View } from "react-native";
// import Styles from "./InputStyle"
// // import Icon from "react-native-vector-icons/MaterialCommunityIcons"
// import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// function Input({ placeHolder, onChange, iconName, value, title }) {
//     return (

//         <View style={Styles.container}>

//             <Text style={Styles.title}>{title}</Text>
//             <View style={Styles.innerContainer}>
//                 <TextInput
//                     style={Styles.input}
//                     placeholder={placeHolder}
//                     value={value}
//                     onChangeText={onChange}
//                     autoCapitalize="none"
//                 />
//                 <Icon name={iconName} size={25} color='gray' />
//             </View>
//         </View>
//     )
// }

// export default Input;


import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./InputStyle"

function Input({ placeHolder, onChange, iconName, value, title , securityText}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize="none"
          placeholderTextColor="#A9A9A9"
          secureTextEntry = {securityText}
        />
        {iconName && (
          <Icon name={iconName} size={22} color="gray" style={styles.icon} />
        )}
      </View>

      <View
        style={[
          styles.underline,
          { borderBottomColor: isFocused ? "green" : "#ccc" },
        ]}
      />
    </View>
  );
}

export default Input;
