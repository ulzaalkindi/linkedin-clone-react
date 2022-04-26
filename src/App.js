import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";


function App() {
  const auth = getAuth();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [auth, dispatch])
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>)
      }
    </div>


  );
}

export default App;
