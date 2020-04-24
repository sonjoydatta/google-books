import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = () => {
  let starItems = [];
  for (let i = 0; i < 5; i++) {
    starItems.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return starItems;
}

const BookRating = ( props ) => {
  const { rating, count } = props;

  let divWidth = 0;
  if (rating > 0 && rating !== undefined) {
    divWidth = rating * 20.4;
  }

  return (
    <div className="BookDetails-Rating">
      <p className="BookDetails-Rating__Heading">
        { rating > 0 && rating !== undefined ? rating : 0 }
        <span className="small text-secondary"> – { count > 0 && count !== undefined ? count : 0 } ratings</span>
      </p>
      <div className="BookDetails-Rating__Stars">
        <div className="BookDetails-Rating__StarsWhite">
          <RatingStars />
        </div>
        <div className="BookDetails-Rating__StarsYellow" style={{ width: `${divWidth}%` }}>
          <div className="BookDetails-Rating__StarsYellow--Wrapper">
            <RatingStars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRating;