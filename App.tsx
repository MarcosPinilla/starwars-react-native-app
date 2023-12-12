import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { RootNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;