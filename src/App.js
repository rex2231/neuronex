
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyle from './globalstyles';
import Home from './components/home';


import UIUX from './components/UIUX';
import ARVR from './components/ARVR';
import BUG from './components/BUG';
import UTOPIA from './components/UTOPIA';
import CODESPRINT from './components/CODESPRINT';
import PAPER from './components/PAPER';
import TECH from './components/TECH';
import MARVEL from './components/MARVEL';
import FFBGMI from './components/FFBGMI';
import ISEKAI from './components/ISEKAI';
import FLICKER from './components/FLICKER';
import VIBRATO from './components/VIBRATO';
import FRAME from './components/FRAME';
import MEME from './components/MEME';
import SHADOW from './components/SHADOW';
import BOX from './components/BOX';

function App() {

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
          <Route path="/isekai-baka" element={<ISEKAI/>} />
          <Route path="/flicker-fusion" element={<FLICKER/>} />
          <Route path="/vibrato-vision" element={<VIBRATO/>} />
          <Route path="/box-bash-league" element={<BOX/>} />
          <Route path="/shadow-conspiracy" element={<SHADOW/>} />
          <Route path="/meme-mind-summit" element={<MEME/>} />
          <Route path="/frame-by-frame" element={<FRAME/>} />
        </Routes>
        <GlobalStyle/>
      </div>
    </Router>
  );
}

export default App;