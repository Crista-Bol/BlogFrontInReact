import './App.css';
import {Provider} from 'react-redux';
import {store} from './actions/store';
import Articles from './components/Articles';
import {Container} from '@material-ui/core'

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      <Articles/>
      </Container>
    </Provider>
  );
}

export default App;
