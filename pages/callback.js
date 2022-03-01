import axios from 'axios';

import Config from '../config';

import styles from '../styles/Callback.module.css';

export default function Callback({ error, token }) {
	if (error) {
		return (
			<div className={styles.error}>
				{error}
			</div>
		);
	}

	return (
		<div>
			<div className={styles.information}>
				This is your Reddit token. Do not share
				the token with untrusted apps/people
			</div>


			<div className={styles.tokenWrapper}>
				<div className={styles.token}>
					{token}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	// Check if everything is configured
	if (!Config.clientId || !Config.clientSecret || !Config.redirectUri) {
		return {
			props: {
				error: 'Missing environment variables (check NEXT_PUBLIC_REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, and NEXT_PUBLIC_REDIRECT_URI) ',
			},
		};
	}

	// Get variables
	const code = query.code;
	const error = query.error;

	// Check for errors
	if (!code || error) {
		const errorMessage = 'Authorization failed' + (error ? ' - ' + error : '');

		return {
			props: {
				error: errorMessage,
			},
		};
	}

	// Get token
	let request;
	try {
		request = await axios.post(
			'https://www.reddit.com/api/v1/access_token',
			`grant_type=authorization_code&code=${code}&redirect_uri=${Config.redirectUri}`,
			{
				auth: {
					username: Config.clientId,
					password: Config.clientSecret,
				},
			},
		);
	} catch (e) {
		console.error('/access_token request failed');
	}

	// Check if token was returned
	if (!request || !request.data || !request.data.access_token) {
		return {
			props: {
				error: 'Could not validate code',
			},
		};
	}

	// Return token
	return {
		props: {
			token: request.data.access_token,
		},
	};
}
