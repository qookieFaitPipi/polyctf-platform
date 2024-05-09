import React, {useEffect, useState} from 'react';
import styles from './Profile.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../Hooks/getCookie';
 
// components
import Graph from './Graph/Graph';
import Rewards from './Rewards/Rewards';
import ProgressList from './ProgressList/ProgressList';
import UserInfo from './UserInfo/UserInfo';

// images
import profileBack from './../../Assets/images/background/profileBack.svg';

const Profile = () => {
  const [userParams, setUserParams] = useState({});
  const [categories, setCategories] = useState([]);
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("https://hosting.alexavr.ru/api/get_profile", config).then((res) => {
        setUserParams(res.data);
      })
    } catch (err) {
      console.log(err);
    }

    try {
      axios.get("https://hosting.alexavr.ru/api/get_categories", config).then((res) => {
        setCategories(res.data);
      })
    } catch (err) {
      console.log(err);
    }

    try {
      axios.get("https://hosting.alexavr.ru/api/get_progress", config).then((res) => {
        setProgressList(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  return (
    <div className={styles.params} style={{backgroundImage: `url(${profileBack})`}}>
      <div className={styles.content}>
        <Graph
          categories={categories}
          sumPoints={userParams.user_sum_points}
          placeInRating={userParams.user_place_in_rating}
          countSolvedTasks={userParams.user_count_solved_tasks}
          userCountFirstBlood={userParams.user_count_first_blood}
        />
        <div className={styles.middle}>
          <ProgressList progressList={progressList} />
          <Rewards />
        </div>
        <UserInfo />
      </div>
    </div>
  )
}

export default React.memo(Profile);