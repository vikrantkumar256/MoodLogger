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
            mooditems: []
        };

        this.initializeDatabasetxn = this.initializeDatabasetxn.bind(this);

        

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
          console.log(this.state.mooditems);
        } catch (error) {
          console.error(error);
        }
      }
    


    





    render() {

        // console.log(this.props.route.params.selectedMood);
        const data = [
            {
              name: "studious",
              population: 21500000,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "pensive",
              population: 2800000,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "happy",
              population: 527612,
              color: "red",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "celebratory",
              population: 8538000,
              color: "#ffffff",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "frustrated",
              population: 11920000,
              color: "rgb(0, 0, 255)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          ];
          const chartConfig = [
            {
              backgroundColor: '#000000',
              backgroundGradientFrom: '#1E2923',
              backgroundGradientTo: '#08130D',
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              style: {
                borderRadius: 16
              }
            },
            {
              backgroundColor: '#022173',
              backgroundGradientFrom: '#022173',
              backgroundGradientTo: '#1b3fa0',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            },
            {
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
            },
            {
              backgroundColor: '#26872a',
              backgroundGradientFrom: '#43a047',
              backgroundGradientTo: '#66bb6a',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            },
            {
              backgroundColor: '#000000',
              backgroundGradientFrom: '#000000',
              backgroundGradientTo: '#000000',
              color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
            }
          ];
          const pieData = [
                  {value: 54, color: '#2a9d8f', text: '🧑‍💻'},
                  {value: 40, color: '#f7d6e0', text: '🤔'},
                  {value: 20, color: '#ef476f', text: '😊'},
                  {value: 10, color: '#ffb703', text: '🥳'},
                  {value: 5, color: '#21b0fe', text: '😤'},
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
