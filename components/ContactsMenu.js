import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButton = [
    {
        type: 'starred',
        name: 'Starred'
    },
    {
        type: 'contact',
        name: 'Roohan',
        photo: require('../assets/favicon.png')
    },
    {
        type: 'contact',
        name: 'AsteriodGamer96',
        photo: require('../assets/favicon.png')
    },
    {
        type: 'contact',
        name: 'AryanDameer',
        photo: require('../assets/favicon.png')
    },
    {
        type: 'contact',
        name: 'Atif Usmani',
        photo: require('../assets/favicon.png'),
    }
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {/* Contact container */}
            {contactsMenuButton.map((contact, index) =>
                <View key={index} style={styles.row}>
                    {/* Image */}
                    {contact.type == "starred" ? (
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#efefef" />
                        </View>) :
                        (
                            <Image source={contact.photo} style={styles.image} />
                        )
                    }
                    {/* Text */}
                    <Text style={styles.text}>
                        {contact.name}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    }
})