import { useState } from 'react'
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import './styles/global.css'
import NavButton from './components/NavButton';


function App() {

  const [translationFactor, setTranslationFactor] = useState(0)

  // Add 1 to numberOfSections when adding a new setion.
  const [numberOfSections, setNumberOfSections] = useState(4)

  window.addEventListener('wheel', (e) => {

    if (e.deltaY > 0) {
      if (translationFactor < numberOfSections) {
        setTranslationFactor(translationFactor + 1)
      }
    } else {
      if (translationFactor > 0) {
        setTranslationFactor(translationFactor - 1)
      }
    }
  })

  const handleManualTranslation = (id) => {
    setTranslationFactor(id)
  }


  return (
    <div className="App">
      <Nav />
      <div className='nav-wrapper'>
        <NavButton id={0} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={1} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={2} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={3} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={4} pageNumber={translationFactor} navTo={handleManualTranslation} />
      </div>
      <Homepage
        factorY={translationFactor}
      />
    </div>

  );
}

export default App;
