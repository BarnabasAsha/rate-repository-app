import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={{ uri: ownerAvatarUrl }} style={{ width: 90, height: 90, marginRight: 15}} />
                <View>
                    <Text marginBottom="small" fontWeight="bold" fontSize="subheading">{fullName}</Text>
                    <Text marginBottom="medium">{description}</Text>
                    <Text style={styles.language}>{language}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                <View style={styles.flexItem}>
                    <Text fontWeight="bold">{stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.flexItem}>
                    <Text fontWeight="bold">{forksCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.flexItem}>
                    <Text fontWeight="bold">{reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.flexItem}>
                    <Text fontWeight="bold">{ratingAverage}</Text>
                    <Text>Ratings</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        padding: 15
    },
    language: {
        width: 100,
        backgroundColor: '#0365D1',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5
    },
    flexItem: {
        alignItems: 'center'
    }
})

export default RepositoryItem