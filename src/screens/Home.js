import React from 'react'
import { Text } from 'react-native'
import NoteCard from '../components/NoteCard'

const Home = ({navigation}) => {
  return (
    <>
    <Header text="Home"/>
    <Text>Home</Text>
    
    <Button onPress={()=>{navigation.navigate('addnotes')}} style={{position: 'absolute',bottom: 20,right: 20}}>
      Add Notes
    </Button>
    <NoteCard/>
    </>
  )
}

export default Home