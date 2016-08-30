import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Game room
 * @module Components
 * @description Component to show your custom games
 * @restrict E
 * @param {Boolean} showTitle Whether or not display the title of the game
 * @param {Boolean} showDesc Whether or not display the description of the game
 * @param {Integer} numberCols Number of columns for display in grid
 * @element ANY
 */
export default($timeout, clientHelper) => ({
    restrict: 'E',
    template,
    scope: {
        showTitle: '=?',
        showDesc: '=?',
        numberCols: '=?'
    },
    link: (scope, element, attrs)=> {

        let defaults = {
            showTitle: true,
            showDesc: true,
            numberCols: 3
        };

        clientHelper.setDefaultAttributes(defaults, scope, attrs);

        scope.defaultImage = require("./images/default-icon.png");

        scope.gameroom = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Colin McRae",
                "title": "Colin McRae",
                "desc": "Campeonato WRC",
                "customImage": "http://www.cochesgt.com/wp-content/uploads/2015/09/Subaru-Impreza-Colin-McRae-2-750x400.jpg",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            }
        ];
    }
});