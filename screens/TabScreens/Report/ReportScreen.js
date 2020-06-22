import React, {useContext, useState} from 'react';
import {View,
       Text, 
      TouchableOpacity,
      StyleSheet
      } from 'react-native'
import Lottie from 'lottie-react-native'
import Constants from 'expo-constants';
import colors from '../../../extras/colors'
import fontSize from '../../../extras/fontSize'
import load from '../../../assets/loading/report.json'
import {GlobalContext} from '../../../context/Global'
import contentModal from '../Report/contentModal'
import {width, height} from '../../../extras/extra'
import Header from '../../../components/header'
import ContentModal from './contentModal'
import CaseReports from '../Report/caseReport'

export default function Report(){
  const { reports } = useContext(GlobalContext);
  const [modal, setModal] = useState(false)
  console.log(reports)

  function CloseModal(){
    setModal(!modal)
  }

  return (
    <View style={styles.container}>
          <Header>
            <Text>Case Report</Text>
          </Header> 
       
          {reports.length > 0 ? (
            <View>
              {reports.map(report => (
                 <View>
                  <CaseReports key={report.id}   {...report} />
                </View>
              ))}
            </View>
          
          ) : (
            <Text />
          )}
       
          {reports.length <= 0 ? (
            <View style={styles.lottieContainer}>
              <View style={{ marginVertical: 35 }}>
              <Lottie source={load} autoPlay loop style={{width: 50, height: 250}}/>
              </View>
              <View
                style={{
                  paddingTop: 60,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.mainText}>
                  You have not made any case report
                </Text>
                {/* <TouchableOpacity  onPress={()=>{setModal(!modal)}}>
                  <Text style={styles.mainText}>Make Case Report</Text>
                  <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
                </TouchableOpacity> */}
                 <TouchableOpacity onPress={()=>{setModal(!modal)}}>
                <View style={{marginVertical: 25, borderWidth: 1, padding: 18, width: 180, justifyContent: "center", alignItems: "center", borderStyle: "dashed"}}>
                  <Text>Make Case Report</Text>
                </View>
              </TouchableOpacity>
              <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
              </View>
            </View>
          ) : (
            <Text />
          )}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.backgroundColor,
      },
      lottieContainer: {
        alignItems: 'center',
      },
      lottie: {
        height: height * 0.2,
        opacity: 0.8,
      },
      button: {
        height: 50,
        width: width * 0.45,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      mainText: {
        // fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
        color: colors.grey,
      },
      mainTitle: {
        // fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
      },
    });