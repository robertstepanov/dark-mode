import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const  useDarkMode = () => {

const [darkMode, setDarkMode] = useLocalStorage('false');
    useEffect (() => {
        if ( darkMode === 'true') {
            setDarkMode(document.querySelector('body')
            .classList.add('dark-mode'))
        } else {
            setDarkMode(document.querySelector('body')
            .classList.remove('dark-mode'))
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];

}