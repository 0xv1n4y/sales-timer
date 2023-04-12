import { useState,useEffect } from 'react';
import './App.css';
import Display from './Display';

function App() {
  const endTime=new Date("dec 10,2023 00:00:00").getTime();
  const[currentTime,setcurrentTime]=useState(new Date().getTime());
  const gap=endTime-currentTime;

  const seconds=1000; // in Milliseconds
  const minutes=seconds*60;
  const hours=minutes*60;
  const days=hours*24;

  const remainingDays= Math.floor(gap/days);
  const remainingHours=Math.floor((gap%days)/ hours);
  const remainingMinutes=Math.floor((gap%hours)/minutes);
  const remainingSeconds=Math.floor((gap%minutes)/seconds);

 useEffect(()=>{
  setTimeout(()=>setcurrentTime(new Date().getTime()),1000)
  if(gap===0){
    console.log("Sale Is End")
  }
 },[currentTime])
  return (
    <div className="App">
      <center>
        <Display  days={remainingDays} hours={remainingHours} minutes={remainingMinutes}
        seconds={remainingSeconds}/>

      </center>
      
    </div>
  );
}

export default App;
