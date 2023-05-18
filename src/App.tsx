import { Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';
import { TestViewerPage } from './pages/TestViewerPage';

function App() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="py-2 font-bold">PDF 테스트</div>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="viewer" element={<TestViewerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
