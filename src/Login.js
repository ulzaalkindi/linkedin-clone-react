import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePic
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })

            }).catch(error => alert(error));
    }
    return (
        <div className='login'>
            {/* <h1>You are not logged in</h1> */}
            <img
                src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
                alt='linkedin logo' />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile picture (optional)' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="Password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member? {" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
            <br />
        </div>
    )
}

export default Login