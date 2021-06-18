import * as React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput, View, Text } from 'react-native';

// import { Text, View } from '../components/Themed';

export default function HomeScreen({ navigation }) {

  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/Bassin-Arcachon.jpg")} style={styles.image}/>
      <View style={styles.searchView}>
        <Image source={require("../assets/images/ODBLogo.png")} resizeMode={"contain"} style={styles.logo} />
        <Text style={styles.title}>L'OEIL DU BASSIN</Text>
        <Text style={styles.textTitle}>Quoi, Qui ?</Text>
        <TextInput
          style={styles.inputText}
          placeholder={"ex: Commerces, Loisir, ..."}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Text style={styles.textTitle}>Où ?</Text>
        <TextInput
          style={styles.inputText}
          placeholder={"ex: Arcachon, 33120, ..."}
          onChangeText={text => onChangeText2(text)}
          value={value2}
        />
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('ResultSearch', { screen: 'ResultSearchScreen' });}} >
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefefe'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: '-30%',
    marginBottom: '20%',
    color: "#777777"
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  button: {
      backgroundColor: "#7AA04C",
      paddingVertical: 15,
      width: '80%',
      marginTop: '15%',
      borderRadius: 25,
      marginBottom: "10%",
  },

  buttonText: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 20,
  },

  image: {
    position: 'absolute',
    width: "100%",
    height: "100%",
  },

  searchView: {
    width: '80%',
    alignItems: 'center',
    marginTop: '30%',
    marginBottom:'23%',
    borderRadius: 20,
    backgroundColor: "rgba(200,200,200,0.9)",
  },

  logo: {
    width:'70%',
    marginTop: "-59%",
  },

  inputText: {
    width: '80%',
    height: 30,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 3,
    borderBottomColor: "#7AA04C",
    paddingHorizontal: 7,
    paddingVertical: 5,
    fontSize: 18,
    marginBottom: 30,
  },

  textTitle: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontStyle: 'italic',
    color: "#7AA04C",
    marginBottom: 15,
  },
});