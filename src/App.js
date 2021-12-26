import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import moment from "jalali-moment";
import "./App.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Bdays from "./Days";
 import { useNavigate } from "react-router-dom";

function App() {
  const splitTime = (startTime, endTime, interval) => {
    const result = [startTime.toString()];
    let time = startTime.add(interval, "m");
    while (time.isBetween(startTime, endTime, undefined, [])) {
      result.push(time.toString());
      time = time.add(interval, "m");
    }
    return result;
  };

  // You change these values according to your needs

  var date = "2021-12-10";
  var time = "18:00";

  var timeAndDate = moment(date + " " + time);
  const startTime = timeAndDate;
  const endTime = new moment({ hour: 16, minute: "00" });
  const [interval, setInterval] = useState(1200);
  const [timeinput, setTimeinput] = useState(10);
  const timeSlices = splitTime(startTime, endTime, interval);
  const [selectedDay, setSelectedDay] = useState(null);
  const [active,setActive]=useState(false)
  const navigate =useNavigate();
  // For printing out the intervals
  var times = [];

  for (let i = 0; i < timeSlices.length - 1; i++) {
    times.push({ start: timeSlices[i], finish: timeSlices[i + 1] });
    // console.log(timeSlices[i]+" - "+timeSlices[i+1]);
  }
  console.log(selectedDay);
  return (
    <div className="  col-12 mt-10 ">
     
      
      {/* <div className=" d-flex flex-row col-10"> */}
        {/* <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active mb-2"
            aria-current="true"
          >
            شنبه
          </a>

          {times.map((item, key) => (
           
              moment(item.start).locale("fa").format("dddd") == "شنبه" ? (
                <button className="btn btn-info  me-2 mb-2">
                  {moment(item.start).locale("fa").format("YYYY/M/D HH:mm")}
                </button>
              ) : null
            
          ))}
        </div>
        
       */}
       <Calendar
      value={selectedDay}
      onChange={(e)=>{setSelectedDay(e);navigate('/dates',{state:{year:e.year}})}}
      shouldHighlightWeekends
      locale="fa"
      calendarClassName='col-6'
    />
{/* 
    { active &&
      <Bdays datas={selectedDay} />
      } */}
      
        
      {/* </div> */}

      {/* <div className="d-flex flex-wrap justify-content-center g-2 mt-5 mb-2 col-9 ">
        {times.map((item, key) => (
          <button className="btn btn-info col-1 me-2 mb-2" key={key}>
            {moment(item.start).locale("fa").format("YYYY/M/D HH:mm")}
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default App;
