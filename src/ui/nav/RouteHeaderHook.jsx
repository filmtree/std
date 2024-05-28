import { useRoutes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import { useLocation, useParams } from 'react-router-dom';

const useRoute = () => {
  const location = useLocation();
  const params = useParams();
  
  return { location, params };
};

// Header 컴포넌트 정의
const Header = () => {
  // 라우트 설정을 객체 배열로 정의
  const routes = useRoutes([
    { path: '/', element: <NewsPage /> },
    { path: '/:category', element: <NewsPage /> },
  ]);

  return <header> { routes } </header>;
};

export default Header;
