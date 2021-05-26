import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
	const navigation = useNavigation();

	return(
		<View style={styles.container}>
			<Text><strong>My Awesome Home Page!</strong></Text>
			<Button
			title='Contact'
			onPress={() => navigation.navigate('Contact')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
})