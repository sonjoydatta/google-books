import Head from 'next/head';

import Footer from './Footer';

const Layout = ( props ) => {
  return (
    <div className="PageWrapper">
      <Head>
        <title>Read Favourite Book | Sonjoy Datta - Powered by Google</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <a href="https://github.com/sonjoydatta/google-books">
        <img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" alt="Fork me on GitHub" />
      </a>
      
      <main className="Main">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;