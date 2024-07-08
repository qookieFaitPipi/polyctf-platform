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

import NewUsername from './../Modals/NewUsername/NewUsername';

// images
import profileBack from './../../Assets/images/background/profileBack.svg';


// redux
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateState } from '../../Redux/slices/UpdateSlice';

const Profile = () => {
  const { updateState } = useSelector((state) => state.UpdateSlice);
  const dispatch = useDispatch();

  const [newUsernameModalState, setNewUsernameModalState] = useState(false);

  const [userParams, setUserParams] = useState({});
  const [progressList, setProgressList] = useState([]);
  const params = useParams();

  const [render, setRender] = useState(false);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${getCookie('token')}`
    }
    const config = {
      headers: headers
    };
  
    try {
      axios.get(`https://backend.polyctf.ru/api/get_profile/${params.id}`, config).then((res) => {
        setUserParams(res.data.profile);
        setProgressList(res.data.progress);
        dispatch(setUpdateState(false));
      })
    } catch (err) {
      console.log(err);
    }
  }, [ dispatch, params, updateState]);
  
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
          userId={params.id}
          username={userParams.user_name}
          userImage={userParams.user_image}
          setNewUsernameModalState={setNewUsernameModalState}
        />

        {
        newUsernameModalState
          ?
          <NewUsername 
            newUsernameModalState={newUsernameModalState}
            setNewUsernameModalState={setNewUsernameModalState}
          />
          :
          <></>
        }
      </div>
    </section>
  )
}

export default React.memo(Profile);