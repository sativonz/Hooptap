let dict = {
	
	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password		: 'Password',
			email			: 'Email',
			name			: 'Username',
			username		: 'Name',
			update			: 'Update',
			edit			: 'Edit',
			logout			: 'Logout',
			login			: 'Login',
			register		: 'Register',
		},
		login: {
			title			: 'Log in',
			desc			: 'Access your account',
			button			: 'GO'
		},
		register: {
			title			: 'Register',
			desc			: 'Register an account',
			button			: 'OK'
		},
		reset: {
			title			: 'Forgot your password?',
			desc			: 'Reset your password account',
			button			: 'Restore',
			goLogin			: 'Go to login',
			setEmail		: 'Set your email'
		},
		activate: {
			title			: 'Activation code',
			desc			: 'You will receive a code by email to enter and reset your password',
			linkTitle		: 'Activate my account',
			goReg			: 'Volver al registro',
			button			: 'Activar'
		},
		update: {
			title			: 'Edit profile',
			actualPassword	: 'Actual password',
			newPassword1	: 'New password',
			newPassword2	: 'Repeat new password',

		}
	},
	
	
	/*	Validation
	 ---------------------------------------------------------------------------------*/

	'valdr.size'			: '{{fieldName}} length must be between {{min}} and {{max}}.',
	'valdr.email'			: 'You must use a valid email account.',
	'valdr.required'		: 'This field is required.',
	'valdr.generics'		: {
		name	: 'The name',
		email	: 'The email',
		password: 'The password',
		terms	: 'I accept the terms and conditions'
	},

	/*	BADGES
	 ---------------------------------------------------------------------------------*/

	BADGES: {
		title				: 'Badges',
	},

	/*	QUESTS
	 ---------------------------------------------------------------------------------*/

	QUESTS: {
		title				: 'Quests',
	},

	/*	LEVELS
	 ---------------------------------------------------------------------------------*/

	LEVELS: {
		title				: 'Level',
		ptitle				: 'Levels',
		nextLevelDetails	: 'Details next level',
		nextLevel			: 'Next level'
		// newbie			: 'Newbie',
		// rookie			: 'Rookie',
		// beginner			: 'Beginner',
		// talented			: 'Talented',
		// skilled			: 'Skilled',
		// intermediate		: 'Intermediate',
		// skillful			: 'Skillful',
		// advanced			: 'Advanced',
		// senior			: 'Senior',
		// expert			: 'Expert'
	},

	/*	SCORE UNITS
	 ---------------------------------------------------------------------------------*/

	SCOREUNITS: {
		title				: 'Score units',
		types: {
			diamonds		: 'Diamonds',
			points			: 'Points',
			rubys			: 'Rubys',
			coins			: 'Coins',
			stars			: 'Stars'
		}
	},

	/*	RANKINGS
	 ---------------------------------------------------------------------------------*/

	RANKING: {
		titleList			: 'Ranking',
		titleTotal			: 'Total ranking',

	},

	/*	GLOBAL FEED
	 ---------------------------------------------------------------------------------*/

	GLOBAL_FEED: {
		title				: 'Global feed'
	},

	/*	MARKETPLACE
	 ---------------------------------------------------------------------------------*/

	MARKETPLACE: {
		title				: 'Marketplace'
	}




};

export default dict;