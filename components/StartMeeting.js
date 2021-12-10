import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function StartMeeting( {name, setName, roomId, setRoomId} ) {
    return (
        <View style={styles.startMeetingContainer}>
            <View style={styles.info}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Name"
                    placeholderTextColor="#767476"
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.info}>
                <TextInput
                    style={styles.textInput}
                    value={roomId}
                    placeholder="Enter Room ID"
                    placeholderTextColor="#767476"
                    onChangeText={text => setRoomId(text)}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.startMeetingButton}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        Start Meeting
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        color: "white",
        fontSize: 18,
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius: 15,
    }
})