import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Screen/Home';

import { useFonts,Montserrat_300Light, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if(!fontsLoaded) {
    return <ActivityIndicator color="black"/>
  }

  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  );
}


