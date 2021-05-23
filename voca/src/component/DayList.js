import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

const DayList = () => {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('change Count');
  }, []);

  function countClick() {
    setCount(count + 1);
  }
  function countClick2() {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
      <button onClick={countClick2}>DayChange</button>
      <button onClick={countClick}>{count}</button>
    </ul>
  );
};

export default DayList;
