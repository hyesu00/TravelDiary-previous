import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import Button from './../components/Button';
import Checkbox from './../components/Checkbox';
import TermOfUse from './../components/TermOfUse';

export default class SignUpScreen1 extends Component {
	state = {
		modalVisible: false,
		animationType: 'slide',
	}
	setModal(visible) {
		this.setState({modalVisible: visible});
	}
	render() {
		const {navigation} = this.props;
		return (
			<View style={stylesSignup.container}>
				<View style={stylesSignup.contents}>
					<Checkbox text={'전체동의'} />
					<TouchableOpacity onPress={() => {this.setModal(!this.state.modalVisible);}}><Text>클릭</Text></TouchableOpacity>
				</View>
				<Modal visible={this.state.modalVisible} animationType={this.state.animationType}>
					<TouchableOpacity style={stylesSignup.exitBtn} onPress={() => {this.setModal(false);}}><Text>닫기</Text></TouchableOpacity>
					<View style={stylesSignup.topCont}>

					</View>
					<View style={stylesSignup.bottomCont}>
						<Checkbox />
						<Button title={'확인'} />
					</View>
				</Modal>
				{/* <Modal visible={this.state.modalVisible}>
					<Text>흠</Text>
				</Modal> */}
				<View style={stylesSignup.buttonContainer}>
					<Button onPress={() => {navigation.navigate('SignupScreen2');}} title={'OK'} />
				</View>
			</View>
		);
	}
}

const stylesSignup = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue',
	},
	exitBtn: {
		position: 'absolute',
		right: 0,
		zIndex: 1,
	},
	topCont: {
		height: '70%',
		backgroundColor: 'pink'
	},
	buttonContainer: {
		zIndex: 1,
	}
});