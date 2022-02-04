import React from 'react';

export const useGetLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  return {
    user,
  };
};
