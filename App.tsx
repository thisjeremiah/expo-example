import 'react-native-gesture-handler'
import 'react-native-url-polyfill/auto'
import './styles'

// ...

if (LogBox) {
  LogBox.ignoreLogs([
    'ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
  ])
}

export default function App() {
  return null
}
