import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Marker grid score units
 * @module Components
 * @description Component for show the marker of the score units in a grid
 * @restrict E
 * @param {String} name name of the score unit
 * @param {String} quantiy Quantity of the score unit
 * @param {Image} img Image of the score unit
 * @param {Int} numberCols Number of cols to show the score units in the grid
 * @element ANY
 */
export default($timeout) => ({
    restrict: 'E',
    scope: {},
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


        //TODO Fake response
        scope.customer = {
            "scoreUnit": {

                "scoreUnitId1": {
                    "name": "Diamonds",
                    "quantity": 75,
                    "img": "http://icons.iconarchive.com/icons/benzlee/free-christmas/512/diamond-icon.png"
                },
                "scoreUnitId2": {
                    "name": "Coins",
                    "quantity": 11122,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId3": {
                    "name": "Coins",
                    "quantity": 7827,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId4": {
                    "name": "Coins",
                    "quantity": 7852,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId5": {
                    "name": "Diamonds",
                    "quantity": 1500,
                    "img": "http://icons.iconarchive.com/icons/benzlee/free-christmas/512/diamond-icon.png"
                },
                "scoreUnitId6": {
                    "name": "Coins",
                    "quantity": 527,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId7": {
                    "name": "Coins",
                    "quantity": 4245,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId8": {
                    "name": "Coins",
                    "quantity": 785,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId9": {
                    "name": "Coins",
                    "quantity": 369,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId10": {
                    "name": "Coins",
                    "quantity": 1758,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                },
                "scoreUnitId11": {
                    "name": "Coins",
                    "quantity": 225,
                    "img" :"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coin-us-dollar-icon.png"
                }
            },
            "realm": "string",
            "username": "string",
            "credentials": {},
            "challenges": {},
            "email": "string",
            "emailVerified": true,
            "status": "string",
            "created": "2016-06-29",
            "lastUpdated": "2016-06-29",
            "id": "string"
        };

    },
    template,



});