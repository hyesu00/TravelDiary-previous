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

/* 
네이밍 방법

각각의 페이지: '페이지이름 + Screen'
페이지 묶음: '카테고리 + Stack'
 */

//회원가입 페이지들로 구성된 SignupStack 생성
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

//일기 목록 페이지들로 구성된 ListStack 생성
const ListStack = createStackNavigator(
	{
		CategoryListScreen,
		DiaryListScreen,
	}
);

//MainScreen를 포함한 메인메뉴인 Drawer 네비게이션 생성
const MainStack = createDrawerNavigator(
	{
		MainScreen,
		ListStack,
		MypageScreen,
		SettingScreen,
	},
);

//LoginScreen과 SignupStack, MainStack을 createStackNavigator로 한 번 더 감싸서 로그인 스크린에서 회원가입, 메인페이지로 각각 이동이 가능하게 함
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