
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  View,
  Dimensions
} from 'react-native';

import { List, ListItem, Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements';
var { width, height } = Dimensions.get('window')
export default class FlatListBasics extends Component {
     

 constructor(props) {
    super(props);
    this.state = {inboxValue: 7073, yahooValue: 6502};

    // Toggle the state every second
  
  }
  test2(something) {
         this.setState(previousState => {
        return { yahooValue: previousState.yahooValue + 1};
      });
    }

  test(something) {
         this.setState(previousState => {
        return { inboxValue: previousState.inboxValue+ 1};
      });
    }




  render() {


    return (
      <View>
       <View style = {styles.heading}>
          <Text style = {{fontSize:24}} > Mailboxes  </Text>
          <Text style={{color: 'blue',fontSize:22,}}
          onPress={() => Linking.openURL('http://google.com')}>
          Edit
         </Text>

      </View>
      <View
  style={{
    paddingTop:40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  }}


/>

      <View
  style={{
    paddingTop:40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  }}

  
/>


     <List style= {{ 
      backgroundColor:'blue',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>


              <ListItem
                  onPress={() => this.test('allProperties')}
                  title={"All Inboxes                                             " + this.state.inboxValue}
                  leftIcon={{name: 'email'}}
                                    color="rgba(0,122,255,1)"
              />

              <ListItem
                  title="iCloud"
                  leftIcon={{name: 'femail'}}
                  color="rgba(0,122,255,1)"
              />


              <ListItem
                  onPress={() => this.test2('todayScreen')}
                  title={"Yahoo                                                       " + this.state.yahooValue}
                  leftIcon={{name: 'email'}}
                  color="rgba(0,122,255,1)"
              />

                  <ListItem
                      title="Exchange"
                    leftIcon={{name: 'email'}}
                  />

                  <ListItem
                      title="Vip"
                    leftIcon={{name: 'email'}}
                  />


                  </List>
                  </View>
    );
  }
}

const styles = StyleSheet.create({
  

  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject1', () => FlatListBasics);