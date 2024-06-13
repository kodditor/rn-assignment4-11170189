import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

export default function FeaturedComponent(){

    return (
        <>
            <View style={styles.pageContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.sectionTitle}>Featured Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    data={featuredJobs}
                    horizontal
                    keyExtractor={(_, index) => index}
                    renderItem={({item, idx}) => {
                        return (
                            <>
                                <View style={{
                                    ...(styles.cardContainer),
                                    backgroundColor: item.color,
                                }} >
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                                        <View style={{
                                            padding: 10,
                                            backgroundColor:'white',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 15
                                        }}>
                                            <Image
                                                source={item.image}
                                                style={{
                                                    height: 30,
                                                    aspectRatio: 1
                                                }}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.cardTitle}>{item.title}</Text>
                                            <Text style={{ color: 'white' }}>{item.company}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.secondaryDetails}>
                                        <Text style={{ color: 'white' }}>{item.salary}</Text>
                                        <Text style={{ color: 'white' }}>{item.location}</Text>
                                    </View>
                                </View>
                            </>
                        )

                    }}
                />
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    pageContainer: {
        color: 'black',
        display: 'flex',
        gap: 15,
        fontFamily: 'sans-serif'
    },
    headerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700'
    },
    seeAll: {
        color: 'grey'
    },
    cardContainer: {
        marginRight: 10,
        borderRadius: 20,
        padding: 15,
        height: 150,
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontWeight: '700',
        fontSize: 18,
        color: 'white',
        marginBottom: 2
    },

    secondaryDetails: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between'
    }

})

const featuredJobs = [
    {
        title: "Software Engineer",
        color: "#4285F4",
        salary: "$160,000",
        company: "Google",
        location: "Mountain View, CA",
        image: require('../assets/google.png')
    },
    {
        title: "Marketing Manager",
        color: "#E31837",
        salary: "$110,000",
        company: "PepsiCo",
        location: "New York, NY",
        image: require('../assets/pepsi.png')
    },
    {
        title: "Data Scientist",
        color: "#0078D7",
        salary: "$145,000",
        company: "Microsoft",
        location: "Redmond, WA",
        image: require('../assets/microsoft.png')
    },
    {
        title: "UX Designer",
        color: "#A2AAAD",
        salary: "$125,000",
        company: "Apple",
        location: "Cupertino, CA",
        image: require('../assets/apple.png')
    },
    {
        title: "Product Manager",
        color: "#FFC300",
        salary: "$135,000",
        company: "McDonald's",
        location: "Mountain View, CA",
        image: require('../assets/mcdonalds.png')
    },
]