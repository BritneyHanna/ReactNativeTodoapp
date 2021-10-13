import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Tasks';


export default function App() {

  const[task,setTask]=useState();
  const[taskItems,setTaskItems]=useState([]);

  const handleAddTask=()=>{

    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.taskWrapper}>
     <Text style={styles.sectionTitle}> Things to Do Today</Text>
     
    <View style={styles.body}>
{
taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
 
  

    </View>

{/* 
    Write a task */}

<KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}
style={styles.writeTaskWrapper} >

  <TextInput style={styles.input} placeholder={'Add a Task' } value={task} onChangeText={text=>setTask(text)}/>
  
  <TouchableOpacity onPress={()=>handleAddTask()}
   >
    <View style={styles.addWrapper}>

      <Text style={styles.addText}> +</Text>
    </View>
  </TouchableOpacity>
  
  </KeyboardAvoidingView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000',

  
    
  },

  taskWrapper:{

paddingTop:80,
paddingHorizontal:20,
 backgroundColor:'#000000',
 flex:1,
 

  },

  sectionTitle:{
 fontSize:24,
 fontWeight:'bold',
 color:'#BF40BF',
 textAlign:'center',
 

 
 
  },

  body:{
marginTop:30
    
  },


  writeTaskWrapper:{
position:'absolute',
bottom:60,

width:'110%',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',
backgroundColor:'pink',
color:'#BF40BF',
borderRadius:60,
    paddingVertical:20,
    paddingHorizontal:20,
    
    borderRadius:60,
    borderColor:"pink",

  },







  addText:{

    color:'black',
    fontSize:30,
    paddingLeft:30
   
    
  },
  input:{

    fontSize:20
  }




});
