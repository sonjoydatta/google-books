import { Fragment } from 'react';
import Head from 'next/head';

import FooterCredit from './FooterCredit';

const Layout = ( props ) => {
  return (
    <Fragment>
      <Head>
        <title>Read Favourite Book | Sonjoy Datta - Powered by Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="PageWrapper">
          <div className="PageWrapper-Overly">
            {props.children}
            <FooterCredit />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Layout;