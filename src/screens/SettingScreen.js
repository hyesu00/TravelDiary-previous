import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class SettingScreen extends Component {
	render() {
		return (
			<View>
				<Text>세팅 스크린</Text>
				<TouchableOpacity>
					<Text>돌아가기 버튼</Text>
				</TouchableOpacity>
			</View>
		);
	}
}