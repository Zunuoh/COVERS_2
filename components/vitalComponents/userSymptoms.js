import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAB from 'react-native-fab';
import { Ionicons } from '@expo/vector-icons';
import { covertDateTime } from '../../extras/extra';
// import VitalsModal from '../../screens/vitals/vitalsModal';
import ContentModal from '../../screens/TabScreens/Vitals/contentModal'
import { height } from '../../extras/extra'
import {GlobalContext} from '../../context/Global'
import { useIsFocused } from '@react-navigation/native';

export default function UserSymptoms() {
  const [visible, setVisible] = useState(false);
const {userVitals} = useContext(GlobalContext);
  const isFocused = useIsFocused();

  function close() {
    setVisible(false);
  }

  let date = new Date();
  return (
    <>
      <View>
          {/* <Text>hey</Text> */}
        <Text style={styles.date}>{covertDateTime(date)}</Text>
        {userVitals.map(userVital => (
          <View key={userVital.id} style={styles.container}>
            <View style={styles.none}>
              <Text style={styles.text}>Fever</Text>
              <Text style={styles.text}>{userVital.fever.value}</Text>
              <Text style={styles.text} >{userVital.fever.sign}</Text>
            </View>
            <View style={styles.mild}>
              <Text style={styles.text} >Aches</Text>
              <Text style={styles.text}>{userVital.aches.value}</Text>
              <Text style={styles.text}>{userVital.aches.sign}</Text>
            </View>
            <View style={styles.mid}>
              <Text style={styles.text} >Breath</Text>
              <Text style={styles.text}>{userVital.breath.value}</Text>
              <Text style={styles.text}>{userVital.breath.sign}</Text>
            </View>
            <View style={styles.semi}>
              <Text style={styles.text}>Throat</Text>
              <Text style={styles.text}>{userVital.throat.value}</Text>
              <Text style={styles.text}>{userVital.throat.sign}</Text>
            </View>
            <View style={styles.high}>
              <Text style={styles.text}>Cough</Text>
              <Text style={styles.text}>{userVital.cough.value}</Text>
              <Text style={styles.text}>{userVital.cough.sign}</Text>
            </View>
            <View style={styles.none}>
              <Text style={styles.text}>Headache</Text>
              <Text style={styles.text}>{userVital.headache.value}</Text>
              <Text style={styles.text}>{userVital.headache.sign}</Text>
            </View>
          </View>
        ))}
      </View>
      <FAB
        onClickAction={() => setVisible(true)}
        style={{
          position: 'absolute',
          width: 65,
          height: 65,
          top: height * 0.4,
        }}
        buttonColor="black"
        iconTextColor="#FFFFFF"
        visible={isFocused}
        iconTextComponent={<Ionicons name="ios-add" />}
      />
      <ContentModal visible={visible} close={close} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  none:{
    backgroundColor: '#7ff8c1',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  high:{
    backgroundColor:'#eb0e18',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  mild:{
    backgroundColor:'#7fdefb',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  mid:{
    backgroundColor:'#cd7efb',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  semi:{
    backgroundColor:'#ff8208',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  date: {
   fontWeight:"bold",
    letterSpacing: -0.3,
    padding: 15,
    fontSize:15
  },
  text: {
    fontWeight:"bold",
    letterSpacing: -0.3,
  },
});