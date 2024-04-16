import React from 'react';
import styles from './Category.module.scss';

// react-router-dom
import { useNavigate } from 'react-router';

// images
import cat1 from './../../../Assets/images/category/cat1.svg';

const Category = ({id, name, countAllTasks, image, countSolvedTasks}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.category} onClick={() => navigate(`/categories/${name}`)} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.left}>
            {name}
          </div>
          <div className={styles.right}>  
            {countSolvedTasks}/{countAllTasks}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Category);