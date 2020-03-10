// src/screens/Home.js

import React,{useState} from 'react'
import { StyleSheet, View, Text,TouchableOpacity,TextInput,Button } from 'react-native'


function Home(props) {
  const [name, setName]= useState('');
  const  [home,setHome] =useState('');
  const [species,setSpecies]=useState('');

  const [characters,setCharacters]=useState([])

  const  nameInputHandler = (name)=>{
    setName(name);
  }
  const homeInputHandler = (home)=>{
    setHome(home)
  }
   
  const speciesInputHandler = (species)=>{
    setSpecies(species)
  }
  const character = {
    name:name,
    home: home,
    species: species
  }
  const addCharacter = ()=>{
    setCharacters([...characters,{character}])
    alert(character)

  }
  const {navigation}= props
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TextInput
      placeholder="Enter the name of your character"
      style={styles.input}
      onChangeText={nameInputHandler}
      value={name}
      />
       <TextInput
      placeholder="Home planet of your character"
      style={styles.input}
      onChangeText={homeInputHandler}
      value={home}
      />
       <TextInput
      placeholder=" Species"
      style={styles.input}
      onChangeText={speciesInputHandler}
      value={species}
      />
      
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>navigation.navigate('Detail',{
          item : character,
          otherParams:addCharacter

        }
         
        )}
        
        >
        <Text style={styles.buttonText}> who is {character.name} ?</Text>
      </TouchableOpacity>
     
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Home