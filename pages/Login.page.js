import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, Text, Image, TouchableHighlight, View } from "react-native";


export default function LoginPage(){

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    const navigation = useNavigation();

    function handleSubmit(){
        navigation.navigate('Home', { name: name, email: email })
    }

    return (
        <>
            <View style={styles.pageContainer}>
                <View>
                    <Text style={styles.title}>Jobizz</Text>
                    <Text style={styles.header} >Welcome Back 👋</Text>
                    <Text style={styles.subtitle}>Let's log in. Apply to Jobs!</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor='grey'
                        style={styles.input}
                        onChangeText={setName}
                     />
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor='grey'
                        style={styles.input}
                        onChangeText={setEmail}
                    />
                    <TouchableHighlight style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <View style={styles.continueSection}>
                        <View style={styles.continueSpan} />
                        <View>
                            <Text style={styles.continueText}>Or continue with</Text>
                        </View>
                        <View style={styles.continueSpan} />
                    </View>
                    <View style={styles.loginIconsSection}>
                        <Image
                            style={styles.loginIcon}
                            source={require('../assets/apple.png')} 
                        />
                        <Image
                            style={styles.loginIcon}
                            source={require('../assets/google.png')} 
                        />
                        <Image
                            style={styles.loginIcon}
                            source={require('../assets/facebook.png')} 
                        />
                    </View>
                    <View style={styles.registerSection}>
                        <Text>Haven't got an account? <Text style={styles.registerTextHighlight}>Register</Text></Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 25,
        marginTop: 10,
        height: '100%',
        gap: 50,
        fontFamily: 'sans-serif'
    },
    title: {
        color: '#0077dd',
        fontSize: 20,
        marginBottom: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 10,
    },
    subtitle: {
        color: 'grey'
    },
    input: {
        padding: 10,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#0077dd',
        fontSize: 15,
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 2,
    },
    loginButtonText: {
        color: 'white',
    },
    continueSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        gap: 10,
    },
    continueText: {
        color: 'grey'
    },
    continueSpan: {
        width: 'auto',
        flex: 1,
        height: 1,
        backgroundColor: 'grey'
    },
    loginIconsSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    loginIcon: {
        height: 25,
        width: 25,
    },
    registerSection: {
        color: 'grey',
        textAlign: 'center',
        margin: 'auto',
    },
    registerTextHighlight: {
        color: '#0077dd',
        fontWeight: '600',
    },
})