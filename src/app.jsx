import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Programs from './pages/Programs';
import Info from './pages/Info';
import GoingGreen from './pages/GoingGreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="green" element={<GoingGreen />} />
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
