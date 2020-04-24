import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';

import { SearchBar, BookDetails, FooterCredit } from '../components';

const Homepage = () => {
  const [treatise, setTreatise] = useState({
    keyword: '',
    items: [],
    item: {}
  });

  // Get popular treatise
  useEffect(() => {
    fetch(`${process.env.API_URL}/volumes/yl4dILkcqm4C`)
      .then( res => res.json() )
      .then( data => {
        setTreatise({ 
          ...treatise,
          item: data
        });
      })
      .catch( (err) => console.log(err) );
  }, []);

  // Search treatise by keyword
  const searchHandler = ( e ) => {
    const keyword = e.target.value;

    if (keyword) {
      fetch(`${process.env.API_URL}/volumes?q=${keyword}`)
        .then( res => res.json() )
        .then( data => {
          if (data.totalItems > 0) {
            setTreatise({ 
              ...treatise,
              keyword: keyword,
              items: data.items
            });
          }
        })
        .catch( (err) => console.log(err) );
    } else {
      setTreatise({ 
        ...treatise,
        items: [] 
      });
    }
  }

  // Get specific treatise
  const getTreatiseHandler = ( id ) => {
    const { items } = treatise;
    const targetItem = items.filter(item => { return item.id === id })[0];
    
    setTreatise({
      keyword: '',
      items: [],
      item: targetItem
    });
  }

  const { keyword, items, item } = treatise;
  
  return (
    <Fragment>
      <Head>
        <title>Google Books Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="PageWrapper">
          <div className="PageWrapper-Overly">
            <Container>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <SearchBar
                    value={keyword}
                    data={items}
                    changeHandler={searchHandler}
                    clickHandler={getTreatiseHandler}
                  />
                  <BookDetails data={item} />
                  <FooterCredit />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Homepage;