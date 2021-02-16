import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList206451Navigator from '../features/NotificationList206451/navigator';
import Settings206450Navigator from '../features/Settings206450/navigator';
import Settings206442Navigator from '../features/Settings206442/navigator';
import UserProfile206440Navigator from '../features/UserProfile206440/navigator';
import Maps206400Navigator from '../features/Maps206400/navigator';
import Maps206395Navigator from '../features/Maps206395/navigator';
import UserProfile206391Navigator from '../features/UserProfile206391/navigator';
import UserProfile206189Navigator from '../features/UserProfile206189/navigator';
import Tutorial206188Navigator from '../features/Tutorial206188/navigator';
import Settings206159Navigator from '../features/Settings206159/navigator';
import Settings206151Navigator from '../features/Settings206151/navigator';
import UserProfile206149Navigator from '../features/UserProfile206149/navigator';
import UserProfile206105Navigator from '../features/UserProfile206105/navigator';
import Tutorial206104Navigator from '../features/Tutorial206104/navigator';
import NotificationList206076Navigator from '../features/NotificationList206076/navigator';
import Settings206075Navigator from '../features/Settings206075/navigator';
import Settings206067Navigator from '../features/Settings206067/navigator';
import UserProfile206065Navigator from '../features/UserProfile206065/navigator';
import UserProfile205535Navigator from '../features/UserProfile205535/navigator';
import NotificationList205506Navigator from '../features/NotificationList205506/navigator';
import Settings205497Navigator from '../features/Settings205497/navigator';
import UserProfile205495Navigator from '../features/UserProfile205495/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList206451: { screen: NotificationList206451Navigator },
Settings206450: { screen: Settings206450Navigator },
Settings206442: { screen: Settings206442Navigator },
UserProfile206440: { screen: UserProfile206440Navigator },
Maps206400: { screen: Maps206400Navigator },
Maps206395: { screen: Maps206395Navigator },
UserProfile206391: { screen: UserProfile206391Navigator },
UserProfile206189: { screen: UserProfile206189Navigator },
Tutorial206188: { screen: Tutorial206188Navigator },
Settings206159: { screen: Settings206159Navigator },
Settings206151: { screen: Settings206151Navigator },
UserProfile206149: { screen: UserProfile206149Navigator },
UserProfile206105: { screen: UserProfile206105Navigator },
Tutorial206104: { screen: Tutorial206104Navigator },
NotificationList206076: { screen: NotificationList206076Navigator },
Settings206075: { screen: Settings206075Navigator },
Settings206067: { screen: Settings206067Navigator },
UserProfile206065: { screen: UserProfile206065Navigator },
UserProfile205535: { screen: UserProfile205535Navigator },
NotificationList205506: { screen: NotificationList205506Navigator },
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
