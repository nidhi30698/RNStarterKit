import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts } from '../../features/slices/productSlice'
import { Product } from '../../types/product'
import { useNavigation } from '@react-navigation/native';
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>()
  const dispatch = useAppDispatch();
  const { list, loading, error } = useAppSelector((s) => s.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const Item = ({ item }: { item: Product }) => {
    return (
      <View style={style.productCard}>
        <Text style={style.prodtitle}>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    )
  }
  return (
    <>{!loading ?
      <View style={style.container}>
        <TouchableOpacity style={{ padding: 12, backgroundColor: 'pink', marginBottom: 10, borderRadius: 5, justifyContent: 'center' }} onPress={() => navigation.navigate("Profile")}><Text style={{ textAlign: 'center' }}>Go to profile</Text></TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Product }) => <Item item={item} />}
        />
      </View> : <Text>Loading</Text>}
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  productCard: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#efefef',
    marginBottom: 5
  },
  prodtitle: {
    fontSize: 15,
    marginBottom: 12,
    color: 'red'
  }
})
export default HomeScreen