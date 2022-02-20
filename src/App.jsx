import React,{useState} from 'react';
import styles from './app.module.css'
function App() {
  const [timeNow,setTimeNow] = useState(new Date());
  setTimeout(() => {
    setTimeNow(new Date());
  }, 1000);
  return (
    <>
      <div className={styles.timeNow}>
        {timeNow.getHours()}:{timeNow.getMinutes()}:{timeNow.getSeconds()}
      </div>
    </>
  );
}

export default App;
