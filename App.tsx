import { Header } from './components/Header';
import {Home} from './src/Home'
import {StatusBar, Text, View } from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    
      <Home />
    </>
  )
  }