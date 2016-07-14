
import angular from 'angular-mod';

// Vendor
import 'angular-translate';
import 'angular-cookies';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';

let module = angular.module('app.translations',
	[
		'pascalprecht.translate',
		'ngCookies'
	])
	.config(($translateProvider) => {

		$translateProvider.translations('es-ES', (require('./langs/es-ES').default));
		$translateProvider.translations('en-GB', (require('./langs/en-GB').default));

		$translateProvider.preferredLanguage('es-ES');
		$translateProvider.useLocalStorage();

		$translateProvider.useSanitizeValueStrategy('escape');
	});


export default module.name;