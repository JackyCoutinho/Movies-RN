import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import { fallbackMoviePoster, image185, image500 } from '../api/moviedb'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';
import { HomeTabs } from '../navigation';
import { useNavigation } from '@react-navigation/native';

const {width, height} =  Dimensions.get('window');

const DetailScreen = (props) => {
  const item = props.route.params
  const navigation = useNavigation()

  return (
    <View className="">
       <StatusBar style='light'/>
       <TouchableOpacity onPress={()=> navigation.goBack()}className="absolute top-[60] left-5 z-10 bg-white/30 p-2 rounded-full">
          <Ionicons name="chevron-back" size={30} color="white" />
       </TouchableOpacity>
       <View 
          className='absolute top-0 left-0 right-0'
          style={{ height, width}}
        >
        <Image 
          source={{uri: image500(item?.poster_path)}}
          className="w-full h-full"
        
        />

        <LinearGradient
          colors={['transparent', 'rgba(32,14,50,0.8)', 'rgba(32,14,50,1)']}
          style={{width, height: height * 0.40}}
          start={{x:0.5, y:0}}
          end={{x:0.5, y:0.4}}
          className='absolute bottom-0'
        />
       </View>

        <View className='flex-row'> 
          <View className='w-[80%]'>
            <View className='absolute top-[580] left-0 right-0 mx-5'>
              <Text className='text-white font-bold text-3xl'>{item.title}</Text>
              <Text className='text-white font-semiblod text-md'>{item.overview}</Text>
              <View className='bg-white mt-5 rounded-full w-[127] h-[40] p-2'>
                <Text className='mx-3  mt-1 font-bold text-md'>Watch Full</Text>
              </View>
            </View>
          </View>

          <View className='w-[20%] absolute top-[580] right-0  mx-5 justify-center items-center space-y-3'>
            <View>
              <FontAwesome5 name="heart" size={30} color="white" />
              <Text className='text-white'>892</Text>
            </View>
            <View>
              <FontAwesome5 name="comment-dots" size={30} color="white" />
              <Text className='text-white'>654</Text>
            </View>
            <View>
              <Feather name="bookmark" size={30} color="white" />
              <Text className='text-white'>382</Text>
            </View>
            <View>
            <Image source={require('../../assets/images/perfil.png')}/>
            </View>
          </View>
            

       </View>

      <View className="top-[850]">
        <HomeTabs />
      </View>

    </View>
  )
}

export default DetailScreen
