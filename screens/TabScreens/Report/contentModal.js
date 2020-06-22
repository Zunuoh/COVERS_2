import React, {useContext, useState} from 'react'
import {
    View,
    Text, 
    Modal, 
    TouchableOpacity, 
    ActivityIndicator,
    Alert,
    TextInput
} from 'react-native'
import {Ionicons, AntDesign} from '@expo/vector-icons'
import {GlobalContext} from '../../../context/Global'
import colors from '../../../extras/colors'
import RadioButtonRN from 'radio-buttons-react-native';


export default function ContentModal({Visible, Close}){
    const [load, setLoad] = useState(false);
    const [reportFor, setReportFor] = useState({});
    const [address, setAddress] = useState('');
    const [landMark, setLandMark] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');

    const { makeCaseReport } = useContext(GlobalContext);
    
    const rbData = [{ label: 'Self' }, { label: 'Other Individual' }];

    let date = new Date()
  
  function submitReport() {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Alert.alert('Success', 'Case submitted', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      const newReport = {
        id: Math.floor(Math.random() * 100000000),
        reportFor:'Self',
        landMark,
        contact,
        address,
        description,
        date : +date
      };
      makeCaseReport(newReport);
    }, 2000);
  }

    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={'pageSheet'}>
            <View style={{padding: 20}}>

                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{}} style={{fontSize: 35, fontWeight: "bold"}}>Make Report</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Ionicons
                            name="ios-close"
                            size={40}
                            />
                        </View>   
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 15}}>

                    <View style={{marginLeft: 5}}>
                        <Text style={{fontWeight: "bold"}}>Who are you reporting</Text>
                    </View>

                    {/* RadioButtons */}
                    {/* <View style={{flexDirection: "row", marginTop: 10}}>
                             <View style={{flexDirection: "row"}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={22}
                                    />
                                </View>                                
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Self</Text>
                                </View>                                
                             </View>
                             <View style={{flexDirection: "row", paddingHorizontal: 5}}>
                                <View>
                                    <Ionicons
                                     name="ios-checkmark-circle"
                                     size={22}
                                    />
                                </View>    
                                <View style={{paddingHorizontal: 8, alignItems: "center", justifyContent: "center"}}>
                                    <Text>Other individual</Text>
                                </View>                                
                             </View>
                     </View> */}

<View>
            <RadioButtonRN
              data={rbData}
              // selectedBtn={(reportFor) => setReportFor({reportFor})}
              animationTypes={['shake']}
              circleSize={16}
              initial={3}
              box={false}
              activeColor={colors.black}
              inactiveColor={colors.grey}
              textStyle={{
                // fontFamily: 'AirbnbCereal-Bold',
                letterSpacing: -0.4,
              }}
              icon={
                <AntDesign
                  name="checkcircle"
                  size={20}
                  // color="#2c9dd1"
                />
              }
            />
          </View>

                    <View style={{marginTop: 20}}>
                        <View style={{marginLeft: 5}}>
                            <Text style={{fontWeight: "bold"}}>Location or Digital Address</Text>
                        </View>

                        <View style={{marginVertical: 8}}>
                            <TextInput
                                style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                // onPress={(age)=>{setAge(age)}}
                            />
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 5 }}>
                                <View style={{marginLeft: 5}}> 
                                  <Text style={{fontWeight: "bold"}}>Nearest Landmark</Text>
                                </View>
                                <View style={{marginTop: 8}}>
                                    <TextInput
                                        value={landMark}
                                        onChangeText={landMark => setLandMark(landMark)}
                                        style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                        // onPress={(age)=>{setAge(age)}}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 4, paddingLeft: 10}}>
                                <View style={{marginLeft: 5}}>  
                                    <Text style={{fontWeight: "bold"}}>Alternate contact</Text>
                                </View>
                                <View style={{marginTop: 8}}>
                                    <TextInput
                                    value={contact}
                                    onChangeText={contact => setContact(contact)}
                                        style={{borderWidth: 1, borderColor: "#eee", height: 45, padding: 10}}
                                        // onPress={(age)=>{setAge(age)}}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ marginVertical: 10}}>
                            <View style={{marginLeft: 5,}}>
                                <Text style={{fontWeight: "bold"}}>Description</Text>
                            </View>

                            <View style={{marginVertical: 8}}>
                                <TextInput
                                      value={description}
                                      onChangeText={description => setDescription(description)}
                                    style={{borderWidth: 1, borderColor: "#eee", height: 90, padding: 10}}
                                    // onPress={(age)=>{setAge(age)}}
                                />
                            </View>
                        </View>
                    </View>
                    
                    {/* <TouchableOpacity onPress={()=>{console.log("is pressed")}}>
                        <View style={{justifyContent: "center", alignItems: 'center', top: 140, position: "fixed", height: 45, backgroundColor: "#000"}}>
                            <Text style={{fontWeight: "bold", color: "#fff"}}>Report case</Text>
                        </View>
                    </TouchableOpacity> */}
                      <View style={{ paddingHorizontal: 20, marginVertical: 50 }}>
        <TouchableOpacity onPress={submitReport} style={{ backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    alignItems: 'center',}}>
          {load ? (
            <ActivityIndicator />
          ) : (
            <Text style={{fontWeight: "bold", color: "#fff"}}>
              Report Case
            </Text>
          )}
        </TouchableOpacity>
      </View>
                </View>
            </View>
        </Modal>
    )
}

