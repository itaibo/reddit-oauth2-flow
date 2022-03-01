module.exports = {
	clientId: process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID,
	clientSecret: process.env.REDDIT_CLIENT_SECRET,
	redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
	tokenDuration: process.env.NEXT_PUBLIC_TOKEN_DURATION || 'temporary',
	tokenScope: process.env.NEXT_PUBLIC_TOKEN_SCOPE || 'identity',
};
