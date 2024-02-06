import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';
import {categories,productItems} from '../constants'
import { fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
import MovieList from '../components/movieList';
import MovieCard from '../components/movieCard';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
  },[]);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    console.log('got trending', data.results.length)
    if(data && data.results) setTrending(data.results);
    setLoading(false)
  }
  const getUpcomingMovies = async ()=>{
    const data = await fetchUpcomingMovies();
    console.log('got upcoming', data.results.length)
    if(data && data.results) setUpcoming(data.results);
  }
 
  return (
    <View className='bg-[#200E32] flex-1'>
      <StatusBar style='light'/>

      <SafeAreaView>
        <View className='flex-row justify-between item-center p-4 '>
          <View className='flex-row p-1 gap-2 items-center '>
            <Image source={require('../../assets/images/perfil.png')}></Image>
            <View>
              <View className='flex-row gap-2'>
                <Text className='text-white font-bold text-2xl'>Hello</Text>
                <Text className='text-[#E5E5E5] text-2xl'>Bernandio</Text>
              </View>
                <Text className='text-[#E5E5E5] text-semibold'>Let’s find your favorite movie </Text>
            </View>
          </View>
            <View className='justify-center items-center'>
              <Image source={require('../../assets/images/scan.png')} className='w-[40] h-[40]'></Image>
            </View>
        </View>

        <View className='flex-row rounded-2xl bottom-2 bg-[#FFFEFE] opacity-20 p-4 mt-5 mx-4 justify-between'>
          <Text className='mt-1'>Movie, Genre, Country ...</Text>
          
          <Feather name="search" size={24} color="black" className='absolute right'/>
        </View>

        <View className="px-5 mt-[20]">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-white';
              return (
                <TouchableOpacity 
                onPress={()=> setActiveCategory(item.id)}
                style={{backgroundColor: isActive? '#FF9900': 'rgba(0,0,0,0.07)'}} 
                className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold text-lg " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >

           
            {/* upcoming movies row */}
            { trending.length>0 && <MovieCard title="" data={trending} /> }

            {/* upcoming movies row */}
            { upcoming.length>0 && <MovieList title="New Release" data={upcoming} /> }
            

           

          </ScrollView>





      </SafeAreaView>

    </View>
  )
}

export default HomeScreen