import styles from '../../styles/AuthorizationButton.module.css';

import Config from '../../config';

function buildAuthorizationUrl() {
	return `https://www.reddit.com/api/v1/authorize?client_id=${Config.clientId}&response_type=code
	&redirect_uri=${Config.redirectUri}&duration=${Config.tokenDuration}&scope=${Config.tokenScope}
	&state=1`;
}

export default function AuthorizationButton({ title }) {
	if (!Config.clientId || !Config.redirectUri) {
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
