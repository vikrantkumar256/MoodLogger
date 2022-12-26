// import 'react-native-gesture-handler'
// import React from 'react'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'
// import { store, persistor } from '@/Store'
// import ApplicationNavigator from '@/Navigators/Application'
// import './Translations'

// const App = () => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <ApplicationNavigator />
//     </PersistGate>
//   </Provider>
// )

// export default App


import React, {Component} from 'react';
import { FlatList } from 'react-native';
import MoodPicker from './Components/MoodSelector';

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
            <MoodPicker />
			
		);
	}
}

