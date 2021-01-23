import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ActivityIndicator,
  AppState,
} from "react-native";
import Clipboard from "expo-clipboard";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../Theme";

export const AboutScreen = () => {
  const [appState, setAppState] = useState("active");

  useEffect(() => {
    AppState.addEventListener("change", setAppState);

    return () => {
      AppState.removeEventListener("change", setAppState);
    };
  }, []);

  const openFB = async () => {
    const fbAppUrl = "fb://profile/100003366340830";
    const fbBrowserUrl = "https://facebook.com/profile.php?id=100003366340830";
    const supported = await Linking.canOpenURL(fbAppUrl);

    if (supported) {
      await Linking.openURL(fbAppUrl);
    } else {
      await Linking.openURL(fbBrowserUrl);
    }
  };
  const openLinkedIn = async () => {
    const lnAppUrl = "linkedin://orestfurda";
    const lnBrowserUrl = "https://www.linkedin.com/in/orestfurda/";
    const supported = await Linking.canOpenURL(lnAppUrl);

    if (supported) {
      await Linking.openURL(lnAppUrl);
    } else {
      await Linking.openURL(lnBrowserUrl);
    }
  };
  const openGitHub = async () => {
    const gitAppUrl = "github://ss-o-furda";
    const gitBrowserUrl = "https://github.com/ss-o-furda";
    const supported = await Linking.canOpenURL(gitAppUrl);

    if (supported) {
      await Linking.openURL(gitAppUrl);
    } else {
      await Linking.openURL(gitBrowserUrl);
    }
  };
  const openInstagram = async () => {
    const instAppUrl = "instagram://42be_";
    const instBrowserUrl = "https://www.instagram.com/42be_/";
    const supported = await Linking.canOpenURL(instAppUrl);

    if (supported) {
      await Linking.openURL(instAppUrl);
    } else {
      await Linking.openURL(instBrowserUrl);
    }
  };
  const openTelegram = async () => {
    const tgAppUrl = "telegram://Orik_3";
    const tgBrowserUrl = "https://t.me/Orik_3";
    const supported = await Linking.canOpenURL(tgAppUrl);

    if (supported) {
      await Linking.openURL(tgAppUrl);
    } else {
      await Linking.openURL(tgBrowserUrl);
    }
  };
  const mailMe = async () => {
    const email = "mailto:orik7800@gmail.com?subject=react-native-app";
    const supported = await Linking.canOpenURL(email);

    if (supported) {
      await Linking.openURL(email);
    } else {
      Clipboard.setString("orik7800@gmail.com");
      showMessage({
        message: "The email address has been copied to the clipboard",
        type: "default",
        style: {
          backgroundColor: THEME.MAIN_COLOR,
          alignItems: "center",
        },
        position: "bottom",
      });
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        {appState !== "active" ? (
          <View style={styles.top}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
            <Text style={{ ...styles.top, fontSize: 18 }}>app loading...</Text>
          </View>
        ) : (
          <Text style={styles.top}>Hi there :)</Text>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.center}>
          My name is Orest, i'm FullStack Developer (Python\JS)
        </Text>
        <Text style={styles.center}>
          And this is my small React Native Application
        </Text>
        <Text style={styles.center}>You can find me:</Text>
        <View style={styles.social}>
          <Ionicons
            name="ios-logo-facebook"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={openFB}
          />
          <Ionicons
            name="ios-logo-linkedin"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={openLinkedIn}
          />
          <Ionicons
            name="ios-logo-github"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={openGitHub}
          />
          <Ionicons
            name="ios-logo-instagram"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={openInstagram}
          />
          <FontAwesome
            name="telegram"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={openTelegram}
          />
          <MaterialCommunityIcons
            name="gmail"
            size={50}
            color={THEME.MAIN_COLOR}
            onPress={mailMe}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottom}>ver. 0.1.1</Text>
      </View>
      <FlashMessage />
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "About Me",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle drawer"
        iconName="ios-menu"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  top: {
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-bold",
    fontSize: 24,
    paddingTop: "5%",
  },
  center: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "open-bold",
    fontSize: 18,
    paddingTop: "20%",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
