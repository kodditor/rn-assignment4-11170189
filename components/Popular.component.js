import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

export default function PopularComponent(){

    return (
        <>
            <View style={styles.pageContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.sectionTitle}>Popular Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FlatList
                    data={popularJobs}
                    keyExtractor={(_, index) => index}
                    renderItem={({item, idx}) => {
                        return (
                            <>
                                <View style={styles.cardContainer} >
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                        <View style={{
                                            padding: 5,
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
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexGrow: 1
                                            }}>
                                            <View>
                                                <Text style={styles.cardTitle}>{item.title}</Text>
                                                <Text >{item.company}</Text>
                                            </View>
                                            <View style={styles.secondaryDetails}>
                                                <Text style={{ fontWeight: '600' }} >{item.salary}/y</Text>
                                                <Text >{item.location}</Text>
                                            </View>
                                        </View>
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
        marginBottom: 10,
        borderRadius: 20,
        padding: 15,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0ff'
    },
    cardTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 2
    },

    secondaryDetails: {
        display: 'flex',
        gap: 2,
        alignItems: 'flex-end'
    }

})

const popularJobs = [
    {
        title: "Senior Software Engineer",
        salary: "$180,000",
        company: "Amazon",
        location: "Seattle, WA",
        image: require('../assets/amazon.png')
    },
    {
        title: "Data Analyst",
        salary: "$120,000",
        company: "Facebook",
        location: "Menlo Park, CA",
        image: require('../assets/facebook.png')
    },
    {
        title: "Network Enginee",
        salary: "$140,000",
        company: "Cisco Systems",
        location: "San Jose, CA",
        image: require('../assets/cisco.png')
    },
    {
        title: "Sales Manager",
        salary: "$125,000",
        company: "PepsiCo",
        location: "Chicago, IL",
        image: require('../assets/pepsi.png')
    },
    {
        title: "Project Manager",
        salary: "$130,000",
        company: "IBM",
        location: "Boston, MA",
        image: require('../assets/ibm.png')
    },
    {
        title: "Cloud Solutions Architect",
        salary: "$160,000",
        company: "Oracle",
        location: "Austin, TX",
        image: require('../assets/oracle.png')
    },
    {
        title: "Mobile App Developer",
        salary: "$150,000",
        company: "Uber",
        location: "San Francisco, CA",
        image: require('../assets/uber.png')
    },
    {
        title: "Customer Service Representative",
        salary: "$60,000",
        company: "American Express",
        location: "Phoenix, AZ",
        image: require('../assets/american-express.png')
    },

]