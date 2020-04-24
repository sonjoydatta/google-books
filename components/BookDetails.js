import { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Moment from 'react-moment';

import { isEmpty, truncate, languages } from '../utils';
import BookMeta from '../components/BookMeta';
import BookRating from '../components/BookRating';

const BookDetails = ( props ) => {
  // Default data
  const [book, setBook] = useState({
    name: 'The Lord of the Rings',
    thumbnail: 'https://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72-xREe8i4Gv9fkzg4GfGO1tE_FWEhm0p1pWaJz5ORSB0GimFuc19JGGmpCWBtKK5QVFuF1K_JlU23MdaO_toyyoyFqnmJ-g13nmDNmv7VB3fLO89Yrwix399EDtTG_aPEVhACF&source=gbs_api',
    rating: 4.5,
    count: 67,
    publishedYear: '2012-02-15',
    authors: [ 'J.R.R. Tolkien' ],
    pageNumber: 1216,
    category: 'Fiction / Fantasy / Epic',
    language: 'en',
    description: 'A PBS Great American Read Top 100 Pick One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the...',
    pdfDownload: 'http://books.google.com/books/download/The_Lord_of_the_Rings-sample-pdf.acsm?id=yl4dILkcqm4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    webPreview: 'http://play.google.com/books/reader?id=yl4dILkcqm4C&hl=&printsec=frontcover&source=gbs_api'
  });

  // Update state with new data
  useEffect(() => {
    if (!isEmpty(props.data)) {
      const { volumeInfo, accessInfo } = props.data;

      setBook({
        name: volumeInfo.title,
        thumbnail: volumeInfo.imageLinks.thumbnail,
        rating: volumeInfo.averageRating,
        count: volumeInfo.ratingsCount,
        publishedYear: volumeInfo.publishedDate,
        authors: volumeInfo.authors,
        pageNumber: volumeInfo.pageCount,
        category: volumeInfo.categories,
        language: volumeInfo.language,
        description: volumeInfo.description,
        pdfDownload: accessInfo.pdf.isAvailable ? accessInfo.pdf.acsTokenLink : '',
        webPreview: accessInfo.webReaderLink
      })
    }
  }, [props.data]);

  const { name, thumbnail, rating, count, publishedYear, authors, pageNumber, category, language, description, pdfDownload, webPreview } = book;
  
  return (
    <div className="BookDetails">
      <Row>
        <Col md="3">
          <Image src={thumbnail !== '' ? thumbnail : '/static/empty-cover.jpeg'} thumbnail />
          <BookRating rating={rating} count={count} />
        </Col>
        <Col md="9">
          <h1 className="BookDetails-Heading">
            {name}
            {
              publishedYear !== '' && publishedYear !== undefined && 
                <span> – <Moment date={new Date(publishedYear)} format="YYYY" /></span>
            }
          </h1>
          <Row>
            {
              authors.length > 0 &&
                <BookMeta name="Author" value={authors.join(', ')} />
            }
            {
              pageNumber > 0 && pageNumber !== undefined &&
                <BookMeta name="Page number" value={pageNumber} />
            }
            {
              category !== '' && category !== undefined &&
                <BookMeta name="Category" value={category} />
            }
            {
              language !== '' && language !== undefined &&
                <BookMeta name="Language" value={languages.filter(item => { return item.code === language })[0].name} />
            }
          </Row>
          {
            description !== '' && description !== undefined &&
              <p 
                className="BookDetails-Desc"
                dangerouslySetInnerHTML={{ __html: truncate(description, 500) }}
              />
          }
          {
            webPreview !== '' &&
              <a 
                target="_blink"
                href={webPreview}
                className="btn btn-success mr-3"
              >Read Now</a>
          }
          {
            pdfDownload !== '' &&
              <a 
                href={pdfDownload}
                className="btn btn-danger"
              >Download PDF</a>
          }
        </Col>
      </Row>
    </div>
  );
}

export default BookDetails;