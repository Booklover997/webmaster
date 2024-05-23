import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Programs from './pages/Programs';
import Info from './pages/Info';
import GoingGreen from './pages/GoingGreen';
import Documentation from './pages/Documentation';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="green" element={<GoingGreen />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="programs"  element={<Programs />}/>
          <Route path=":programHeader" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
