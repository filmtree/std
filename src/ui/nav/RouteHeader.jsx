import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default Header;
