import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, Alert, Switch } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Ronny!</Text>
			<Text style={styles.headingText}>What is going on!?</Text>
			<Button
				title='Press Me'
				style={styles.button}
				onPress={() => Alert.alert('You pressed the button!')}
				accessibilityLabel={'Press this button to popup an alert'}
			/>
			<StatusBar style='auto' />
      <Switch />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		margin: 10,
		justifyContent: 'center',
	},
	headingText: {
		fontSize: 36,
	},
	button: {
		backgroundColor: 'yellow',
		padding: 20,
	},
})
