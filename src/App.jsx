import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './assets/Signin';
import Signup from './assets/Signup';
import ProductPage from './assets/ProductPage'; // Ensure correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;