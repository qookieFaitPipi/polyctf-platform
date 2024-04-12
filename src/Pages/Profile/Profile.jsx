import React from 'react';

// components
import MHeader from '../../Components/MHeader/MHeader';
import Invisible from '../../Components/Invisible/Invisible';
import Params from './Params/Params';

const Profile = () => {
  return (
    <div>
      <MHeader />
      <Invisible />
      <Params />
    </div>
  )
}

export default React.memo(Profile);