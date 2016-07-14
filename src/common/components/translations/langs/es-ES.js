let dict = {

	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password		: 'Contraseña',
			email			: 'Email',
			name			: 'Nombre de usuario',
		},
		login: {
			title			: 'Login',
			desc			: 'Accede a tu cuenta',
			button			: 'GO'
		},
		register: {
			title			: 'Registro',
			desc			: 'Registra una cuenta de usuario',
			button			: 'OK'
		},
		reset: {
			title			: 'Restaurar contraseña',
			desc			: 'Restaura la contraseña de tu cuenta',
			button			: 'Restaurar',
			goLogin			: 'Volver al login',
			setEmail		: 'Introduzca tu email'
		},
		activate: {
			title			: 'Código de activación',
			desc			: 'Recibirá un código por email para introducir y restaurar su contraseña',
			linkTitle		: 'Activar mi cuenta',
			goReg			: 'Volver al registro',
			button			: 'Activar'
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