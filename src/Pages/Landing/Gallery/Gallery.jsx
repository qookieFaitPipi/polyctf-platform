import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';

// axios
import axios from 'axios';

// swiper
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import './styles.scss';

// images
import vector from './../../../Assets/images/background/galleryVector.svg';

const Gallery = () => {
  const [eventsList, setEventsList] = useState([]);
  const [event, setEvent] = useState();
  const [currentEvent, setCurrentEvent] = useState();

  useEffect(() => {
    try {
      axios.get('https://backend.polyctf.ru/api/get_events').then((response) => {
        if(response.status === 200) {
          setEventsList(response.data);
        }
      });
    } catch(err) {
      console.log(err);
    }
    getEvent(1);
  }, []);

  const getEvent = (id) => {
    try {
      axios.post('https://backend.polyctf.ru/api/get_event_photos', {event_id: id}).then((response) => {
        if(response.status === 200) {
          setEvent(response.data);
          setCurrentEvent(response.data[0].event_id);
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.gallery} style={{backgroundImage: `url(${vector})`}} id='scrollGallery'>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>ГАЛЕРЕЯ</div>
          <div className={styles.text}>Архив мероприятий</div>
          <div className={styles.eventsList}>
            {eventsList.map((obj) => {
              return <li key={obj.id} onClick={() => getEvent(obj.id)} className={currentEvent === obj.id ? styles.active : styles.event}>{obj.name}</li>
            })}
          </div>
        </div>
        
        <div className={styles.right}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="swiper1"
          >
            {event ? 
              event.map((obj) => {
                return <SwiperSlide key={obj.image} style={{backgroundImage: `url(${obj.image})`, backgroundSize: 'cover', cursor: 'grab', border: '2px solid #f2f4f3 !important'}}></SwiperSlide>
              })
              :
              ''  
          }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Gallery);