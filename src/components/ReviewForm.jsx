import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
function ReviewForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = event => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
    setMessage('Text must be at least 10 characters');
    setBtnDisabled(true);
    } else {
     setMessage(null);
     setBtnDisabled(false);
   }
    setText(event.target.value);
   };
   return (
    <Card>
     <form>
       <h2>How would you rate this product?</h2>
       <RatingSelect select={rating => setRating(rating)} />
       <div className="input-group">
         <input 
          onChange={handleTextChange} 
          type="text" 
          placeholder="Write a review" 
          value={text} 
         />
         <Button type="submit" isDisabled={btnDisabled}>
             Send
        </Button>
     </div>
       {message && <div className="message">{message}</div>}
     </form>
  </Card>
 );
}
export default ReviewForm;
