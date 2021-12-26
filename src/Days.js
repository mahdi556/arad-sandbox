import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import moment from "jalali-moment";

const Bdays = (props) => {
    console.log(useLocation())
//   const data = props.datas;
  const splitTime = (startTime, endTime, interval) => {
    const result = [startTime.toString()];
    let time = startTime.add(interval, "m");
    while (time.isBetween(startTime, endTime, undefined, [])) {
      result.push(time.toString());
      time = time.add(interval, "m");
    }
    return result;
  };

  var date = "2021-12-10";
  var time = "18:00";

  var timeAndDate = moment(date + " " + time);
  const startTime = new moment({ hour: 8, minute: "00" });
  const endTime = new moment({ hour: 16, minute: "00" });
  const [interval, setInterval] = useState(30);
  const [timeinput, setTimeinput] = useState(10);
  const timeSlices = splitTime(startTime, endTime, interval);
  const [selectedDay, setSelectedDay] = useState(null);
  // For printing out the intervals
  var times = [];

  for (let i = 0; i < timeSlices.length - 1; i++) {
    times.push({ start: timeSlices[i], finish: timeSlices[i + 1] });
    // console.log(timeSlices[i]+" - "+timeSlices[i+1]);
  }

  return (
    <div>
      <div className="d-flex flex-row  justify-content-center mb-12 mt-5">
        <label htmlFor="exampleFormControlInput1" className="form-label col-3 ">
          مدت زمان ویزیت هر بیمار
        </label>
        <input
          type="email"
          className=" col-3 "
          id="exampleFormControlInput1"
          placeholder="زمان بر حسب دقیقه"
          onChange={(e) => setTimeinput(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setInterval(timeinput)}
        >
          ثبت
        </button>
      </div>

      <div className="d-flex flex-row  justify-content-center mb-12 mt-5">
        {/* تاریخ :{data.year}/
        {data.month}/
        {data.day} */}
      </div>
      <div className="d-flex  flex-wrap col-8  justify-content-center mb-12 mt-5">
      {times.map((item, key) => (
        //    moment(item.start).locale("fa").format("dddd") == "جمعه" ? (
        <button className="btn btn-info  me-2 mb-2">
          {moment(item.start).locale("fa").format(" HH:mm")}
        </button>
        //    ) : null
      ))}
      </div>
     
    </div>
     
  );
};

export default Bdays;
