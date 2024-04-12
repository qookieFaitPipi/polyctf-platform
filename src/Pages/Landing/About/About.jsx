import React from 'react';
import styles from './About.module.scss';

// images
import mask from './../../../Assets/images/mask.svg';

const About = () => {
  return (
    <div className={styles.about} style={{backgroundImage: `url(${mask})`}}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          Капибара, внешне похожая на морскую свинку, имеет длину тела от 1 до 1,35 метра[6] и высоту в холке от 51 до 63 сантиметров. Вес этих зверей может достигать до 75 килограммов[3], но самки способны набирать вес даже до 90 килограммов. Телосложение тяжелое, с крупной головой почти квадратной формы. Большая голова заканчивается тупой мордой с щелевидными ноздрями, которые закрываются при нырянии. Маленькие глаза сдвинуты назад, а уши не велики и округлой формы. Благодаря высокому расположению ушей и глаз, капибара может держать их над водой во время плавания. Её конечности относительно короткие, с четырьмя пальцами на передних лапах и тремя на задних. Пальцы объединены плавательной перепонкой и оканчиваются короткими, но сильными когтями. Вот как описывал капибару Джеральд Даррелл в книге «Три билета до Эдвенчер»[7].
        </div>
      </div>
    </div>
  )
}

export default React.memo(About);