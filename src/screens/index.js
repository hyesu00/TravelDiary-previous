import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './LoginScreen';
import SignupScreen1 from './SignupScreen1';
import SignupScreen2 from './SignupScreen2';
import MainScreen from './MainScreen';
import CategoryListScreen from './CategoryListScreen';
import DiaryListScreen from './DiaryListScreen';
import MypageScreen from './MyPageScreen';
import SettingScreen from './SettingScreen';

const SignupStack = createStackNavigator(
	{
		SignupScreen1,
		SignupScreen2,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '회원가입',
		}),
	}
);

const ListStack = createStackNavigator(
	{
		CategoryListScreen,
		DiaryListScreen,
	}
);

const MainStack = createDrawerNavigator(
	{
		MainScreen,
		ListStack,
		MypageScreen,
		SettingScreen,
	},
	{
		// headerMode: on,
	}
/* 	{
		test1: {
			screen: MainScreen,
			navigationOptions: {
				drawerLabel: 'test screen1',
			},
		},
		Test2: {
			screen: SettingScreen,
			navigationOptions: {
				drawerLabel: 'test screen2'
			},
		},
	} */
);

const AppNavigator = createStackNavigator(
	{
		First: LoginScreen,
		Signup: SignupStack,
		Main: MainStack,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '로그인',
		}),
		initialRouteName: 'First', headerMode: 'none',
	}
);

export default createAppContainer(AppNavigator);

// const AppNavigator = createStackNavigator(
// 	{
// 		First: LoginScreen,
// 		Signup1: SignupScreen1,
// 		Signup2: SignupScreen2,
// 		Main: MainScreen,
// 	},
// 	{
// 		initialRouteName: 'First', headerMode: 'none',
// 	}
// );

// export default createAppContainer(AppNavigator);