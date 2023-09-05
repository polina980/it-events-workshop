import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../../utils/auth';

function checkLoggedInStatus() {
  const token = localStorage.getItem('jwt');
  return !!token;
}

function useAuth() {
  const [loggedIn, setIsLoggedIn] = useState(checkLoggedInStatus()); // AUTHORIZATION
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user && loggedIn) {
      setCurrentUser(JSON.parse(user));
      setIsLoggedIn(true);
      console.log('LOGGED_IN:', loggedIn);
    }
  }, [loggedIn]);

  function handleError(error) {
    let message = '';

    if (error.message) {
      message = error.message;
    } else {
      message = 'Что-то пошло не так, попробуйте еще раз...';
    }

    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setServerError(message);
    console.error('Ошибка:', error);
  }

  async function handleLogin({ email, password }) {
    setIsLoading(true);
    try {
      const res = await auth.authorization({ email, password });
      if (res.auth_token) {
        console.log('TOKEN_OK');
        localStorage.setItem('jwt', res.auth_token);
        setIsLoggedIn(true);
        try {
          const userData = await auth.getUserInfo(res.auth_token);
          console.log('USER_DATA_OK', userData);
          const fullUserData = await auth.getFullUser(
            res.auth_token,
            userData.id
          );
          localStorage.setItem('currentUser', JSON.stringify(fullUserData));
          setCurrentUser(fullUserData);
          navigate('/account');
        } catch (error) {
          handleError(error);
        }
      }
    } catch (error) {
      handleError(error);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  }

  function handleRegister({ username, email, password, organization_name }) {
    setIsLoading(true);
    auth
      .registration({ username, email, password, organization_name })
      .then((res) => {
        handleLogin({ email, password });
        navigate('/account');
        console.log('Успешная регистрация');
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  }
  async function handleLogout() {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        await auth.logout(token);
        localStorage.removeItem('jwt');
        localStorage.removeItem('currentUser');
        setIsLoggedIn(false);
        setCurrentUser({});
        console.log('Вышли из учетной записи');
      } catch (error) {
        console.error('Ошибка при выходе:', error);
      }
    }
  }

  // Если Пользотваль не выставил "Запомнить меня" -> авторазлогин через 24ч.
  useEffect(() => {
    const isNotRemembered = localStorage.getItem('remembered') === 'false';
    if (isNotRemembered) {
      const timeout = setTimeout(() => {
        handleLogout();
      }, 24 * 60 * 60 * 1000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    loggedIn,
    isLoading,
    serverError,
    setServerError,
    currentUser,
  };
}

export default useAuth;
