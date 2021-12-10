import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'

function MeetingRoom() {
    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()

    useEffect(() => {
        const API_URl = "http://192.168.29.253:3001/"
        socket = io(`${API_URl}`);
        console.log("Hello World")
        socket.on('connection', () => console.log("connected"))
    }, [])

    return (
        <View style={styles.container}>
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    }
})