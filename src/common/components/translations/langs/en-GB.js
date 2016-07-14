let dict = {


	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password		: 'Password',
			email			: 'Email',
			name			: 'Username',
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