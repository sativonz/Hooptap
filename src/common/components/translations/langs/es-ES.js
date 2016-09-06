let dict = {

	/*	CUSTOMER
	 ---------------------------------------------------------------------------------*/

	CUSTOMER: {
		common: {
			password		: 'Contraseña',
			email			: 'Email',
			name			: 'Nombre',
			username		: 'Nombre de usuario',
			update			: 'Actualizar',
			edit			: 'Editar',
			logout			: 'Cerrar sesión',
			login			: 'Acceder',
			register		: 'Registro',
		},
		login: {
			title			: 'Login',
			desc			: 'Accede a tu cuenta',
			rememberMe		: 'Mantenerme en sesión',
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

	'valdr.size'			: '{{fieldName}} tiene que medir entre {{min}} y {{max}} carácteres.',
	'valdr.email'			: 'Tienes que introducir una cuenta de email valida.',
	'valdr.nameSize'		: 'Introduzca un nombre de usuario entre {{min}} y {{max}} carácteres.',
	'valdr.required'		: 'Este campo es requerido.',
	'valdr.generics'		: {
		name	: 'El nombre',
		email	: 'El email',
		password: 'La contraseña',
		terms	: 'Acepto los términos y condiciones'
	},

	/*	BADGES
	 ---------------------------------------------------------------------------------*/

	BADGES: {
		title				: 'Logros',
		empty				: 'No hay logros que mostrar.',
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
		notLevels			: 'Aún no tienes ningún nivel asignado'
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
	}


};

export default dict;