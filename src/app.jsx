import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reduction from './pages/Reduction';
import Programs from './pages/Programs';
import Info from './pages/Info';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="reduction" element={<Reduction />} />
        <Route path="programs">
          <Route path="" element={<Programs />} />
          <Route path=":programHeader" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
