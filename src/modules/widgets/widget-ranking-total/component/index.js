import template from './template.jade';
import Q from 'q';;
/**
 * @ngdoc directive
 * @name Widget ranking total
 * @module Components
 * @description Component for widget ranking, where it is displayed the username, image of the user, position in the rank and score.
 * @restrict E
 * @param {String} username Username of actual user
 * @param {image} image Profile image
 * @param {Boolean} position Position in the rank
 * @param {Boolean} score Score of the user in the rank
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        idWidget: '=',
        showProfileImg: '=',
    },
    link: (scope, element, attrs)=>{
        //TODO hacer cuando este claro
    },
});