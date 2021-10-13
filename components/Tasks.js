import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task=({text})=>{


    return(
<View style={styles.item}>
<View style={styles.itemLeft}>

    <View style={styles.square}></View>
    <Text style={styles.itemText}> {text} </Text>

</View>
<View style={styles.circular}></View>
</View>

    )
}

const styles= StyleSheet.create(

    {circular:{
    height:12,
    width:12,
    borderColor:'pink',  
    borderWidth:2,
    borderRadius:5

    },

    itemText:{
        color: 'pink',
        fontSize:20,
        maxWidth:'80%',
      
    },

    square:{
    width:24,
    height:24,
    backgroundColor:'#BF40BF',
    opacity:0.3,
    borderRadius:5,
    marginRight:15



    },

    itemLeft:{
flexDirection:'row',
alignItems:'center',
flexWrap:'wrap'
    },
    item:{
        backgroundColor:'#000000',
        padding:15,
       borderRadius:10,
        borderWidth:1,
        borderColor:'pink',
        borderStyle:'dashed',
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20

        
       
        

        


    }



    });
export default Task;