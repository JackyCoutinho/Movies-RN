import { View, Text, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')


const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
        <StatusBar style='white'/>
      
        <Image source={require('../../assets/images/capa.png')} className='w-full h-full'/>

        <LinearGradient
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
          style={{width, height: height * 0.40}}
          start={{x:0.5, y:0}}
          end={{x:0.5, y:0.5}}
          className='absolute bottom-0'
        />

        <View className='absolute bottom-[10%] items-center w-full '>
            <Text className='text-white font-bold text-5xl'>Welcome</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')} className='rounded-full bg-white bottom-[10%] mt-5 p-4 w-[260] items-center'>
            <Text className='text-black font-semibold text-xl'>Login</Text>
          </TouchableOpacity>
          <View className=' flex-row bottom-[8%] mt-5 p-2 w-[230] items-center ml-8'>
            <Text className='text-white'>Your first time here?</Text>
            <Text className='text-[#FF9900]'> Sign Up</Text>
          </View>
        </View>

    </View>
  )
}

export default WelcomeScreen