import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Modal, Image} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons'

// subcomponents
import Account from '../screens/Modals/account'
import Notification from '../screens/Modals/notification'

export default function Header(props){
    // modal State
    const [openAccount, setOpenAccount] = useState(false)
    const [openNotification, setopenNotification] = useState(false)

    //closing modal
    function CloseModal(){
        setOpenAccount(!openAccount)
    }

    function CloseNotModal(){
        setopenNotification(!openNotification)
    }

    return(
            <View style={{height: 120, padding: 15, width: 380,backgroundColor: "#fff", marginTop:7, borderBottomWidth: .3, borderBottomColor: "#ccc"}}>
               <SafeAreaView>
                   <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                       <TouchableOpacity onPress={()=>{setOpenAccount(!openAccount)}}>
                            <View>
                                {/* <Image source={require("../assets/man.png")} style={{height: 30, width: 30}}/> */}
                                <FontAwesome
                                name="user"
                                size={30}
                                color="black"/>
                            </View>
                       </TouchableOpacity>

                        {/* modal section */}

                            {/* account section */}
                            <Account Visible={openAccount} Close={()=>{CloseModal()}}/>

                            {/* notification section */}
                            <Notification Visible={openNotification} Close={()=>{CloseNotModal()}}/>

                       <TouchableOpacity onPress={()=>{setopenNotification(!openNotification)}}> 
                            <View>
                                <Ionicons
                                    name="ios-notifications-outline"
                                    size={35}
                                />
                            </View>
                       </TouchableOpacity>
                   </View>
                    <View style={{marginTop: 7}}>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>{props.children}</Text>
                     </View>
                </SafeAreaView>
            </View>
        
    )
}