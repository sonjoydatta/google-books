import { Fragment, useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import { DebounceInput } from 'react-debounce-input';
import fetch from 'isomorphic-unfetch';

import BookDetails from '../components/BookDetails';
import Footer from '../components/Footer';

const Homepage = () => {
  const [search, setSearch] = useState({
    keyword: '',
    results: [],
    targetResult: {}
  });

  // Debounce Search
  const searchHandler = ( e ) => {
    const searchKeyword = e.target.value;

    if (searchKeyword) {
      fetch(`${process.env.API_URL}/volumes?q=${searchKeyword}`)
        .then( res => res.json() )
        .then( data => {
          setSearch({ 
            keyword: searchKeyword,
            results: data.items,
            targetResult: {}
          });
        });
    } else {
      setSearch({ results: [] });
    }
  }

  // Set target item
  const searchTargetHandler = ( id ) => {
    const { results } = search;
    const target = results.filter(item => { return item.id === id })[0];
    
    setSearch({
      keyword: '',
      results: [],
      targetResult: target
    });
  }

  const { keyword, results, targetResult } = search;
  
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
                  <div className="PrimarySearch">
                    <DebounceInput
                      minLength={3}
                      debounceTimeout={300}
                      value={keyword}
                      className="form-control"
                      placeholder="Search for a book..."
                      onChange={searchHandler} 
                    />
                    {
                      results.length > 0 &&
                        <ul className="PrimarySearch-Result shadow-sm">
                          {
                            results.map(result => (
                              <li 
                                key={result.id}
                                onClick={() => searchTargetHandler(result.id)}
                              >{result.volumeInfo.title}</li>
                            ))
                          }
                        </ul>
                    }
                  </div>
                  <BookDetails data={targetResult} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Homepage;