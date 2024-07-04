import React, { useState } from 'react';

// components
import LHeader from './LHeader/LHeader';
import About from './About/About';
import News from './News/News';
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer';

// modals
import Entry from './../Modals/Entry/Entry';
import Register from './../Modals/Register/Register';
import Detail from './../Modals/Detail/Detail';
//import Auth from './Modals/Auth/Auth';

// redux
import { useSelector } from 'react-redux';

const Landing = () => {
  //const [authModalState, setAuthModalState] = useState(false);
  const [entryModalState, setEntryModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);
  const { detailModalState } = useSelector((state) => state.NewsSlice);

  return (
    <section style={{backgroundColor: 'rgba(26, 26, 26, 1)'}}>
      <LHeader 
        entryModalState={entryModalState}
        setEntryModalState={setEntryModalState}
      />
      <div style={{height: '106px'}}></div>
      <About />
      <News />
      <Gallery />
      <Footer />
      {/*
      entryModalState 
        ? 
        <Auth 
          setAuthModalState={setAuthModalState}
        />
        :
        <></>
      */}

      {
      entryModalState
        ?
        <Entry 
          setEntryModalState={setEntryModalState}
          setRegisterModalState={setRegisterModalState}
        />
        :
        <></>
      }

      {
      registerModalState
        ?
        <Register 
          setEntryModalState={setEntryModalState}
          setRegisterModalState={setRegisterModalState}
        />
        :
        <></>
      }

      {detailModalState 
        ?
        <Detail />
        :
        <></>
      }
    </section>
  )
}

export default React.memo(Landing);