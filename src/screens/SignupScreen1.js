import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import Button from './../components/Button';
import Checkbox from './../components/Checkbox';
import TermOfUse from './../components/TermOfUse';
import PrivacyPolicy from './../components/PrivacyPolicy';
import { styles } from 'react-native-really-awesome-button/src/styles';

export default class SignUpScreen1 extends Component {
	state = { //배열로 변경하기
		modalVisible1: false,
		modalVisible2: false,
		animationType1: 'slide',
		animationType2: 'slide',
	}
	setModal1(visible) {
		this.setState({modalVisible1: visible});
	}
	setModal2(visible) {
		this.setState({modalVisible2: visible});
	}
	render() {
		const {navigation} = this.props;
		return (
			<View style={stylesSignup.container}>
				<View style={stylesSignup.contents}>
					<View style={stylesSignup.mainList}>
						<Checkbox text={'전체동의'} fontSize={18} fontWeight={'700'}/>
					</View>
					<View style={stylesSignup.list}>
						<Checkbox text={'이용 약관'} />
						<TouchableOpacity style={stylesSignup.btnMore} onPress={() => {this.setModal1(!this.state.modalVisible1);}}><Text style={stylesSignup.btnMoreText}>[더보기]</Text></TouchableOpacity>
					</View>
					<View style={stylesSignup.list}>
						<Checkbox text={'개인정보수집 및 이용동의'} />
						<TouchableOpacity style={stylesSignup.btnMore} onPress={() => {this.setModal2(!this.state.modalVisible2);}}><Text style={stylesSignup.btnMoreText}>[더보기]</Text></TouchableOpacity>
					</View>
				</View>
				<Modal visible={this.state.modalVisible1} animationType={this.state.animationType1}>
					<TouchableOpacity style={stylesSignup.exitBtn} onPress={() => {this.setModal1(false);}}><Text>닫기</Text></TouchableOpacity>
					<View style={stylesSignup.topCont}>
						<TermOfUse />
					</View>
					<View style={stylesSignup.bottomCont}>
						<Checkbox text={'동의합니다.'} />
						<View style={{marginTop: 20}}>
							<Button onPress={() => {this.setModal1(!this.state.modalVisible1);}} title={'확인'} />
						</View>
					</View>
				</Modal>
				<Modal visible={this.state.modalVisible2} animationType={this.state.animationType2}>
					<TouchableOpacity style={stylesSignup.exitBtn} onPress={() => {this.setModal2(false);}}><Text>닫기</Text></TouchableOpacity>
					<View style={stylesSignup.topCont}>
						<PrivacyPolicy />
					</View>
					<View style={stylesSignup.bottomCont}>
						<Checkbox text={'동의합니다.'} />
						<View style={{marginTop: 20}}>
							<Button onPress={() => {this.setModal2(!this.state.modalVisible2);}} title={'확인'} />
						</View>
					</View>
				</Modal>
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
	},
	contents: {
		height: '85%',
		paddingTop: 50,
		paddingLeft: 30,
		paddingRight: 40,
	},
	mainList: {
		borderBottomWidth: 1,
		borderBottomColor: '#c2c2c2',
		paddingBottom: 15,
		marginBottom: 10,
	},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 15,
	},
	btnMore: {
		marginLeft: 20,
	},
	btnMoreText: {
		color: '#ad7f18',
	},
	exitBtn: {
		position: 'absolute',
		top: 30,
		right: 30,
		zIndex: 1,
	},
	topCont: {
		height: '75%',
		paddingTop: 40,
		paddingRight: 30,
		paddingLeft: 30,
	},
	bottomCont: {
		paddingTop: 25,
		alignItems: 'center',
	},
	buttonContainer: {
		zIndex: 1,
	}
});