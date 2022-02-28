import styles from '../styles/Callback.module.css';

export default function Callback() {
	return (
		<div>
			<div className={styles.information}>
				This is your Reddit token. Do not share
				the token with untrusted apps/people
			</div>


			<div className={styles.tokenWrapper}>
				<div className={styles.token}>
					-OHlj8xqGwX(sample)a7v8HJ8HsfA
				</div>
			</div>
		</div>
	);
}
