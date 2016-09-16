let dict = {

	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password		: 'Contraseña',
			rePassword		: 'Repita la contraseña',
			email			: 'Email',
			name			: 'Nombre',
			username		: 'Nombre de usuario',
			surnames		: 'Apellidos',
			update			: 'Actualizar',
			edit			: 'Editar',
			logout			: 'Cerrar sesión',
			login			: 'Acceder',
			register		: 'Registro',
			empty			: 'No hay items que mostrar.',
			city			: 'Ciudad',
			gender			: 'Género',
			postalCode		: 'Código postal',
			telephone		: 'Teléfono',
			birthDate		: 'Fecha de nacimiento',
			direction		: 'Dirección',
			male			: 'Chico',
			female			: 'Chica',
			select			: 'Selecciona',
			welcome			: 'Bienvenido ',
			menu			: 'Menú',
			externalId      : 'ID Externo',
			welcomeMsgForm	: 'Bienvenido, acceda o registrese para continuar'
		},
		login: {
			title			: 'Login',
			desc			: 'Accede a tu cuenta',
			rememberMe		: 'Mantenerme en sesión',
			button			: 'GO',
			go				: 'Ir al login'
		},
		register: {
			title			: 'Registro',
			desc			: 'Registra una cuenta de usuario',
			button			: 'OK',
			go				: 'Ir al registro'
		},
		reset: {
			title			: 'Restaurar contraseña',
			desc			: 'Restaura la contraseña de tu cuenta',
			button			: 'Restaurar',
			goLogin			: 'Volver al login',
			setEmail		: 'Introduzca su email'
		},
		activate: {
			title			: 'Código de activación',
			desc			: 'Recibirá un código por email para introducir y restaurar su contraseña',
			linkTitle		: 'Activar mi cuenta',
			goReg			: 'Volver al registro',
			button			: 'Activar'
		},
		update: {
			title			: 'Editar perfil',
			actualPassword	: 'Contraseña actual',
			newPassword1	: 'Contraseña nueva',
			newPassword2	: 'Repita la contraseña nueva',

		}
	},


	/*	Validation
	 ---------------------------------------------------------------------------------*/

	'valdr.size'			: 'Tiene que medir entre {{min}} y {{max}} carácteres.',
	'valdr.email'			: 'Tienes que introducir una cuenta de email valida.',
	'valdr.nameSize'		: 'Introduzca un nombre de usuario entre {{min}} y {{max}} carácteres.',
	'valdr.required'		: 'Este campo es requerido.',
	'valdr.generics'		: {
		username	: 'El nombre',
		email		: 'El email',
		password	: 'La contraseña',
		rePassword	: 'Repita la contraseña',
		terms		: 'Acepto los términos y condiciones'
	},
	'valdr.usernameDuplicated': 'Este nombre de usuario ya existe. Por favor, use uno distinto.',
	'valdr.emailDuplicated': 'Este email ya existe. Por favor, use uno distinto.',

	/*	BADGES
	 ---------------------------------------------------------------------------------*/

	BADGES: {
		title				: 'Logros',
		tabs:	{
			all				: 'Todos',
			available		: 'Disponibles',
			finished		: 'Completados'
		}
	},

	/*	QUESTS
	 ---------------------------------------------------------------------------------*/

	QUESTS: {
		title				: 'Misiones',
		tabs:	{
			all				: 'Todas',
			inscription		: 'Inscrito',
			signed			: 'Completadas'
		},
	},

	/*	LEVELS
	 ---------------------------------------------------------------------------------*/

	LEVELS: {
		title				: 'Nivel',
		ptitle				: 'Levels',
		nextLevelDetails	: 'Detalles del siguiente nivel',
		nextLevel			: 'Siguiente nivel',
		lastLevelMsg		: 'Este es el último nivel, felicidades',
		notLevels			: 'Aún no tienes ningún nivel asignado',
		actualLevel			: 'Nivel actual'
		// newbie			: 'Nuevo',
		// rookie			: 'Principiante',
		// beginner			: 'Principiante',
		// talented			: 'Talentoso',
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
		title				: 'Unidades de puntuación',
		types: {
			diamonds		: 'Diamantes',
			points			: 'Puntos',
			rubys			: 'Rubys',
			coins			: 'Monedas',
			stars			: 'Estrellas'
		}
	},

	/*	RANKINGS
	 ---------------------------------------------------------------------------------*/

	RANKING: {
			titleList		: 'Ranking',
			titleTotal		: 'Ranking total',

	},

	/*	GLOBAL FEED
	 ---------------------------------------------------------------------------------*/

	GLOBAL_FEED: {
		title				: 'Actividad global'
	},

	/*	MARKETPLACE
	 ---------------------------------------------------------------------------------*/

	MARKETPLACE: {
		title				: 'Marketplace'
	},

	/*	GAMEROOM
	 ---------------------------------------------------------------------------------*/

	GAMEROOM: {
		title				: 'Gameroom'
	},

	/*	GAMEROOM DETAIL
	 ---------------------------------------------------------------------------------*/

	GAMEROOM_DETAIL: {
		title				: 'Gameroom detail'
	},

	TOAST: {
		correctRegister		: 'Registro realizado con éxito',
		incorrect			: 'Los datos de inicio de sesión son incorrectos',
		duplicated			: 'Los datos de inicio de sesión están duplicados',
		badPassword			: 'Las contraseñas no coinciden',
		internalServerError	: 'Error interno del servidor'
	}


};

export default dict;