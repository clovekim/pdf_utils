import { Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';
import { TestViewerPage } from './pages/TestViewerPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="viewer" element={<TestViewerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
