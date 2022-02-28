import styles from '../styles/Home.module.css';

import AuthorizationButton from '../components/AuthorizationButton/AuthorizationButton';

export default function Home() {
	return (
		<div>
			<div className={styles.information}>
				You are about to create a Reddit token. Do not share
				the token with untrusted apps/people
			</div>
			
			<div className={styles.buttonWrapper}>
				<AuthorizationButton title='Create Reddit token' />
			</div>
		</div>
	);
}
