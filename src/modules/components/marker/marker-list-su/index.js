import template from './template.jade';
import './styles.scss';

export default($timeout) => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=> {

        //TODO Fake response
        scope.customer = {
            "productId": "string",
            "scoreUnit": {

                "scoreUnitId1": {
                    "name": "Diamonds",
                    "quantity": 1000,
                    "img": "http://icons.iconarchive.com/icons/benzlee/free-christmas/512/diamond-icon.png"
                },
                "scoreUnitId2": {
                    "name": "Coins",
                    "quantity": 2000,
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