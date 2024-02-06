import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { fallbackMoviePoster, image185, image342, poster342 } from '../api/moviedb';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const {width, height} =  Dimensions.get('window');

export default function MovieCard({title, hideSeeAll, data}) {
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            data.map((item, index)=>{
                return (
                    <TouchableWithoutFeedback 
                      key={index} 
                      onPress={()=> navigation.push('Detail', {...item})}
                    >
                        <View className="space-y-1 mr-4">
                            <Image 
                              source={{uri: image185(item.poster_path) || fallbackMoviePoster}} 
                              className="rounded-3xl" 
                              style={{ width: width*0.50, height: height*0.33}} 
                            />
                            <LinearGradient
                              colors={['transparent', 'rgba(32,14,50,0.8)', 'rgba(32,14,50,1)']}
                              style={{width, height: height * 0.40}}
                              start={{x:0.5, y:0.7}}
                              end={{x:0.5, y:1}}
                              className='absolute bottom-0'
                            />
                          
                            <Text className="text-white ml-1 font-bold text-lg">
                                {
                                    item.title.length>14? item.title.slice(0,14)+'...': item.title
                                }
                            </Text>
                            <View className='flex-row items-center'>
                              <Ionicons name="star" size={24} color="#F1BD37" />
                              <Text className="text-[#F1BD37] ml-1">{item.vote_average}</Text>
                            </View>


                        </View>
                    </TouchableWithoutFeedback>
                )
            })
        }
      </ScrollView>
    </View>
  )
       
        
        
}