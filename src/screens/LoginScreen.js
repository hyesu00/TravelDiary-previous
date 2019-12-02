import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class LoginScreen extends Component {
	render() {
		return (
			<View>
				<Text>로그인 스크린</Text>
				<TouchableOpacity style={{backgroundColor: 'skyblue'}} onPress={() => this.props.navigation.navigate('SignupScreen1')}>
					<Text>회원가입 스크린으로 이동하기</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor: 'gold'}} onPress={() => this.props.navigation.navigate('Main')}>
					<Text>메인 스크린으로 이동하기</Text>
				</TouchableOpacity>
			</View>
		);
	}
}