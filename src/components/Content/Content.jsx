import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { Route, Routes } from 'react-router-dom';

import Courses from '../Courses/Courses';
import { default as ContentStyles } from './Content.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className={style()}>
      <Routes>
        <Route exact path="/" element={<Courses />} />
        {isUserLogged && (
          <Route path="/my-courses" element={<p>Moje kursy</p>} />
        )}
        {isAdmin && (
          <Route path="/manage-courses" element={<p>Zarządzanie kursami</p>} />
        )}
      </Routes>
    </main>
  );
};

export default Content;
