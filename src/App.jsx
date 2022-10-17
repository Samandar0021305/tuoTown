
import './scss/App.scss';
import {Switch, Route} from "react-router-dom";

// pages
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <>
     <Switch>
       <Route path="/tuoTown" component={MainPage} exact />
     </Switch>
    </>
  );
}

export default App;
