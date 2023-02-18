
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Addtestcase from './components/Addtestcase';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/testcase" element={<Addtestcase></Addtestcase>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
