import template from './template.jade';
/**
 * @ngdoc directive
 * @name Badges grid
 * @module Components
 * @description Component for see the badges of the user in a grid
 * @restrict E
 * //TODO revisar params
 * @param {String} title Title of the badge
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
    },
    link: (scope, element, attrs)=>{
        
        //Definir el numero de cols
        scope.numberCols = 4;

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

        
        scope.badges = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "feos",
                "title": "El mas feo",
                "state": true,
                "available": true,
                "finished": true,
                "maxSteps": "5",
                "currentSteps": "2",
                "desc": "Este badge te lo direon por ganar 100.000 pts en el concurso del dia 22/02/16.",
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "577543c881dbc14a04530f75",
                "name": "jugones",
                "state": true,
                "available": true,
                "finished": true,
                "title": "El mas jugon",
                "desc": "",
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": true,
                "finished": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "577e18ac4cc901b712fec731",
                "name": "vicioso",
                "title": "Sin vida social",
                "state": true,
                "available": true,
                "finished": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": false,
                "finished": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": false,
                "finished": false,
                "available": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": true,
                "available": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": false,
                "finished": false,
                "available": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "finished": false,
                "available": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": false,
                "finished": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": false,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": true,
                "finished": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "malos",
                "title": "El mas penoso",
                "state": true,
                "available": true,
                "finished": false,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            }
        ];


    }
});