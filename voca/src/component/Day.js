import React from 'react';
import { useParams } from 'react-router';
import dummy from '../db/data.json';

const Day = () => {
  // Pathvariable 값 가져오기
  const { day } = useParams();
  // 해당하는 Day와 일치 한것만 필터하기
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
