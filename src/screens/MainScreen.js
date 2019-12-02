import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

export default class MainScreen extends Component {
	// toggleDrawer = () => {
	// 	this.props.navigationProps.toggleDrawer();
	// };
	render() {
		const {navigation} = this.props;
		return (
			<View>
				<Text>메인 스크린</Text>
				<TouchableOpacity onPress={() => {navigation.toggleDrawer();}}>
					<Text>메뉴 열기 버튼</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>돌아가기 버튼</Text>
				</TouchableOpacity>
			</View>
		);
	}
}