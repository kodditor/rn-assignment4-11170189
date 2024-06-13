import { StyleSheet, TextInput, TouchableHighlight, View } from "react-native";


export default function LoginPage(){

    return (
        <>
            <View>
                <View>
                    <Text>Jobizz</Text>
                    <Text>Welcome Back 👋</Text>
                    <Text>Let's log in. Apply to Jobs!</Text>
                </View>
                <View>
                    <TextInput />
                    <TextInput />
                    <TouchableHighlight>
                        <Text>Log In</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <View>
                        <View />
                        <View>
                            <Text>Or continue with</Text>
                        </View>
                        <View />
                        <View>
                            {/* Icons */}
                        </View>
                        <View>
                            <Text>Haven't got an account? <Text>Register</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

})