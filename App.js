import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverView from './screens/MealsOverView';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoryScreen}
        options={{
          title: 'All Category',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name='MealsCategory'
            component={DrawerNavigator}
            options={{
              title: 'All Category',
              headerShown: false
            }}
          />
          <Stack.Screen
            name='MealsOverView'
            component={MealsOverView}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap me!' />;
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
