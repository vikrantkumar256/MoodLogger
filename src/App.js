

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import MoodSelector from './Components/MoodSelector';
import MoodDetail from './Components/MoodDetail';
import MoodQuote from './Components/MoodQuote';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: ''
		};
	}



	componentDidMount() {
		// Get the user's location

	}



	render() {

		return (

			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="MoodSelector"
						component={MoodSelector}
					/>
					<Stack.Screen
						name="MoodDetail"
						component={MoodDetail}
					/>
					<Stack.Screen
						name="MoodQuote"
						component={MoodQuote} />
				</Stack.Navigator>
			</NavigationContainer>


		);
	}
}