export const oktaAuthConfig = {
	oidc: {
		clientId: '0oadmjuumCbjz1qrJ4x6',
		issuer: "https://weldnorthed.okta.com/oauth2/ausjpz06gYidHbvsU4x6",
		redirectUri: window.location.origin + '/implicit/callback',
		scopes: ['openid', 'profile', 'email', 'groups'],
		pkce: false,
		disableHttpsCheck: false,
		tokenManager: {
			autoRenew: true,
			expireEarlySeconds: 600
		},
		resourceServer: {
			messagesUrl: 'http://localhost:3000/api/messages',
		}
	}

};
