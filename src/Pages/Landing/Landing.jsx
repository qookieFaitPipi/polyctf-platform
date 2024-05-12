import React, { useState } from 'react';

// components
import LHeader from './LHeader/LHeader';
import About from './About/About';
import News from './News/News';
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer';

// modals
import Auth from './Modals/Auth/Auth';
import Detail from './Modals/Detail/Detail';

// redux
import { useSelector } from 'react-redux';

const Landing = () => {
  const [authModalState, setAuthModalState] = useState(false);
  const { detailModalState } = useSelector((state) => state.NewsSlice);

  return (
    <section style={{backgroundColor: '#f2f4f3'}}>
      <LHeader 
        authModalState={authModalState}
        setAuthModalState={setAuthModalState}
      />
      <About />
      <News />
      <Gallery />
      <Footer />
      {authModalState 
        ? 
        <Auth 
          setAuthModalState={setAuthModalState}
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