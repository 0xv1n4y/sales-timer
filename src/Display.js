import React from 'react'
import "./App.css";

const Display = ({days,hours,minutes,seconds}) => {
  return (
    <div className='dot-01'>
        <h1>SALE COUNTDOWN TIMER</h1>

        <h2>
            OFFER ENDS IN
        </h2>

        <table>
            <tbody >
                <tr>

                <th>{days}</th>&nbsp;&nbsp;
                <th>{hours}</th>&nbsp;&nbsp;
                <th>{minutes}</th>&nbsp;&nbsp;
                <th>{seconds}</th>&nbsp;&nbsp;

                </tr>

                <tr >
                    <td>Days</td>&nbsp;&nbsp;
                    <td>Hours</td>&nbsp;&nbsp;
                    <td>Minutes</td>&nbsp;&nbsp;
                    <td>Seconds</td>&nbsp;&nbsp;
                </tr>



            </tbody>
        </table>
    </div>
  )
}

export default Display