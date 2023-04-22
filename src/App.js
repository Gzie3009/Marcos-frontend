import "./App.css";
import Routings from "./Routes";
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <Routings/>
      <ToastContainer autoClose={2000}/>
    </Provider>
  );
}

export default App;

