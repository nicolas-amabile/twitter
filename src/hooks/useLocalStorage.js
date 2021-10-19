import {useState} from 'react'
const useLocalStorage = () => {
    const [newStr, setNewStr] = useState('');
    const setValue = str => {
        setNewStr(str);

        if (window.localStorage) {
            if (!localStorage.getItem('tweet')) {
                localStorage.setItem('tweet',  newStr);
            }
            setNewStr(localStorage.getItem('tweet'));
        }
    }

    return {
        newStr,
        setValue
    }
}

export default useLocalStorage;