import React, { createContext, useContext } from 'react';
import CreateAxiosInstance from '../utils/axiosInstance';
import { useSnackbar } from '../utils/snackbarContextProvider';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { show } = useSnackbar();
  const axiosInstance = CreateAxiosInstance();
  
//   const getStoredToken = () => {
//     try {
//       let adminDataString = localStorage.getItem('adminData');
//       if (!adminDataString) {
//         adminDataString = localStorage.getItem('iAdminData');
//       }
//       if (adminDataString) {
//         const adminData = JSON.parse(adminDataString);
//         return adminData.result;
//       }
//     } catch (error) {
//       console.error('Error parsing admin data from local storage:', error);
//     }
//     return null; // Return null if there's no token or in case of an error
//   };

//   const jwt = getStoredToken();


  const googleLoginUser = async (data) => {
    let response = false;
    await axiosInstance
      .post('/backend/googleLogin', data)
      .then((res) => {
        response = res.data;
        show('Nomination created successfully', 'success');
      })
      .catch((error) => {
        show(error.message, 'error');
      });
    return response;
  };

  const loginUser = async (data) => {
    let response = false;
    await axiosInstance
      .post('/backend/login', data)
      .then((res) => {
        response = res.data;
        show('Signed in successfully', 'success');
      })
      .catch((error) => {
        show(error.message, 'error');
      });
    return response;
  };

  const verifyToken = async (token) => {
    let response = false;
    await axiosInstance
      .get('/backend/verify', {
        params: {
          token,
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        show(error.message, 'error');
      });
    return response;
  };

  const contextValues = {
    loginUser,
    googleLoginUser,
    verifyToken,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
