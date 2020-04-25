import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ( props ) => {
  const { value, changeHandler, data, clickHandler } = props;

  return (
    <div className="PrimarySearch">
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        value={value}
        className="form-control"
        placeholder="Search for a book..."
        onChange={changeHandler} 
      />
      <FontAwesomeIcon icon={faSearch} className="form-control__Icon" />
      {
        data.length > 0 &&
          <ul className="PrimarySearch-Result shadow-sm">
            {
              data.map(result => (
                <li 
                  key={result.id}
                  onClick={() => clickHandler(result.id)}
                >{result.volumeInfo.title}</li>
              ))
            }
          </ul>
      }
    </div>
  );
}

export default SearchBar;