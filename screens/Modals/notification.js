import React from 'react'; 
import {View, Modal, Text, TouchableOpacity} from 'react-native'

export default function Notification ({Visible, Close}){
    return(
        <Modal visible={Visible} animationType="slide" presentationStyle={"formSheet"} style={{borderRaduis: 10}}>
            <View style={{padding: 20}}>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                    <View>
                        <Text style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Notification</Text>
                    </View>
                    <TouchableOpacity onPress={Close}>
                        <View>
                            <Text>close</Text>
                        </View>   
                    </TouchableOpacity>
                </View>
                
                <View style={{paddingTop:40, paddingBottom:20, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Stay at home</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>2 days ago</Text>
                </View>
                </View>
               
                <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Hi messagee</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>2 days ago</Text>
                </View>
                </View>

                 <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Testing</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>3 days ago</Text>
                </View>
                </View>

                 <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Two of em</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>3 days ago</Text>
                </View>
                </View>

                <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Everything working fine now</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>3 days ago</Text>
                </View>
                </View>

                <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>This should work now</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>4 days ago</Text>
                </View>
                </View>
        
                <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Trying Again</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>4 days ago</Text>
                </View>
                </View>

                <View style={{paddingTop:40, paddingBottom:30, marginLeft:10, marginRight:10, flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
                <View style={{flex:7}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>this should work</Text>
                </View>
                <View style={{flex:2}}>
                    <Text>4 days ago</Text>
                </View>
                </View>







            </View>
        </Modal>
    )
}