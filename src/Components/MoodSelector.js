import React, { Component } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Text, Card, Divider, Switch } from 'react-native-elements';
import { AppTextRegular, AppTextBold } from './AppText';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import LogNav from '../Navigators/LogNav';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export default class MoodPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMood: '',
      dialogVisible: false,
      error: ''
    };
    this.pressedemoji = this.pressedemoji.bind(this);


  }






  async pressedemoji(option) {

    console.log(option.description, "emoji clicked");
    await this.setState((prevState) => ({
      selectedMood: option
    }));
    console.log("selectedmood",this.state.selectedMood);
    // this.props.navigation.navigate('MoodDetail', { selectedMood: this.state.selectedMood });
  }
  submitmood(option) {
    if(this.state.selectedMood !='')
    {this.props.navigation.navigate('MoodDetail', { selectedMood: this.state.selectedMood });}
    else
    {
      this.setState((prevState) => ({
        dialogVisible:true
      }));

    }
  }
  pressedhistory(option) {
    this.props.navigation.navigate('History');
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
              <Dialog
            visible={this.state.dialogVisible}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
              >
            <DialogContent>
              Please select a mood.
            </DialogContent>
          </Dialog>
          <AppTextBold style={styles.heading}>How are you feeling today?</AppTextBold>
          <View style={styles.moodList}>
            {
              moodOptions.map(option => (
                <View key={option.emoji} style={{ alignItems: 'center' }}>
                  <Pressable
                    onPress={() => this.pressedemoji(option)}
                    style={[
                      styles.moodItem,
                      this.state.selectedMood?.emoji === option.emoji
                        ? styles.selected
                        : undefined,
                    ]}>
                    <Text style={this.state.selectedMood?.emoji === option.emoji
                      ? styles.headingonClick
                      : styles.heading}>{option.emoji}</Text>
                  </Pressable>
                  <AppTextRegular style={styles.descriptionText}>
                    {option.emoji === this.state.selectedMood?.emoji
                      ? option.description
                      : undefined}
                  </AppTextRegular>
                </View>
              ))
            }

          </View>
          <View style={styles.buttonList}>
          <View style={styles.button}>
                <Pressable
                onPress={() => this.submitmood()}
                >
                    <View>
                        <Text style = {styles.buttonText}>
                            Submit
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable
                onPress={() => this.pressedhistory()}
                >
                    <View>
                        <Text style = {styles.buttonText}>
                            History
                        </Text>
                    </View>
                </Pressable>
            </View>
          </View>
        </View>

      </View>



    );
  }
}
const theme = {
  primary: '#ea9658',
  secondary: '#f5e5c1',
  colorPurple: '#454C73',
  colorWhite: '#fff',
  colorBlack: '#111',
  colorLavender: '#87677B',
  colorBlue: '#1D84B5',
  colorGrey: '#8E9AAF',

  //fonts
  fontFamilyBold: 'Quicksand-Bold',
  fontFamilyRegular: 'Quicksand-Regular',
  fontFamilyLight: 'Quicksand-Thin',
};
const styles = StyleSheet.create({

  card: {
    backgroundColor: theme.colorBlack,
    borderWidth: 0,
    borderRadius: 50
  },
  time: {
    fontSize: 38,
    color: '#fff'
  },
  temperature: {
    fontSize: 38,
    color: '#fff',
    textTransform: 'capitalize'
  },
  type: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize'
  },
  loading: {
    fontSize: 28,
    color: '#fff',
    textTransform: 'capitalize'
  },
  container: {
    borderWidth: 0.5,
    borderColor: '#822faf',
    margin: 10,
    borderRadius: 50,
    padding: 20,
    justifyContent: 'space-between',
    height: 230,
    backgroundColor: '#D9D1F8',
  },
  image: {
    alignSelf: 'center',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colorBlack,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colorBlack,
  },
  moodText: {
    fontSize: 25,
    margin: 10,
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#822faf',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    color: theme.colorBlack,
    backgroundColor: '#8B4CFC'
  },
  selected: {
    backgroundColor: theme.colorWhite,
    borderColor: '#8B4CFC',
    borderWidth: 5,
    borderRadius: 30,

  },
  descriptionText: {
    color: theme.colorBlack,
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'capitalize'
  },
  heading: {
    color: theme.colorBlack,
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  headingonClick: {
    color: theme.colorBlack,
    fontSize: 30,
    letterSpacing: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#822faf',
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
  },



});

