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

const Landing = () => {
  const [authModalState, setAuthModalState] = useState(false);

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
      <Auth 
        authModalState={authModalState}
        setAuthModalState={setAuthModalState}
      />
      <Detail />
    </section>
  )
}

export default React.memo(Landing);