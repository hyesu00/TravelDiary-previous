import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class SignUpScreen1 extends Component {
	render() {
		const {navigation} = this.props;
		return (
			<View>
				<Text>회원가입1 스크린</Text>
				<TouchableOpacity style={{backgroundColor: 'skyblue'}} onPress={() => {navigation.navigate('SignupScreen2');}}>
					<Text>회원가입2 스크린으로 이동하기</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor: 'gold'}} onPress={() => {navigation.goBack();}}>
					<Text>돌아가기 버튼</Text>
				</TouchableOpacity>
			</View>
		);
	}
}