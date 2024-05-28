import { Navigate } from 'react-router-dom';

// Navigate 컴포넌트는 컴포넌트를 화면에 보여주는 순간 다른 페이지로 
// 이동을 하고 싶을 때 사용하는 컴포넌트입니다.
// 페이지를 리다이렉트하고 싶을 때 사용
const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;