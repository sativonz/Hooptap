let dict = {

    /*	CUSTOMER
     ---------------------------------------------------------------------------------*/

    CUSTOMER: {
        common: {
            password: 'Password',
            rePassword: 'Repeat the password',
            email: 'Email',
            name: 'Username',
            username: 'Name',
            surnames: 'Surnames',
            update: 'Update',
            edit: 'Edit',
            logout: 'Logout',
            login: 'Login',
            register: 'Register',
            empty: 'There are not items to show.',
            city: 'City',
            gender: 'Gender',
            postalCode: 'Postal Code',
            telephone: 'Telephone',
            birthDate: 'Birth date',
            direction: 'Direction',
            male: 'Male',
            female: 'Female',
            select: 'Selection',
            welcome: 'Welcome ',
            menu: 'menu ',
            externalId: 'External ID',
            welcomeMsgForm	: 'Welcome, sign in or register to continue'
        },
        login: {
            title: 'Log in',
            desc: 'Access your account',
            rememberMe: 'Staying in session',
            button: 'GO',
            go				: 'Go to login'
        },
        register: {
            title: 'Register',
            desc: 'Register an account',
            button: 'OK',
            go: 'Go to register'
        },
        reset: {
            title: 'Forgot your password?',
            desc: 'Reset your password account',
            button: 'Restore',
            goLogin: 'Go to login',
            setEmail: 'Set your email'
        },
        activate: {
            title: 'Activation code',
            desc: 'You will receive a code by email to enter and reset your password',
            linkTitle: 'Activate my account',
            goReg: 'Volver al registro',
            button: 'Activar'
        },
        update: {
            title: 'Edit profile',
            actualPassword: 'Actual password',
            newPassword1: 'New password',
            newPassword2: 'Repeat new password',

        }
    },


    /*	Validation
     ---------------------------------------------------------------------------------*/

    'valdr.size': 'Length must be between {{min}} and {{max}}.',
    'valdr.email': 'You must use a valid email account.',
    'valdr.required': 'This field is required.',
    'valdr.generics': {
        name: 'The name',
        email: 'The email',
        password: 'The password',
        terms: 'I accept the terms and conditions'
    },
    'valdr.usernameDuplicated': 'Username already exists. Please, try a different username.',
    'valdr.emailDuplicated': 'Email already exists. Please, use a different email.',

    /*	BADGES
     ---------------------------------------------------------------------------------*/

    BADGES: {
        title: 'Badges',
        tabs: {
            all: 'All',
            available: 'Available',
            finished: 'Finished'
        }
    },

    /*	QUESTS
     ---------------------------------------------------------------------------------*/

    QUESTS: {
        title: 'Quests',
        tabs: {
            all: 'All',
            inscription: 'Inscription',
            signed: 'Signed'
        },
    },

    /*	LEVELS
     ---------------------------------------------------------------------------------*/

    LEVELS: {
        title: 'Level',
        ptitle: 'Levels',
        nextLevelDetails: 'Details next level',
        nextLevel: 'Next level',
        lastLevelMsg: 'This is the last level, congratulations',
        notLevels: 'You do not have any assigned level',
		actualLevel			: 'Actual level',
        list				: 'Score units'
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
        title: 'Score units',
        types: {
            diamonds: 'Diamonds',
            points: 'Points',
            rubys: 'Rubys',
            coins: 'Coins',
            stars: 'Stars'
        }
    },

    /*	RANKINGS
     ---------------------------------------------------------------------------------*/

    RANKING: {
        titleList: 'Ranking',
        titleTotal: 'Total ranking',

    },

    /*	GLOBAL FEED
     ---------------------------------------------------------------------------------*/

    GLOBAL_FEED: {
        title: 'Global feed'
    },

    /*	MARKETPLACE
     ---------------------------------------------------------------------------------*/

    MARKETPLACE: {
        title: 'Marketplace'
    },

    /*	GAMEROOM
     ---------------------------------------------------------------------------------*/

    GAMEROOM: {
        title: 'Gameroom'
    },

    /*	GAMEROOM DETAIL
     ---------------------------------------------------------------------------------*/

    GAMEROOM_DETAIL: {
        title: 'Gameroom detail'
    },

    TOAST: {
        correctRegister: 'Registration succeess',
        incorrect: 'The login data are incorrect',
        duplicated: 'The login data are duplicated',
        badPassword: 'Passwords do not match',
        internalServerError: 'Internal server error',
    }


};

export default dict;