import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { TextInput } from 'react-native';
import { imageData, moodData } from '@/Data/data';
import { Image } from 'react-native';
import { getDBConnection, createTable, addMood } from '@/Services/database/db_services';
import { TouchableHighlight } from 'react-native-gesture-handler';

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
        backgroundColor: '#CDEFF9',
        height: 500,
    },
    inputBlock: {
        flexDirection: 'row',

    },
    columnstyle:{
        height:400,
        flexDirection: 'column',
        justifyContent : 'space-around'
    }
});

const initializeDatabasetxn = async (mood, description) => {
    try {
        const db = await getDBConnection();
        await createTable(db);
        await addMood(db, mood, description);
    } catch (error) {
        console.error(error);
    }
}






export default class MoodDetail extends Component {

    constructor(props) {
        super(props);
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
        mood = this.props.route.params.selectedMood.description;
        initializeDatabasetxn(this.props.route.params.selectedMood.description, this.state.text);
        this.props.navigation.navigate('MoodQuote', { 'mood': mood, 'submood': "custom" });
    }


    handleDetail = (descrp) => {
        mood = this.props.route.params.selectedMood.description;
        initializeDatabasetxn(this.props.route.params.selectedMood.description, descrp);
        alert("Mood Saved");
        this.props.navigation.navigate('MoodQuote', { 'mood': mood, 'submood': descrp });


    }



    render() {
        const mood = this.props.route.params.selectedMood.description;
        const Submood = Object.keys(moodData[mood]).slice(0, -2);

        return (
            <SafeAreaView>
                <View >
                    <Card containerStyle={styles.card_today}>
                        <Card.Title style={{ fontSize: 20 }}>Feeling {mood}! What's the reason
                            Come'on share with us</Card.Title>
                        <Card.Divider />
                        <View style = {styles.columnstyle}>
                        <View style={styles.detail}>
                            {
                                Submood.map((key) => {
                                    return (
                                        <Pressable key={key} onPress={() => this.handleDetail(key)} style={({ pressed }) => [{ backgroundColor: pressed ? '#FEDEF7' : '#CDEFF9' },]}>
                                            <View style={styles.descrp}>
                                                <Image source={imageData[key]} style={{ width: 50, height: 50 }}></Image>
                                                <Text style={styles.descrpText}>
                                                    {key}
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
                        </View>

                    </Card>
                </View>
            </SafeAreaView>
        );
    }



};
