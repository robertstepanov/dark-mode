import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
// //   const [storedvalue, setStoredValue] = useState(() => {
// //     if (localStorage.getItem(key)) {
// //       return JSON.parse(localStorage.getItem(key));
// //     } else {
// //       localStorage.setItem(key, JSON.stringify(initialValue));
// //       return initialValue;
// //     }
// //   });

 const [storedValue, setStoredValue] = useState(() => {

     if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    };

     const item = window.localStorage.getItem(key);
     
     return item ? JSON.parse(item) : initialValue;
 });

 return [storedValue];

 const setValue = value => {
     setStoredValue(value);
     window.localStorage.setItem(key, JSON.stringify(value));
 }
};