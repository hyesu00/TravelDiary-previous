import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './LoginScreen';
import SignupScreen1 from './SignupScreen1';
import SignupScreen2 from './SignupScreen2';
import MainScreen from './MainScreen';
import CategoryListScreen from './CategoryListScreen';
import DiaryListScreen from './DiaryListScreen';
import CreateScreen from './CreateScreen';
import MypageScreen from './MyPageScreen';
import SettingScreen from './SettingScreen';

/* 
네이밍 방법

각각의 페이지: '페이지이름 + Screen'
페이지 묶음: '카테고리 + Stack'
 */

//메뉴 열기 버튼 생성
class NavigationDrawerStructure extends Component {
	toggleDrawer = () => {
		this.props.navigationProps.toggleDrawer();
	};
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
					<Text>메뉴 열기</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

//Drawer 헤더 생성
const DrawerContent = (props) => (
	<View>
		<View
			style={{backgroundColor: 'skyblue', height: 240, alignItems: 'center', justifyContent: 'center',}}>
			<Text style={{ color: 'white', fontSize: 30 }}>
				Header
			</Text>
		</View>
		<DrawerItems {...props} />
	</View>
)

//회원가입 페이지들로 구성된 SignupStack 생성
const SignupStack = createStackNavigator(
	{
		LoginScreen: {
			screen: LoginScreen,
			navigationOptions: ({navigation}) => ({
				header: null, /* 어플 첫 실행화면은 헤더을 안보이게 설정 */
			}),
		},
		SignupScreen1,
		SignupScreen2,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '회원가입',
		}),
	}
);

const MainStack = createStackNavigator(
	{
		MainScreen: {
			screen: MainScreen,
			navigationOptions: ({navigation}) => ({
				title: '메인 화면',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);


//일기 목록 페이지들로 구성된 ListStack 생성
const ListStack = createStackNavigator(
	{
		CategoryListScreen: {
			screen: CategoryListScreen,
			navigationOptions: ({navigation}) => ({
				title: '카테고리',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
		DiaryListScreen,
	}
);

const MyPageStack = createStackNavigator(
	{
		MypageScreen: {
			screen: MypageScreen,
			navigationOptions: ({navigation}) => ({
				title: '마이페이지',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);

const SettingStack = createStackNavigator(
	{
		SettingScreen: {
			screen: SettingScreen,
			navigationOptions: ({navigation}) => ({
				title: '세팅',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);

//MainScreen를 포함한 메인메뉴인 Drawer 네비게이션 생성
const DrawerStack = createDrawerNavigator(
	{
		MainStack,
		ListStack,
		CreateScreen,
		MyPageStack,
		SettingStack,
	},
	{
		// 헤더 컴포넌트
		contentComponent: DrawerContent,
	}
);

//LoginScreen과 SignupStack, MainStack을 createStackNavigator로 한 번 더 감싸서 로그인 스크린에서 회원가입, 메인페이지로 각각 이동이 가능하게 함
const AppNavigator = createStackNavigator(
	{
		First: LoginScreen,
		Signup: SignupStack,
		Main: DrawerStack,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '로그인',
		}),
		initialRouteName: 'First', headerMode: 'none',
	}
);

export default createAppContainer(AppNavigator);