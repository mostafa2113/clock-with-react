import React,{useState} from 'react';
import styles from './app.module.css'
function App() {
  const [timeNow,setTimeNow] = useState(new Date());
  setInterval(() => {
    setTimeNow(new Date());
  }, 1000);
  return (
    <>
      <div className={styles.timeNow}>
        {timeNow.toLocaleTimeString()}
      </div>
    </>
  );
}

export default App;
