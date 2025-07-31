import { Text, View } from "react-native";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";
import { Formik } from "formik";

const emailLogin = ({ navigation }) => {

    const initialFormValues = {
        userEmail: '',
        password: '',
    }

    const toCreateAccount = () => {
        navigation.navigate("CreateAccount")
    }

    async function handleForSubmit(formValues) {
        try {
            await signInWithEmailAndPassword(getAuth(), formValues.userEmail, formValues.password)
            console.log("Giriş Başarılı")
            navigation.navigate("Home")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{
            marginTop: 55,
        }}>
            <Formik initialValues={initialFormValues} onSubmit={handleForSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            title={"E-MAIL"}
                            placeHolder={"E-Mail "}
                            onChange={handleChange("userEmail")}
                        />

                        <Input
                            title={"PASSWORD"}
                            placeHolder={"Password"}
                            onChange={handleChange("password")}
                            securityText={true}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Button theme={"primary"} buttonText={"Login"} onPress={handleSubmit} />
                        </View>

                    </>
                )}
            </Formik>

            <Button theme={"third"} buttonText={"Don't have account? Let's create!"} onPress={toCreateAccount} />
        </View>
    )
}

export default emailLogin;