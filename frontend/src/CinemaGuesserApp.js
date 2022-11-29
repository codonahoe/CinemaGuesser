import React from 'react';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import WatchlistPage from './pages/WatchlistPage';
import PrivateComponent from './components/PrivateComponent';
import RegistrationSuccess from './components/RegistrationSuccess';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function CinemaGuesserApp() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Add more private paths here */}
        <Route element={<PrivateComponent />}>
          <Route path='/game' element={<GamePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/leaderboard' element={<LeaderboardPage />} />
          <Route path='/watchlist' element={<WatchlistPage />} />
        </Route>

        {/* Public paths */}
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register-success' element={<RegistrationSuccess />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />

        {/* For unknown path*/}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default CinemaGuesserApp;
