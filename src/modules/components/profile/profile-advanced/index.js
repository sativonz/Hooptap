import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile advanced
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe/mockup
 * @description Component for advanced profile, where it is displayed the name, username, email, gender, email verified, profile image, level actual, points for next level
 * list of badges
 * @restrict E
 * @param {String} name name of actual user
 * @param {String} username username of actual user
 * @param {String} email email of actual user
 * @param {image} imagegender Image boolean for the gender of actual user
 * @param {image} emailverified Image boolean for verifieds mails
 * @param {image} image Profile image
 * @param {String} points Point of actual level
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @param {Int} id Identification number of the current user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        id: '@',
        image: '@',
        imageVerified: '@',
        imageGender: '@',
        points: '@',
        dynamic: '=',
        type: '=',

    },
    transclude: true,
    link: (scope, element, attrs)=> {
        //Definir el numero de cols
        scope.numberCols = 3;

        switch (scope.numberCols) {
            case 2:
                scope.colWidth = 6;
                break;
            case 3:
                scope.colWidth = 4;
                break;
            case 5:
                scope.htCol5 = "width: 20%;float:left;padding-right:10px;padding-left:10px;";
                break;
            case 6:
                scope.colWidth = 2;
                break;
            case 4:
            default:
                scope.colWidth = 3;
                break;
        }

        //Definir el numero de badges totales
        scope.numberBadges = new Array(6);


    },
    template

});