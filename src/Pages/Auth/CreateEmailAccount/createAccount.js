import { Text, View } from "react-native";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { getAuth, createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Formik } from "formik";

const createAccount = ({navigation}) => {



    const initialFormValues = {
        name: '',
        userEmail: '',
        password: '',
        repassword: '',
    }


    async function handleForSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "Şifreler Uyuşmuyor",
                type: "danger"
            })
            return
        }

        try {
            console.log(formValues.userEmail, formValues.password)
            await  createUserWithEmailAndPassword(getAuth(), formValues.userEmail, formValues.password)
            console.log("kullanıcı kaydedildi")
            // navigation.navigate("")
        } catch(error) {
            console.log("error")
        }
    }

    return (
        <View style={{
            marginTop: 45,
        }}>

            <Formik initialValues={initialFormValues} onSubmit={handleForSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                      
                        <View style={{ marginTop: 7 }}>
                            <Input
                                title={"E-MAİL"}
                                placeHolder={"E-Mail "}
                                onChange={handleChange("userEmail")}
                            />
                        </View>

                        <View style={{margin : 7}}>
                            <Input
                                title={"PASSWORD"}
                                placeHolder={"Password"}
                                onChange={handleChange("password")}
                            />
                        </View>

                        <View style={{ marginTop: 7 }}>
                            <Input
                                title={"REPASSWORD"}
                                placeHolder={"Repassword"}
                                onChange={handleChange("repassword")}

                            />
                        </View>
                        <Button theme={"primary"} buttonText={"SignUp"} onPress={handleSubmit}  />
                    </>
                )}
            </Formik>
        </View>
    )
}

export default createAccount;