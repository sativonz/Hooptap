import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Game room detail
 * @module Components
 * @description Component to show the detail view of your custom games
 * @restrict E
 * @param {Boolean} showTitle Whether or not display the title of the game detail
 * @param {Boolean} showDesc Whether or not display the description of the game detail
 * @param {Integer} numberCols Number of columns for display in grid
 * @element ANY
 */
export default($timeout, $uibModal, $log, clientHelper) => ({
    restrict: 'E',
    template,
    scope: {
        showTitle: '=?',
        showDesc: '=?',
        numberCols: '=?'
    },
    link: (scope, element, attrs)=> {

        //Wrapper game
        scope.openWrapperGame = function (size) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                template: '<p>Wrapper game</p>',
                controller: 'htWidgetCtrl',
                size: size,
            });
        };

        let defaults = {
            showTitle: true,
            showDesc: true,
            numberCols: 3
        };

        clientHelper.setDefaultAttributes(defaults, scope, attrs);

        scope.defaultImage = require("./images/default-icon.png");

        scope.gameromDetail = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
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