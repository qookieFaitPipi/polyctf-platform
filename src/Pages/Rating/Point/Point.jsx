import React, { useState, useRef, useEffect } from 'react';
import styles from './Point.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';

const Point = ({name, place, sumPoints, countSolvedTasks, isMe, searchValue}) => {
  const [location, setLocation] = useState(window.location.pathname);
  const ref = useRef();

  return (
    <>
      <Link to={location === '/liveboard' ? '/liveboard' : `/profile/${name}`} ref={ref} className={styles.point} style={searchValue === '' ? {} : {backgroundColor: 'transparent'}} >
        <div className={styles.content}>
          <div className={styles.text} style={isMe ? {color: '#3b1767'} : {}}>{place}</div>
          <div className={styles.text} style={isMe ? {color: '#3b1767'} : {}}>{name}</div>
          <div className={styles.text} style={isMe ? {color: '#3b1767'} : {}}>{countSolvedTasks}</div>
          <div className={styles.text} style={isMe ? {color: '#3b1767'} : {}}>{sumPoints}</div>
        </div>
      </Link>
      <hr className={styles.hr} style={searchValue === '' ? {} : {opacity: '0', margin: '2.5px auto'}}/>
    </>
  )
}

export default React.memo(Point);