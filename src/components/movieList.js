import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { fallbackMoviePoster, image185, image342, poster342 } from '../api/moviedb';

const {width, height} =  Dimensions.get('window');

export default function MovieList({title, hideSeeAll, data}) {
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
                      onPress={()=> navigation.push('Movie', item)}
                    >
                        <View className="space-y-1 mr-4 ">
                            <Image 
                              // source={require('../assets/images/moviePoster2.png')}
                              source={{uri: image185(item.poster_path) || fallbackMoviePoster}} 
                              className="rounded-3xl" 
                              style={{ width: width*0.4, height: height*0.22}} 
                            />
                            <Text className="text-white ml-1">
                                {
                                    item.title.length>14? item.title.slice(0,14)+'...': item.title
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })
        }
      </ScrollView>
    </View>
  )
}