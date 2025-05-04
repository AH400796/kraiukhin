import { Navigate, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Books = lazy(() => import('../pages/Books'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}
