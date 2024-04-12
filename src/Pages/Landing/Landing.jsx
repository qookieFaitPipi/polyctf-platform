import React, { useState } from 'react';

// components
import LHeader from './LHeader/LHeader';
import About from './About/About';


// modals
import Entry from './Modals/Entry/Entry';
import Register from './Modals/Register/Register';


const Landing = () => {
  const [entryModalState, setEntryModalState] = useState(false);
  const [regModalState, setRegModalState] = useState(false);

  return (
    <section>
      <LHeader 
        // entry
        entryModalState={entryModalState}
        setEntryModalState={setEntryModalState}
        
        // register
        regModalState={regModalState}
        setRegModalState={setRegModalState}
      />
      <About />

      <Entry
        // entry
        entryModalState={entryModalState}
        setEntryModalState={setEntryModalState}

        // register
        regModalState={regModalState}
        setRegModalState={setRegModalState}
      />

      <Register 
        // entry
        entryModalState={entryModalState}
        setEntryModalState={setEntryModalState}
      
        // register
        regModalState={regModalState}
        setRegModalState={setRegModalState}
      />
    </section>
  )
}

export default React.memo(Landing);