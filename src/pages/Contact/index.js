import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Contact() {
	return(
		<View style={styles.container}>
			<Text><strong>Contact:</strong></Text>
			<Text>E-mail: trashmakers@thebest.com</Text>
			<Text>Phone: +55 (34) 4433-5532</Text>
			<Text>WhatsApp: +55 (34) 9 9933-2235</Text>
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