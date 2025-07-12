import { createStackNavigator } from "@react-navigation/stack"
import ProfileScreen from "../screens/profile/ProfileScreen"
const Stack = createStackNavigator()

function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack