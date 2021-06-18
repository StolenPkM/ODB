import * as React from 'react';
import { StyleSheet,
          TouchableOpacity,
          Text,
          View,
          ImageBackground,
          SafeAreaView,
          FlatList,
          Image,
          Linking,
          Alert,
          Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: 'bd7acbe-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '58694a0f-3da1-471f-bd96-1e29d72',
    title: 'Third Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: 'bd7acbea-c1b1-46c2-a-3ad53abb28ba',
    title: 'First Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa93',
    title: 'Second Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
  {
    id: '58694a0f-3da1-bd96-145571e29d72',
    title: 'Third Item',
    logo: "../assets/images/mcdo.png",
    address: "2 avenue de Binghamton - 33260 La Teste de Buch",
    name: "Mathieu",
    phone: "+33667913111",
    web: "http://big-barbecue.fr",
  },
];



export default function ResultSearchScreen({ navigation }) {

  const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.imageLogo}>
        <Image source={require("../assets/images/mcdo.png")} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={styles.infoItem}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <View style={styles.blocTextItem}>
          <Text style={styles.itemText}>Adresse : </Text>
          <Text>{item.address}</Text>
        </View>
        <View style={styles.blocTextItem}>
          <Text style={styles.itemText}>Nom contact : </Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.blocTextItem}>
          <Text style={styles.itemText}>Tel : </Text>
          <Text>{item.phone}</Text>
        </View>
        <View style={styles.blocTextItem}>
          <Text style={styles.itemText}>Web : </Text>
          <Text>{item.web}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );


  const renderItem = ({ item }) => <Item item={item} onPress={() => {navigation.navigate('BottomTab', { params: {id: 'myId'}, screen: 'TabOneScreen'})}} />;

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/Bassin-Arcachon.jpg")} style={styles.image}/>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Résultats</Text>
        <MaterialIcons name="keyboard-arrow-left" size={40} color="rgba(155,155,155,0)" />
      </SafeAreaView>
      <SafeAreaView style={styles.flatContainer}>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
      <TouchableOpacity onPress={() => {navigation.navigate('BottomTab', { screen: 'TabOneScreen', params: { test: "test", },})}}>
        <Text>TEST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fefefe'
  },
  button: {
      backgroundColor: "#fefefe",
      justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: "100%",
    height: "100%",
  },
  header: {
    width: '100%',
    height: '12%',
    backgroundColor: "rgba(155,155,155,0.9)",
    borderBottomWidth: 4,
    borderBottomColor: '#7AA04C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Georgia",
  },

  flatContainer: {
    flex: 1,
  },

  item: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginVertical: '2%',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    borderRadius: 10,
    // justifyContent: 'space-between',
  },

  imageLogo: {
    width: 80,
    height: 80,
    marginTop: '5%',
  },

  logo: {
    width: 80,
    height: 80,
  },

  blocTextItem: {
    flexDirection: 'row',
    paddingRight: '40%',
  },

  infoItem: {
    justifyContent:'flex-start',
    marginRight: '30%',
    paddingVertical: '5%',
    paddingLeft: '3%',
  },

  itemText: {
    fontWeight: "bold",
  },

  itemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  }
});