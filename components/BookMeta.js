import { Col } from 'react-bootstrap';

const BookMeta = ( props ) => {
  return (
    <Col md="6">
      <div className="BookDetails-Meta">
        <h6 className="BookDetails-Meta__Heading">{props.name}</h6>
        <p className="BookDetails-Meta__Content">{props.value}</p>
      </div>
    </Col>
  );
}

export default BookMeta;