import React, {useEffect, useState} from 'react';
import styles from './Categories.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';

// components
import Category from './Category/Category';

// images
import vector from './../../Assets/images/background/categoryTopVector.svg';

// redux
import { useDispatch } from 'react-redux';
import { resetTask } from '../../Redux/slices/TaskSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    }
    try {
      axios.get("https://hosting.alexavr.ru/api/get_categories", config).then((res) => {
        setCategories(res.data);
      })
    } catch (err) {
      console.log(err);
    }
    dispatch(resetTask());
  }, []);

  return (
    <section className={styles.categories}>
      <div className={styles.list} style={{backgroundImage: `url(${vector})`}}>
        <div className={styles.title}>
          <div>CHOOSE</div><br /> <div style={{textDecoration: 'underline', fontSize: '20px', letterSpacing: '1.2px', textAlign: 'center'}}>CATEGORY</div>
        </div>
        <div className={styles.content}>
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
      </div>
    </section>
  )
}

export default React.memo(Categories);
