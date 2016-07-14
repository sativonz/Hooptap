let dict = {


	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password			: 'Password',
		},
		login: {
			title			: 'Log in',
			desc			: 'Access your account'
		},
		register: {
			title			: 'Register',
			desc			: 'Register an account'
		},
		reset: {
			title			: 'Reset password',
			desc			: 'Reset your password account',
			goLogin			: 'Go to login',
			setEmail		: 'Set your email'
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
	}



};

export default dict;