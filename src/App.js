import { useState } from 'react'
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import './styles/global.css'
import NavButton from './components/NavButton';
import Modal from './components/Modal'
import { coloursTheme } from './styles/themes';

function App() {

  const [translationFactor, setTranslationFactor] = useState(0)
  const [open, setOpen] = useState(false)

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

  let touchstartY = 0
  let touchendY = 0

  function checkDirection() {
    if (touchendY < touchstartY) {
      if (translationFactor < numberOfSections) {
        setTranslationFactor(translationFactor + 1)
      }
    }
    if (touchendY > touchstartY) {
      if (translationFactor > 0) {
        setTranslationFactor(translationFactor - 1)
      }
    }
  }

  document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY
  })

  document.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY
    checkDirection()
  })

  const handleManualTranslation = (id) => {
    setTranslationFactor(id)
  }


  const handleOpenModal = (bool = !open) => {
    setOpen(!open)
  }

  return (
    <div className="App"
    // onClick={() => { handleOpenModal(false) }}
    >
      <Nav theme={coloursTheme} />
      <div className='nav-wrapper'>
        <NavButton id={0} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={1} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={2} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={3} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={4} pageNumber={translationFactor} navTo={handleManualTranslation} />
      </div>
      <Homepage
        factorY={translationFactor}
        openModal={handleOpenModal}
      />
      <Modal open={open} closeModal={handleOpenModal} />
    </div>

  );
}

export default App;
