

import React, {Component} from 'react';
import { FlatList } from 'react-native';
import MoodPicker from './Components/MoodSelector';
import MoodDetail from './Components/MoodDetail'

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			error:''
		};
	}

	
	componentDidMount(){
		// Get the user's location
		
	}



	render() {

		return (
			<React.Component>
            <MoodPicker />
			<MoodDetail />
			</React.Component>

		);
	}
}