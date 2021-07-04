import "./App.css";
import Subscribers from "./components/Subscribers";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Display from "./components/Display";
import Views from "./components/Views";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Subscribers />
        <Display />
        <Views />
      </div>
    </Provider>
  );
}

export default App;
