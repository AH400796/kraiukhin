import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
// const Books = lazy(() => import('../pages/Books'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<Home />} />
          {/* <Route path="books" element={<Books />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="about" replace={true} />} /> */}
        </Route>
      </Routes>
    </>
  );
}
