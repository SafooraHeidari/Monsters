
import {MonsterList, MonsterPage} from "./Components";
import {Route, BrowserRouter, Routes, Outlet} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<MonsterList/>}/>
                    <Route path='/:id' element={<MonsterPage/>}/>
                </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
