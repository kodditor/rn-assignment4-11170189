import { Text, View, StyleSheet, Image } from 'react-native'
import SearchBar from '../components/SearchBar.component'

export default function HomePage({ route: { params: { name, email} }}){

    return (
        <>
            <View style={styles.pageContainer}>
                <View style={styles.accountDetailsContainer} >
                    <View>
                         <Text style={styles.accountName}>{name}</Text>
                        <Text style={styles.accountEmail}>{email}</Text>
                    </View>
                    <Image
                        source={require('../assets/accountPhoto.png')}
                        style={styles.accountPhoto}
                    />
                </View>
                <SearchBar />
                <View>
                    {/* Featured Jobs Flatlist */}
                </View>
                <View>
                    {/* Popular Jobs Flatlist */}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        color: 'black',
        display: 'flex',
        gap: 30,
        margin: 25,
        height: '100%',
        fontFamily: 'sans-serif'
    },
    accountDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    },
    accountName: {
        fontSize: 25,
        fontWeight: '900',
    },
    accountEmail: {
        color: 'grey',
        fontSize: 16,
    },
    accountPhoto: {
        width: 40,
        aspectRatio: 1,
    },
})