import { useState } from 'react'
import Homepage from "./pages/Homepage";
// import Nav from "./components/Nav";
import './styles/global.css'
import NavButton from './components/NavButton';


function App() {

  const [translationFactor, setTranslationFactor] = useState(0)

  window.addEventListener('wheel', (e) => {

    if (e.deltaY > 0) {
      if (translationFactor < 4) {
        setTranslationFactor(translationFactor + 1)
      }
    } else {
      if (translationFactor > 0) {
        setTranslationFactor(translationFactor - 1)
      }
    }
  })



  return (
    <div className="App">
      <div className='nav-wrapper'>
        <NavButton id={0} pageNumber={translationFactor} />
        <NavButton id={1} pageNumber={translationFactor} />
        <NavButton id={2} pageNumber={translationFactor} />
        <NavButton id={3} pageNumber={translationFactor} />
        <NavButton id={4} pageNumber={translationFactor} />
      </div>
      <Homepage
        factorY={translationFactor}
      />
    </div>

  );
}

export default App;
