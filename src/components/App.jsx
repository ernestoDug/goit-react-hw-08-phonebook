import RestrictedRoute from './RestrictedRoute';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout';

const Home = lazy(() => import('Pages/Home/Home'));
const RegPg = lazy(() => import('Pages/RegPg/RegPg'));
const LogPg = lazy(() => import('Pages/Login/Login'));
const ContPg = lazy(() => import('Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  //  запит оновлення користувача
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b className="loadMesg"> 🌀новлення...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegPg />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogPg />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContPg />} />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
