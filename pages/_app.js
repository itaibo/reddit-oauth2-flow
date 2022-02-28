import Head from 'next/head';
import Link from 'next/link';

import '../styles/globals.css';
import styles from '../styles/App.module.css';

function App({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Reddit OAuth2 Flow</title>
				<meta name='viewport' content='width=device-width, user-scalable=no' />
			</Head>

			<div className={styles.box}>
				<div className={styles.header}>
					<Link href='/' passHref>
						<div className={styles.logo}></div>
					</Link>
					
				</div>

				<Component {...pageProps} />
			</div>

			<div className={styles.footer}>
				<a href='https://github.com/itaibo/reddit-oauth2-flow'>@itaibo/reddit-oauth2-flow</a>
			</div>
		</div>
	);
}

export default App;
