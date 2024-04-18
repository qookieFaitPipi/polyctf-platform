import React, {useEffect, useState} from 'react';
import styles from './Params.module.scss';

// axios
import axios from 'axios';

// hooks
import { getCookie } from '../../../Hooks/getCookie';
 
// components
import Graph from './Graph/Graph';
import Rewards from './Rewards/Rewards';
import ProgressList from './ProgressList/ProgressList';
import UserInfo from './UserInfo/UserInfo';

// images
import profileBack from './../../../Assets/images/background/profileBack.svg';

const Params = () => {
  const [userParams, setUserParams] = useState({});
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
    try {
      axios.get("https://polyctf.alexavr.ru/api/get_profile", config).then((res) => {
        setUserParams(res.data);
      })
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  return (
    <div className={styles.params} style={{backgroundImage: `url(${profileBack})`}}>
      <div className={styles.content}>
        <Graph
          sumPoints={userParams.user_sum_points}
          placeInRating={userParams.user_place_in_rating}
          countSolvedTasks={userParams.user_count_solved_tasks}
          userCountFirstBlood={userParams.user_count_first_blood}
        />
        <div className={styles.middle}>
          <ProgressList />
          <Rewards />
        </div>
        <UserInfo />
      </div>
    </div>
  )
}

export default React.memo(Params);