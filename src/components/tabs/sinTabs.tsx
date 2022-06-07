import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import BuddyProgram from '../../Pages/sinHomepage/pagesViews/BuddyProgram';
import Order from '../../Pages/sinHomepage/pagesViews/Order/order';
import ProfileRoot from '../../Pages/sinHomepage/pagesViews/Profile';
import Recipes from '../../Pages/sinHomepage/pagesViews/Recipes/recipe';

const Tab = createBottomTabNavigator();
export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{height: 30, width: 30, bottom: 5}}
              source={{
                uri: 'https://static.networkmanager.pl/images/static/mainIcons/order.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{height: 30, width: 30, bottom: 5}}
              source={{
                uri: 'https://static.networkmanager.pl/images/static/mainIcons/cook-book.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BuddyProgram"
        component={BuddyProgram}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{height: 30, width: 30, bottom: 5}}
              source={{
                uri: 'https://static.networkmanager.pl/images/static/mainIcons/buddy.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileRoot}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              style={{height: 30, width: 30, bottom: 5}}
              source={{
                uri: 'https://static.networkmanager.pl/images/static/mainIcons/profile.png',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
