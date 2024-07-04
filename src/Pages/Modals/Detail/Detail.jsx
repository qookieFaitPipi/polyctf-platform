import React from 'react';
import styles from './Detail.module.scss';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetNews } from '../../../Redux/slices/NewsSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const { title, text, image } = useSelector((state) => state.NewsSlice);

  return (
    <div className={styles.detail} onClick={() => dispatch(resetNews())}>
      <div className={styles.content}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Detail);