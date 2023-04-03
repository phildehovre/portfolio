import { useState, useEffect } from 'react'
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import './styles/global.css'
import NavButton from './components/NavButton';
import Modal from './components/Modal'
import { coloursTheme } from './styles/themes';
import { useSwipeable } from 'react-swipeable'

function App() {

  const [translationFactor, setTranslationFactor] = useState(0)
  const [numberOfSections, setNumberOfSections] = useState(3)
  const [open, setOpen] = useState(false)


  // document.addEventListener('wheel', (e) => {
  //   console.log(e.deltaY)
  //   if (detectTrackPad(e)) {
  //     if (e.deltaY < 0) {
  //       if (translationFactor < numberOfSections) {
  //         setTranslationFactor(translationFactor - 1)
  //       }
  //     }
  //     if (e.deltaY > 0) {
  //       if (translationFactor > 0) {
  //         setTranslationFactor(translationFactor + 1)
  //       }
  //     }
  //   }
  // })

  document.addEventListener('touchmove', (e) => {
    console.log(e)
  })
  // console.log('factor', translationFactor)

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


  const handlers = useSwipeable({
    onSwipedUp: (e) => {
      if (translationFactor < numberOfSections) {
        setTranslationFactor(translationFactor + 1)
      }
    },
    onSwipedDown: (e) => {
      if (translationFactor > 0) {
        setTranslationFactor(translationFactor - 1)
      }
    },
  });

  function detectTrackPad(e) {
    var isTrackpad = false;
    if (e.deltaY) {
      if (Math.abs(e.deltaY) !== 100) {
        isTrackpad = true;
      }
    }
    else if (e.deltaMode === 0) {
      isTrackpad = true;
    }
    return isTrackpad
  }

  document.addEventListener("mousewheel", detectTrackPad, false);
  document.addEventListener("DOMMouseScroll", detectTrackPad, false);


  const handleManualTranslation = (id) => {
    setTranslationFactor(id)
  }


  const handleOpenModal = (bool = !open) => {
    setOpen(!open)
  }


  return (
    <div className="App"
      {...handlers}
    >
      <Nav theme={coloursTheme} factorY={translationFactor} navTo={handleManualTranslation} />
      <div className='nav-wrapper'>
        <NavButton id={0} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={1} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={2} pageNumber={translationFactor} navTo={handleManualTranslation} />
        <NavButton id={3} pageNumber={translationFactor} navTo={handleManualTranslation} />
        {/* <NavButton id={4} pageNumber={translationFactor} navTo={handleManualTranslation} /> */}
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
