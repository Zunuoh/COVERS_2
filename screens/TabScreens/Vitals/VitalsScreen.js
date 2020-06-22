import React, {useState, useContext} from 'react';
import {View,
        Text,
        TouchableOpacity,
        } from 'react-native'
import Lottie from 'lottie-react-native'
import load from '../../../assets/loading/vitals.json'

import Header from '../../../components/header'
import ContentModal from '../Vitals/contentModal'
import {GlobalContext} from '../../../context/Global'
import UserVitals from '../../../components/vitalComponents/userSymptoms'


export default function Vitals(){
  const [modal, setModal] = useState(false)
  const {userVitals} = useContext(GlobalContext);

  function CloseModal(){
    setModal(false)
  }
    return(
        <View style={{flex: 1,  backgroundColor: "#fff"}}> 
          <Header>
              <Text>Vitals</Text>
          </Header>
           {userVitals.length <= 0 ? ( 
             <View style={{justifyContent: "center", alignItems: "center"}}>
              <Lottie source={load} autoPlay loop style={{width: 70, height: 140, marginLeft: 25, marginVertical: 15}}/>

              <View style={{marginTop: 55, justifyContent: "center", alignItems: "center"}}>
                <View>
                  <Text>You have not logged your vitals yet...</Text>
                </View>
                <TouchableOpacity onPress={()=>{setModal(!modal)}}>
                  <View style={{marginVertical: 25, borderWidth: 1, padding: 20, width: 150, justifyContent: "center", alignItems: "center", borderStyle: "dashed"}}>
                    <Text>Log Vitals</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
          </View>
     
          ) : (
          <Text></Text>
          )}

       {userVitals.length > 0 ? (
        <View>
         <UserVitals/>
        </View>
      
      ) : (
        <Text />
      )}



</View>

        //   <View style={{justifyContent: "center", alignItems: "center"}}>
        //       <Lottie source={load} autoPlay loop style={{width: 70, height: 140, marginLeft: 25, marginVertical: 15}}/>

        //       <View style={{marginTop: 55, justifyContent: "center", alignItems: "center"}}>
        //         <View>
        //           <Text>You have not logged your vitals yet...</Text>
        //         </View>
        //         <TouchableOpacity onPress={()=>{setModal(!modal)}}>
        //           <View style={{marginVertical: 25, borderWidth: 1, padding: 20, width: 150, justifyContent: "center", alignItems: "center", borderStyle: "dashed"}}>
        //             <Text>Log Vitals</Text>
        //           </View>
        //         </TouchableOpacity>
        //       </View>

        //       <ContentModal Visible={modal} Close={()=>{CloseModal()}}/>
        //   </View>
        // </View>
      )
}