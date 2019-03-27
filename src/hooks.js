import { useEffect, useReducer } from 'react';

export function useLocalStorage(key, defaultValue) {
    const value = localStorage.getItem(key) || defaultValue
    const setItem = (newValue) => localStorage.setItem(key, newValue)

    return [value, setItem]
}

export function useFirebaseList(method, onSet = () => {}) {
    const [data, addData] = useReducer((oldData, newData) => [...oldData, ...newData], [])
    console.log(data);
    useEffect(() => {
        return method((newData) => {
            addData(newData)
            onSet()
        })
    }, [])

    return data
}

export function useEvent(event, cb) {
    useEffect(() => {
        window.addEventListener(event, cb)
        return () => window.removeEventListener(event, cb)
    }, [])
}
