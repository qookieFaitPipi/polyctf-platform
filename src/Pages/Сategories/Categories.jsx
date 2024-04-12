import React, {useEffect, useState} from 'react';
import styles from './Categories.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import MHeader from '../../Components/MHeader/MHeader';
import Invisible from '../../Components/Invisible/Invisible';
import Category from './Category/Category';

// images
import fon from './../../Assets/images/fon.svg';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("http://polyctf.alexavr.ru/api/get_categories", config).then((res) => {
        setCategories(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className={styles.categories}>
      <MHeader />
      <Invisible />
      <div className={styles.list} style={{backgroundImage: `url(${fon})`}}>
        {categories.map((obj) => {
          return <Category 
            key={obj.category_id} 
            id={obj.category_id} 
            name={obj.category_name}
            countAllTasks={obj.category_all_tasks}
            image={obj.category_image}
            countSolvedTasks={obj.category_solved_tasks}
          />
        })}
      </div>
    </section>
  )
}

export default React.memo(Categories);
