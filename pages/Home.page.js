
export default function HomePage({ params: { name, email }}){
    return (
        <>
            <View>
                <View>
                    <View>
                        <Text>{name}</Text>
                        <Text>{email}</Text>
                    </View>
                    {/* Image */}
                </View>
                <View>
                    {/* Search Bar */}
                </View>
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