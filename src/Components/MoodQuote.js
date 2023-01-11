import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView} from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { moodData } from '@/Data/data';

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
        borderRadius: 100,
    }
})

export default class MoodQuote extends Component {

    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);
        this.goHistory = this.goHistory.bind(this);
    }

    goHome() {
        this.props.navigation.navigate('MoodSelector');
    }
    goHistory() {
        this.props.navigation.navigate('History');
    }
    render() {
        const mood = this.props.route.params.mood
        const submood = this.props.route.params.submood;
        const quote = moodData[mood][submood];
        return (
            <SafeAreaView>
                <Card containerStyle={styles.card_today}>
                    <Card.Title style={{ fontSize: 24, fontFamily: 'Quicksand-Bold' }}> Quotes for cheering up</Card.Title>
                    <Card.Divider />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "700", padding: 10, textAlign: 'center', backgroundColor: "white", borderRadius: 20, fontFamily: 'Quicksand-Regular' }}>
                            {quote}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableHighlight onPress={this.goHome} style={styles.home}>
                            <Text style={{ color: "white", fontWeight: "800" }}>
                                Home
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goHistory} style={styles.home}>
                            <Text style={{ color: "white", fontWeight: "800" }}>
                                History
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Card>
            </SafeAreaView>
        );
    }



}