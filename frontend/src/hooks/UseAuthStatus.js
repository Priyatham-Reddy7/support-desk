import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

const UseAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {user} = useSelector(state => state.auth)

    useEffect(()=> {
        //checking if user exists
        if(user){
            setLoggedIn(true)
        } else{
            setLoggedIn(false)
        }

        setCheckingStatus(false)
        // return { loggedIn, checkingStatus}
    }, [user])

    return { loggedIn, checkingStatus}
}

export default UseAuthStatus