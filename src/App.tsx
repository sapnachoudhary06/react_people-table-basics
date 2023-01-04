import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => (
  <div data-cy="app">
    <Navbar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="/people"
            element={<PeoplePage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

          <Route
            path="/people/:slug"
            element={<PeoplePage />}
          />
        </Routes>
      </div>
    </main>
  </div>
);