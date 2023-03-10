import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(null);
  const bestPicture = [
    'All Quiet on the Western Front',
    'Avatar: The Way of Water',
    'The Banshees of Inisherin',
    'Elvis',
    'Everything Everywhere All at Once',
    'The Fabelmans',
    'Tár',
    'Top Gun: Maverick',
    'Triangle of Sadness',
    'Women Talking',
  ];

  const handleChange1 = (e) => {
    console.log('this', e.currentTarget);
    setSelected(parseInt(e.currentTarget.id));
    select(e.currentTarget.value);
  };

  const { feedbackEditState } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditState.edit) {
      setSelected(feedbackEditState.item.rating);
    }
  }, [feedbackEditState]);

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={i}
            name='movie'
            value={bestPicture[i]}
            onChange={handleChange1}
            checked={selected === i}
          />
          <label htmlFor={i}>{bestPicture[i]}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
