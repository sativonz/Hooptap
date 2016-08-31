import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Marker display
 * @module Components
 * @description Component for show the badges, score units and level in columns, giving the possibility of being 1, 2, 3 or 4
 * @restrict E
 * @param {Object} options The model to display de marker
 * @element ANY
 */
export default($timeout, $rootScope) => ({
    restrict: 'E',
    scope: {
        options: '='
    },
    template,
    link: (scope, element, attrs)=> {

        scope.defaultValue = 0;

        scope.badgeDefaultImage = function () {
            return require('./images/badge-default.png')
        };

        scope.suDefaultImage = function () {
            return require('./images/su-default.png')
        };

    }
});