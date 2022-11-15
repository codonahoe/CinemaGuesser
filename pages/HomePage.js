import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../components/Button";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardFlip from "react-native-card-flip";

// <Button title="Logout" onPress={logout} />
const HomePage = ({ navigation }) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("LoginPage");
  };

  function HomePage() {
    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Home! hey</Text>
      // </View>

      <View style={styles.container}>
        <CardFlip
          style={styles.cardContainer}
          ref={(card) => (this.card = card)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card1]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>AB</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card2]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>CD</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }

  //     <FlipCard
  //       style={styles.card}
  //       friction={6}
  //       perspective={1000}
  //       flipHorizontal={true}
  //       flipVertical={false}
  //       flip={false}
  //       clickable={true}
  //       onFlipEnd={(isFlipEnd) => {
  //         console.log("isFlipEnd", isFlipEnd);
  //       }}
  //     >
  //       {/* Face Side */}
  //       <View style={styles.face}>
  //         <Text>The Face</Text>
  //       </View>
  //       {/* Back Side */}
  //       <View style={styles.back}>
  //         <Text>The Back</Text>
  //       </View>
  //     </FlipCard>
  //   );
  // }

  function SettingsPage() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button title="Logout" onPress={logout} />
      </View>
    );
  }

  function WatchListPage() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Watch List!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Watch List") {
            iconName = focused ? "film" : "film-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Watch List" component={WatchListPage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

export default HomePage;
