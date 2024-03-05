import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles/styles';
import { Bgs } from './src/styles/Colors';
import Row from './src/components/Row';
import Table from './src/components/Table';
import Keyboard from './src/components/KeyBoard';
import { TextInput } from 'react-native-web';


export default function App() {

  let palavra = "senai"

  return (
    <View style={[styles.container, Bgs.colorBodyBg ]}>
      <StatusBar style="auto" />

      <Table palavra = {palavra} />

      <TextInput style={[styles.inp, Bgs.colorCellBorder]} placeholder="Digite uma palavra" />

      {/* <Keyboard /> */}

    </View>
  );
}

