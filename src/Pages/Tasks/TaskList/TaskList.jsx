import React from 'react';
import styles from './TaskList.module.scss';

// components
import Task from './Task/Task';

const TaskList = ({tasks}) => {
  return (
    <div className={styles.tasklist}>
      <div className={styles.content}>
        <div className={styles.taskBoard}>
          <div className={styles.taskInfo}>
            <div className={styles.description}>
              <Task />
              <div className={styles.descriptionTitle}>Описание:</div>
              <div className={styles.descriptionText}>Поступок относится</div>
              <div className={styles.descriptionTitle}>Уровень сложности:</div>
              <div className={styles.descriptionText}>Легко</div>
              <div className={styles.descriptionTitle}>Ссылки на внешние ресурсы:</div>
              <div className={styles.descriptionText}>https://youtu.be/xm3YgoEiEDc?si=ZeJrpjMbBkiXka7x</div>
            </div>
            <div className={styles.statisics}>
              <div className={styles.statBlock}>
                <div>Выполнили</div>
                <hr />
                <div>6</div>
                <div>раз</div>
              </div>
              <div className={styles.statBlock}>
                <div>Первая кровь</div>
                <hr />
                <div>RAYANGOSTLING</div>
                <div>33/09/2054</div> 
              </div>
              <div className={styles.statBlock}>
                <div>Награда</div>
                <hr />
                <div>1748</div>
                <div>баллов</div> 
              </div>
            </div>
            <div className={styles.level}>
              <div>
                <div></div>
                <div></div>
              </div>
              <img src="" alt="" />
            </div>
          </div>

          <div className={styles.taskRouter}>
            {tasks.map((obj) => {
              return <Task 
                key={obj.task_id}
                id={obj.task_id}
                name={obj.task_name}
                solved={obj.task_solved}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TaskList);