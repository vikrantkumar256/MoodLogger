import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { TextInput } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';
import { FontSize } from '@/Theme/Variables';

const styles = StyleSheet.create({
    card_today: {
        borderRadius: 50,
        backgroundColor: '#CDEFF9'
    },
    home: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: "green",
    }
})

export default class MoodQuote extends Component {

    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);
    }

    goHome() {
        this.props.navigation.navigate('MoodSelector');
    }
    render() {
        return (
            <SafeAreaView>
                <Card containerStyle={styles.card_today}>
                    <Card.Title style={{ fontSize: 28 }}> Quotes for cheering up</Card.Title>
                    <Card.Divider />
                    <View>
                        <Text style={{ fontSize: 24, padding: 10, textAlign: 'center', backgroundColor: "white", borderRadius: 20 }}>
                            We cannot solve problems with the kind of thinking we employed when we came up with them.
                        </Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={this.goHome} style={styles.home}>
                            <Text>
                                Home
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Card>
            </SafeAreaView>
        );
    }



}