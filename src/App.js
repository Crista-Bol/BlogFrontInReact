import './App.css';
import {Provider} from 'react-redux';
import {store} from './actions/store';
import Articles from './components/Articles';


function App() {
  return (
    <Provider store={store}>
      <Articles/>
    </Provider>
  );
}

export default App;
