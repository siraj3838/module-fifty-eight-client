import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loggedInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        })
        return () => {
           return unSubscribe()
        }
    },[])


    const myAuth = {
        user,
        loading,
        createUser,
        loggedInUser,
        googleLogin,
        logoutUser
    }
    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;