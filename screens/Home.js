import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

function Home( {navigation} ) {
    return (
            <View style={styles.container}>
                <SafeAreaView style={{height: '100%'}}>
                    <Header />
                    <SearchBar />
                    <MenuButtons navigation={navigation} />
                    <ContactsMenu />
                </SafeAreaView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15,
    }
})

export default Home
