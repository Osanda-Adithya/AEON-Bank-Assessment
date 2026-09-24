import { StatusBar } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'default'} />
    </SafeAreaProvider>
  );
}

export default App;
