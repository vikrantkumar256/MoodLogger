import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { TextInput } from 'react-native';
import { loadLanguages } from 'i18next';

import { getDBConnection, createTable, getmoodItems, savemoodItems, addMood } from '@/Services/database/db_services';
import { TouchableHighlight } from 'react-native-gesture-handler';

const DetailQ = [
    "Everything falls in place when you feel grateful, why are you feeling grateful?"

];

const moodDescrpt = [
    {
        'emoji': "😴",
        "descrp": "sleep"
    },
    {
        'emoji': "🛍️",
        "descrp": "shopping"
    },
    {
        "emoji": "🧗‍♂️",
        "descrp": "Activity"
    },
    {
        "emoji": "🎉",
        "descrp": "Party"
    },
    {
        "emoji": "🌤",
        "descrp": "weather"
    }
];

const sendEmoji = '';
const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    descrp: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: 100,
        width: 100,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: "white",
    },
    emoji: {
        fontSize: 30,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 40
    },
    descrpText: {
        fontWeight: 'bold'
    },
    card_today: {
        borderRadius: 50,
        backgroundColor: '#CDEFF9'
    },
    inputBlock: {
        flexDirection: 'row',

    }
});

const initializeDatabasetxn = async (mood, description) => {
    try {
        //   const initMood = {  mood: mood, description:description };
        console.log("mood", mood, "description", description);
        const db = await getDBConnection();
        await createTable(db);
        await addMood(db, mood, description);
        const storedMoodItems = await getmoodItems(db);
        if (storedMoodItems.length) {
            console.log(storedMoodItems);
        } else {
            console.log(storedMoodItems);
            // await savemoodItems(db, initMood);
        }
    } catch (error) {
        console.error(error);
    }
}






export default class MoodDetail extends Component {

    constructor(props) {
        super(props);
        // const {params} = this.props.navigation.state;
        // this.selectedMood = params.selectedMood;
        this.state = {
            "text": ""
        };







        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
    }






    handleChangeText(data) {
        this.setState({
            text: data
        });
    }

    saveInput = () => {
        console.log(this.props.route.params.selectedMood.description, this.state.text);
        initializeDatabasetxn(this.props.route.params.selectedMood.description, this.state.text);
        // initDatabase(this.props.route.params.selectedMood, this.state.text);
        // alert("Mood Saved");
        this.props.navigation.navigate('MoodQuote');
    }

    handleDetail = (descrp) => {
        console.log(descrp);
        console.log(this.props.route.params.selectedMood.description);
        initializeDatabasetxn(this.props.route.params.selectedMood.description, descrp);
        alert("Mood Saved");
        this.props.navigation.navigate('MoodQuote');


    }



    render() {


        return (
            <SafeAreaView>
                <View>
                    <Card containerStyle={styles.card_today}>
                        <Card.Title style={{ fontSize: 20 }}>{DetailQ[0]}</Card.Title>
                        <Card.Divider />
                        <View style={styles.detail}>
                            {
                                moodDescrpt.map(({ emoji, descrp }) => {
                                    return (
                                        <Pressable key={descrp} onPress={() => this.handleDetail(descrp)} style={({ pressed }) => [{ backgroundColor: pressed ? '#FEDEF7' : '#CDEFF9' },]}>
                                            <View style={styles.descrp}>
                                                <Text style={styles.emoji}>
                                                    {emoji}
                                                </Text>
                                                <Text style={styles.descrpText}>
                                                    {descrp}
                                                </Text>
                                            </View>
                                        </Pressable>
                                    )
                                })


                            }
                        </View>
                        <View style={styles.inputBlock}>
                            <TextInput
                                style={[styles.input, { flexGrow: 1 }]}
                                onChangeText={data => this.handleChangeText(data)}
                                value={this.state.text}
                                placeholder="Write Custom Reason"
                                onSubmitEditing={this.saveInput}
                            />
                            <TouchableHighlight onPress={this.saveInput} style={[styles.input, { backgroundColor: "green" }]}>
                                <Text style={{ color: 'white', fontWeight: "800" }}>
                                    Send
                                </Text>
                            </TouchableHighlight>
                        </View>

                    </Card>
                </View>
            </SafeAreaView>
        );
    }



};
