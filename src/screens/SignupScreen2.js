import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class SignUpScreen2 extends Component {
	render() {
		const {navigation} = this.props;
		return (
			<View>
				<Text>회원가입2 스크린</Text>
				<TouchableOpacity style={{backgroundColor: 'gold'}} onPress={() => {navigation.goBack();}}>
					<Text>돌아가기 버튼</Text>
				</TouchableOpacity>
				<Form>
					<Item fixedLabel rounded>
						<Label>Id</Label>
						<Input />
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
		);
	}
}