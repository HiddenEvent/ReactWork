import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DayList = () => {
  const [days, setDays] = useState([]);

  // api 호출
  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then((res) => {
        // res = http응답 객체를 뜻함
        return res.json(); // http응답 객체를 json으로 변환
      })
      .then((data) => {
        setDays(data);
      });
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
