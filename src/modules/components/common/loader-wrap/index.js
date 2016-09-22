/**
 * Hides the content until value setted to true
 */


import controller from './controller';
import template from './template.jade';

export default () =>({
	restrict: 'E',
	transclude: true,
	template,
	controller,
	scope : {
		value 	: '='
	}
})