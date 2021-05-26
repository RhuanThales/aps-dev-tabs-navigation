import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function AboutUs() {
	return(
		<View style={styles.container}>
			<Text><strong>We are from TrashMakers!</strong></Text>
			<Text>We are the best development group in the world!</Text>
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