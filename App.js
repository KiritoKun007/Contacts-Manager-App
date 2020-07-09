import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import StackScreen from './screens/StackScreen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
