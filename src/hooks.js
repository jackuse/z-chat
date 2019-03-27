import { useEffect, useReducer } from 'react';

export function useFirebaseList(method, onSet = () => {}) {
    const [data, addData] = useReducer((oldData, newData) => [...oldData, ...newData], [])
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
