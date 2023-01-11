import React, { Component } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Text} from 'react-native-elements';
import { AppTextRegular, AppTextBold } from './AppText';

const moodOptions = [
  { emoji: '😊', description: 'Happy' },
  { emoji: '😥', description: 'Sad' },
  { emoji: '😨', description: 'Fear' },
  { emoji: '😠', description: 'Anger' },
  { emoji: '😤', description: 'Disgust' },
  { emoji: '😮', description: 'Surprise' },
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
    console.log("selectedmood", this.state.selectedMood);
  }
  submitmood(option) {
    if (this.state.selectedMood != '') { this.props.navigation.navigate('MoodDetail', { selectedMood: this.state.selectedMood }); }
    else {
      alert("Please select a mood");

    }
  }
  pressedhistory(option) {
    this.props.navigation.navigate('History');
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <AppTextBold style={styles.headingTop}>How are you feeling today?</AppTextBold>
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
                  <Text style={styles.buttonText}>
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
                  <Text style={styles.buttonText}>
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
  
  
  
  
  
  container: {
    borderWidth: 0.5,
    borderColor: '#822faf',
    margin: 10,
    borderRadius: 50,
    padding: 20,
    justifyContent: 'space-between',
    height: 500,
    backgroundColor: '#D9D1F8',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colorBlack,
    flexWrap: 'wrap',
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colorBlack,
  },
  moodItem: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
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
    textTransform: 'capitalize',
    fontWeight:'800',
    marginBottom:20,

  },
  heading: {
    color: theme.colorBlack,
    fontSize: 40,
    letterSpacing: 1,
    textAlign: 'center',
  },
  headingTop: {
    color: theme.colorBlack,
    fontSize: 30,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  headingonClick: {
    color: theme.colorBlack,
    fontSize: 50,
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

