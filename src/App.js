import "./App.css";
import Routings from "./Routes";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Routings/>
    </Provider>
  );
}

export default App;
