import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Badges list
 * @module Components
 * @description Component for see the badges of the user in a list
 * @restrict E
 * //TODO revisar params
 * @param {String} title Title of the badge
 * @param {String} desc Description of the badge
 * @param {Image} img Image of the badge
 * @param {Boolean} state State of the badge active/inactive
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=>{

        scope.badges = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "feos",
                "desc": "El mas feo",
                "state": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "577543c881dbc14a04530f75",
                "name": "jugones",
                "state": true,
                "desc": "El mas jugon",
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "desc": "El mas penoso",
                "state": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "577e18ac4cc901b712fec731",
                "name": "vicioso",
                "desc": "Sin vida social",
                "state": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            }
        ];
    },
    template

});