import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from './../components/Button';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class SignUpScreen2 extends Component {
	render() {
		const {navigation} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.contents}>
					<Form>
						<Item fixedLabel rounded>
							<Label>Id</Label>
							<Input name="user_id" />
						</Item>
						<Item fixedLabel rounded>
							<Label>Password</Label>
							<Input />
						</Item>
						<Item fixedLabel rounded>
							<Label>Password check</Label>
							<Input />
						</Item>
						<Item fixedLabel rounded>
							<Label>name</Label>
							<Input />
						</Item>
					</Form>
				</View>
				<View>
					<Button onPress={() => {navigation.navigate('LoginScreen');}} title={'OK'} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contents: {
		height: '85%',
		paddingTop: 50,
		paddingLeft: 30,
		paddingRight: 40,
	}
});