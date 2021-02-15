import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList205506Navigator from '../features/NotificationList205506/navigator';
import Settings205505Navigator from '../features/Settings205505/navigator';
import Settings205497Navigator from '../features/Settings205497/navigator';
import UserProfile205495Navigator from '../features/UserProfile205495/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
