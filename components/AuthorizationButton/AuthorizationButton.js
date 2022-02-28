import styles from '../../styles/AuthorizationButton.module.css';

const buttonConfig = {
	clientId: process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID,
	redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
	tokenDuration: process.env.NEXT_PUBLIC_TOKEN_DURATION || 'temporary',
	tokenScope: process.env.NEXT_PUBLIC_TOKEN_SCOPE || 'identity',
};

function buildAuthorizationUrl() {
	return `https://www.reddit.com/api/v1/authorize?client_id=${buttonConfig.clientId}&response_type=code
	&redirect_uri=${buttonConfig.redirectUri}&duration=${buttonConfig.tokenDuration}&scope=${buttonConfig.tokenScope}`;
}

export default function AuthorizationButton({ title }) {
	if (!buttonConfig.clientId || !buttonConfig.redirectUri) {
		return (
			<div className={styles.error}>
				Missing environment variables (check NEXT_PUBLIC_REDDIT_CLIENT_ID and NEXT_PUBLIC_REDIRECT_URI)
			</div>
		);
	}

	return (
		<a className={styles.buttonLink} href={buildAuthorizationUrl()}>
			<div className={styles.button}>
				{title}
			</div>
		</a>
	);
}
