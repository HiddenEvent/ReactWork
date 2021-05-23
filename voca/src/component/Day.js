import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Word from './Word';

const Day = () => {
  // Pathvariable 값 가져오기
  const { day } = useParams();

  // 해당하는 Day와 일치 한것만 필터하기

  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
