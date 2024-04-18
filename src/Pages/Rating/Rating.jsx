import React, {useEffect, useState} from 'react';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import MHeader from '../../Components/MHeader/MHeader';
import Invisible from '../../Components/Invisible/Invisible';
import Table from './Table/Table';

const Rating = () => {
  const [points, setPoints] = useState([]);
  
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    
    try {
      axios.get("https://polyctf.alexavr.ru/api/get_rating", config).then((res) => {
        setPoints(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section>
      <MHeader />
      <Invisible />
      <Table points={points} /> 
    </section>
  )
}

export default React.memo(Rating);