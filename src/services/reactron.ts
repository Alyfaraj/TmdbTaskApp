import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.configure({
  // uncomment when you debug android 
  //  host: scriptHostname,
  name: 'Movies App',
})
  .connect()

export default reactotron;
