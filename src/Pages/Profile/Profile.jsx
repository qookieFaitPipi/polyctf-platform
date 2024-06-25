import React, {useEffect, useState} from 'react';
import styles from './Profile.module.scss';

// axios
import axios from 'axios';

// react-router-dom
import { useParams } from 'react-router-dom';

// hooks
import { getCookie } from '../../Hooks/getCookie';
 
// components
import Graph from './Graph/Graph';
import Rewards from './Rewards/Rewards';
import ProgressList from './ProgressList/ProgressList';
import UserInfo from './UserInfo/UserInfo';

// images
import profileBack from './../../Assets/images/background/profileBack.svg';

// redux
import { useSelector } from 'react-redux';

const Profile = () => {
  const { needUpdate } = useSelector((state) => state.UserSlice);

  const [userParams, setUserParams] = useState({});
  const [progressList, setProgressList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
  
    try {
      axios.get(`https://backend.polyctf.ru/api/get_profile/${params.username}`, config).then((res) => {
        setUserParams(res.data.profile);
        setProgressList(res.data.progress);
      })
    } catch (err) {
      console.log(err);
    }
  }, [params, needUpdate]);
  
  return (
    <section className={styles.params} style={{backgroundImage: `url(${profileBack})`}}>
      <div className={styles.content}>
        <Graph
          progressList={progressList}
          sumPoints={userParams.user_sum_points}
          placeInRating={userParams.user_place_in_rating}
          countSolvedTasks={userParams.user_count_solved_tasks}
          userCountFirstBlood={userParams.user_count_first_blood}
        />
        <div className={styles.middle}>
          <ProgressList progressList={progressList} />
          <Rewards />
        </div>
        <UserInfo 
          username={userParams.user_name}
          userImage={userParams.user_image}
        />
      </div>
    </section>
  )
}

export default React.memo(Profile);