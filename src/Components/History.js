import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { PieChart } from "react-native-gifted-charts";
import { getDBConnection, createTable, getmoodItems } from '@/Services/database/db_services';



const styles = StyleSheet.create({
  detail: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: 400,
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
  history: {
    fontSize: 30,
    flexDirection: 'row-reverse',
    paddingLeft: 20,

  }

});







export default class History extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mooditems: [],
      moodcount: {
        "Happy": 0,
        "Sad": 0,
        "Fear": 0,
        "Anger": 0,
        "Disgust": 0,
        "Surprise": 0,
      },
    };

    this.initializeDatabasetxn = this.initializeDatabasetxn.bind(this);
    this.getMoodcount = this.getMoodcount.bind(this);
    this.initializeDatabasetxn();
  }

  async initializeDatabasetxn() {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedMoodItems = await getmoodItems(db);
      await this.setState((prevState) => ({
        mooditems: storedMoodItems
      }));
      this.getMoodcount();
    } catch (error) {
      console.error(error);
    }
  }

  async getMoodcount() {

    const countMood = {
      "Happy": 0,
      "Sad": 0,
      "Fear": 0,
      "Anger": 0,
      "Disgust": 0,
      "Surprise": 0,
    }
    for (var i = 0; i < this.state.mooditems.length; i++) {
      countMood[this.state.mooditems[i].mood] += 1;
    }
    await this.setState((prevState) => ({ moodcount: countMood }));

  }








  render() {


    const pieData = [
      { value: this.state.moodcount.Happy, color: '#2a9d8f', text: '😊' },
      { value: this.state.moodcount.Sad, color: '#f7d6e0', text: '😥' },
      { value: this.state.moodcount.Fear, color: '#ef476f', text: '😨' },
      { value: this.state.moodcount.Anger, color: '#ffb703', text: '😠' },
      { value: this.state.moodcount.Disgust, color: '#21b0fe', text: '😤' },
      { value: this.state.moodcount.Surprise, color: '#A04E3C', text: '😮' }
    ];



    function showpie() {
      var sum = 0;
      for (var i = 0; i < pieData.length; i++) {
        sum = sum + parseInt(pieData[i].value);
      }
      if (sum <= 0) {
        return <Text style={{ textAlign: "center" }}>There is no mood logged yet</Text>
      }
      else {
        return <PieChart
          showText
          textColor="black"
          radius={150}
          textSize={20}
          showTextBackground
          textBackgroundRadius={18}
          data={pieData}
        />
      }
    }


    return (

      <SafeAreaView>

        <View>
          <Card containerStyle={styles.card_today}>
            <Card.Title style={{ fontSize: 20 }}>{"History"}</Card.Title>
            <Card.Divider />
            <View style={styles.detail}>


              {showpie()}
            </View>

          </Card>
        </View>
      </SafeAreaView>
    );
  }



};
