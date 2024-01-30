import React,{ useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyle from './globalstyles';
import Home from './components/home';
import ModelS from './components/Model-S';
import Model3 from './components/Model-3';
import ModelX from './components/Model-X';
import ModelY from './components/Model_Y';
import Signup from './components/Signup';

import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './components/firebase';
import UIUX from './components/UIUX';
import ARVR from './components/ARVR';
import BUG from './components/BUG';
import UTOPIA from './components/UTOPIA';
import CODESPRINT from './components/CODESPRINT';
import PAPER from './components/PAPER';
import TECH from './components/TECH';
import MARVEL from './components/MARVEL';
import FFBGMI from './components/FFBGMI';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/ui-ux" element={<UIUX/>} />
          <Route path="/ar-vr" element={<ARVR/>} />
          <Route path="/bug-bash-challenge" element={<BUG/>} />
          <Route path="/utopia-ui" element={<UTOPIA/>} />
          <Route path="/code-sprint-shutdown" element={<CODESPRINT/>} />
          <Route path="/paper-pinnacle" element={<PAPER/>} />
          <Route path="/tech-unleashed-expo" element={<TECH/>} />
          <Route path="/marvel-mastery" element={<MARVEL/>} />
          <Route path="/ff-bgmi" element={<FFBGMI/>} />
          <Route path="/isekai-baka" element={<Signup/>} />
          <Route path="/flicker-fusion" element={<ModelS/>} />
          <Route path="/vibrato-vision" element={<Model3/>} />
          <Route path="/box-bash-league" element={<ModelX/>} />
          <Route path="/shadow-conspiracy" element={<ModelY/>} />
          <Route path="/meme-mind-summit" element={<Signup/>} />
          <Route path="/frame-by-frame" element={<Signup/>} />
        </Routes>
        <GlobalStyle/>
      </div>
    </Router>
  );
}

export default App;