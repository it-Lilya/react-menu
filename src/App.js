import {Route, Routes} from 'react-router-dom';
import Menu from './component/Menu';
import HomePage from './component/HomePage';
import DriftPage from './component/DriftPage';
import ForzaPage from './component/ForzaPage';
import TimeAttackPage from './component/TimeAttackPage';

export default function App() {
  return (
    <div >
       <Menu />
       <div className='page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/driftpage' element={<DriftPage />} />
          <Route path='/timeattackpage' element={<TimeAttackPage />} />
          <Route path='/forzapage' element={<ForzaPage />} />
        </Routes>
       </div>
    </div>
  );
}