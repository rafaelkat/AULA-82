import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View>
            <Image source = {require("../assets/strory_imaage_1.png")}
            style = {styles.storyImage}></Image>
            <View style={styles.titleContainer}>
              <Text style={styles.styleTitleText}>{this.props.story.title}</Text>
              <Text style={styles.styleAuthorText}>{this.props.story.author}</Text>
              <Text style={styles.styleDescriptionText}>{this.props.story.description}</Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButtom}>
                <Ionicons name={'heart'} size= {RFValue(30)} color={'white'}/>
                <Text style={styles.likeText}>12K</Text>
              </View>
            </View>
          </View>
        </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  storyImage: {
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
    resizeMode: 'contein'
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  styleTitleText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white'
  },
  styleAuthorText: {
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
    color: 'white'
  },
  styleDescriptionText: {
    fontSize: 13,
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    paddingTop: RFVaule(10)
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFVaule(10)
  },
  likeButtom: {
    width: RFValue(160),
    right: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30)
  },
  likeText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    marginLeft: RFValue(5)
  }
});
