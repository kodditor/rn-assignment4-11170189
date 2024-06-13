import { StyleSheet, TextInput, View } from "react-native"
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

export default function SearchBar(){

    return (
        <>
            <View style={styles.parentContainer}>
                <View>
                    <TextInput
                        placeholder="Search a job or position"
                        placeholderTextColor='grey'
                        style={styles.textInput}
                    />
                    <MagnifyingGlassIcon size={15}style={styles.textInputIcon} />
                </View>
                <View style={styles.settingsContainer}>
                    <AdjustmentsVerticalIcon style={styles.settings} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
        alignItems: 'center',
    },
    textInput: {
        borderRadius: 1.5,
        padding: 10,
        paddingLeft: 35,
        backgroundColor: '#f0f0ff',
        borderColor: 'grey',
        borderWidth: 0.05,
        width: 240
    },
    textInputIcon: {
        display: 'inline',
        position: 'absolute',
        bottom: 16,
        left: 12,
        color:'grey',
    },  
    settingsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        aspectRatio: 1,
        borderRadius: 1.5,
        borderWidth: 0.05,
        borderColor: 'grey',
        backgroundColor: '#f0f0ff',
        display: 'inline',
    },
    settings: {
        width: 15,
        color: 'grey',
    }
})