import { Provider } from 'react-redux';
import Routes from './root/Router';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Provider store={store}>
        <Routes />;
      </Provider>
    </>
  );
}

export default App;
