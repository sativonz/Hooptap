let dict = {

	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password			: 'Contraseña',
		},
		login: {
			title			: 'Login',
			desc			: 'Accede a tu cuenta'
		},
		register: {
			title			: 'Registro',
			desc			: 'Registra una cuenta de usuario'
		},
		reset: {
			title			: 'Restaurar contraseña',
			desc			: 'Restaura la contraseña de tu cuenta',
			goLogin			: 'Volver al login',
			setEmail		: 'Introduzca tu email'
		}
	},


	/*	Validation
	 ---------------------------------------------------------------------------------*/

	'valdr.size'			: '{{fieldName}} tiene que medir entre {{min}} y {{max}} carácteres.',
	'valdr.email'			: 'Tienes que introducir una cuenta de email valida.',
	'valdr.nameSize'		: 'Introduzca un nombre de usuario entre {{min}} y {{max}} carácteres.',
	'valdr.required'		: 'Este campo es requerido.',
	'valdr.generics'		: {
		name	: 'El nombre',
		email	: 'El email',
		password: 'La contraseña',
		terms	: 'Acepto los términos y condiciones'
	}


};

export default dict;