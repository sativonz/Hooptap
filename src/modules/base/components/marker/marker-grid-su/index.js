import template from './template.jade';
import './styles.scss';

export default($timeout) => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=> {

        //Definir el numero de cols
        scope.numberCols = 4;
        scope.colWidth = 12/ scope.numberCols;


        //TODO Fake response
        scope.customer = {
            "productId": "string",
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