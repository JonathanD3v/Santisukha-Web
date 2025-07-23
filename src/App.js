import './App.css';
import Routers from './routes';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Routers />
      <Toaster />
    </Provider>
  );
}

export default App;
