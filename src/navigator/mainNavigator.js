import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings206151Navigator from '../features/Settings206151/navigator';
import UserProfile206149Navigator from '../features/UserProfile206149/navigator';
import UserProfile206105Navigator from '../features/UserProfile206105/navigator';
import Tutorial206104Navigator from '../features/Tutorial206104/navigator';
import NotificationList206076Navigator from '../features/NotificationList206076/navigator';
import Settings206075Navigator from '../features/Settings206075/navigator';
import Settings206067Navigator from '../features/Settings206067/navigator';
import UserProfile206065Navigator from '../features/UserProfile206065/navigator';
import UserProfile205535Navigator from '../features/UserProfile205535/navigator';
import Tutorial205534Navigator from '../features/Tutorial205534/navigator';
import NotificationList205506Navigator from '../features/NotificationList205506/navigator';
import Settings205505Navigator from '../features/Settings205505/navigator';
import Settings205497Navigator from '../features/Settings205497/navigator';
import UserProfile205495Navigator from '../features/UserProfile205495/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings206151: { screen: Settings206151Navigator },
UserProfile206149: { screen: UserProfile206149Navigator },
UserProfile206105: { screen: UserProfile206105Navigator },
Tutorial206104: { screen: Tutorial206104Navigator },
NotificationList206076: { screen: NotificationList206076Navigator },
Settings206075: { screen: Settings206075Navigator },
Settings206067: { screen: Settings206067Navigator },
UserProfile206065: { screen: UserProfile206065Navigator },
UserProfile205535: { screen: UserProfile205535Navigator },
Tutorial205534: { screen: Tutorial205534Navigator },
NotificationList205506: { screen: NotificationList205506Navigator },
Settings205505: { screen: Settings205505Navigator },
Settings205497: { screen: Settings205497Navigator },
UserProfile205495: { screen: UserProfile205495Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
