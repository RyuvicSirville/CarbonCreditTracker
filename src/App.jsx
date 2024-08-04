import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard'
import CCgenerate from './CCgenerate'
import Trading from './Trading';
import Homepage from './Homepage';

function App() {


  return (
    <section class="	">
      <div >

        <Router>
          <Appbar />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/generate"} element={<CCgenerate />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/trading"} element={<Trading />} />
          </Routes>
        </Router>


      </div>
    </section>


  )
}

export default App
