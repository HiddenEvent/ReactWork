import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {
  // Pathvariable 값 가져오기
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

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
