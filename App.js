import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './Routes'
import AuthProvider from './contexts/Auth';


export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });