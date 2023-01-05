import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { TextInput } from 'react-native';
import { loadLanguages } from 'i18next';
import { PieChart } from "react-native-gifted-charts";

import { getDBConnection,createTable,getmoodItems,savemoodItems, addMood } from '@/Services/database/db_services';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

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
    history: {
        fontSize: 30,
        flexDirection: 'row-reverse',
        paddingLeft: 20,

    }

});







export default class History extends Component {

    constructor(props) {
        super(props);
        // const {params} = this.props.navigation.state;
        // this.selectedMood = params.selectedMood;
        this.state = {
            mooditems: [],
            moodcount:{
              "studios" : 0,
              "pensive" : 0,
              "happy" : 0,
              "celebratory" : 0,
              "frustrated" :0
            },
        };

        this.initializeDatabasetxn = this.initializeDatabasetxn.bind(this);
        this.getMoodcount = this.getMoodcount.bind(this);

        

        this.initializeDatabasetxn();

        
        
    }

    async initializeDatabasetxn() {
        try {
        //   const initMood = {  mood: mood, description:description };
        
          const db = await getDBConnection();
          await createTable(db);
          const storedMoodItems = await getmoodItems(db);
          console.log(storedMoodItems);
          await this.setState((prevState) => ({
            mooditems : storedMoodItems
          }));
          this.getMoodcount();
          

          console.log("historymood items",this.state.mooditems);
        } catch (error) {
          console.error(error);
        }
      }
    
      async getMoodcount(){

        const countMood = {
          "studios" : 0,
          "pensive" : 0,
          "happy" : 0,
          "celebratory" : 0,
          "frustrated" :0
        }
        for(var i=0; i<this.state.mooditems.length;i++)
        {
          countMood[this.state.mooditems[i].mood]+=1;

        }
        console.log("countmood",countMood);
        await this.setState((prevState)=> ({moodcount:countMood}));
        console.log("moodcount",this.state.moodcount);



      }


    





    render() {

        
          const pieData = [
                  {key:1,value: this.state.moodcount.studios, color: '#2a9d8f', text: '🧑‍💻'},
                  {key:2,value: this.state.moodcount.pensive, color: '#f7d6e0', text: '🤔'},
                  {key:3,value: this.state.moodcount.happy, color: '#ef476f', text: '😊'},
                  {key:4,value: this.state.moodcount.celebratory, color: '#ffb703', text: '🥳'},
                  {key:5,value: this.state.moodcount.frustrated, color: '#21b0fe', text: '😤'},
              ];
            
        

        return (
            <SafeAreaView>
                <View>
                    <Card containerStyle={styles.card_today}>
                        <Card.Title style={{ fontSize: 20 }}>{"History"}</Card.Title>
                        <Card.Divider />
                        <View style={styles.detail}>
                            {/* {
                                this.state.mooditems.map(({ id, mood, description }) => {
                                    return (
                                        <Pressable key={id} onPress={this.handleDetail} style={({ pressed }) => [{ backgroundColor: pressed ? '#FEDEF7' : '#CDEFF9' },]}>
                                            <View style={styles.descrp}>
                                                <Text style={styles.emoji}>
                                                    {mood}
                                                </Text>
                                                <Text style={styles.descrpText}>
                                                    {description}
                                                </Text>
                                            </View>
                                        </Pressable>
                                    )
                                })
                            } */}
                            {/* <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"mood"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
/> */}
                  <PieChart
                            showText
                            textColor="black"
                            radius={150}
                            textSize={20}
                              showTextBackground
                              textBackgroundRadius={18}
                            data={pieData}
                            />
                        </View>

                    </Card>
                </View>
            </SafeAreaView>
        );
    }



};
