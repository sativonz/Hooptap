 import template from './template.jade';
 import './styles.scss';
 /**
 * @ngdoc directive
 * @name Profile full
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe/mockup
 * @description Component for full profile, where it is displayed the profile image, name, lasts names, email, birth date, telephone, gender, direction,
 * country, postal code, custom fields and badges, points, current level, goods, prizes and current activity.
 * @restrict E
 * @param {String} name => name of actual user
 * @param {String} username => username of actual user
 * @param {String} email => email of actual user
 * @param {image} imagegender => Image boolean for the gender of actual user
 * @param {image} emailverified => Image boolean for verifieds mails
 * @param {image} image => Profile image
 * @param {String} points => Point of actual level
 * @param {String} type => Name of the state in which the user is at the current level
 * @param {Int} dynamic => The numerical value of 200, of the user's progress at the current level
 * @param {Int} id => Identification number of the current user
 * @param {String} direction => Name of the address of actual user
 * @param {String} country => Name of the country of actual user
 * @param {String} city => Name of the city of actual user
 * @param {String} postalCode => Name of the postal code of actual user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        name: '@',
        username: '@',
        email: '@',
        id: '@',
        image: '@',
        imageverified: '@',
        imagegender: '@',
        points: '@',
        dynamic: '=',
        type: '=',
        direction: '@',
        country: '@',
        city: '@',
        postalCode: '@',

    },
    transclude: true,
    link: (scope, element, attrs)=> {

        //Definir el numero de cols
        scope.numberCols = 3;
        scope.colWidth = 12/ scope.numberCols;

        //Definir el numero de badges en cada columna
        scope.numberBadges = new Array(6);
        
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
                },
                "scoreUnitId3": {
                    "name": "Rubys",
                    "quantity": 350,
                    "img" :"https://cdn.codementor.io/assets/topic/category_header/ruby-on-rails-bc9ab2af8d92eb4e7eb3211d548a09ad.png"
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
    template

});