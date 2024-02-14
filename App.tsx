import { SafeAreaView } from 'react-native';
import { AlterColorsContextProvider } from './src/context/AlterColorsContext';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <AlterColorsContextProvider>
      <Home />
    </AlterColorsContextProvider>
  );
}


