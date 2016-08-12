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
export default($timeout, $uibModal, $log) => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
    },
    link: (scope, element, attrs)=>{

        //Detail view
        scope.badgeDetail = function (item) {

            //$('body').append("<p class='text'>Hola</p>");

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                appendTo: angular.element('c-badges-grid'),

                template: '<p>{{item}}</p>',
                controller: ['$scope','item', ($scope, item)=>{
                    $scope.item = item;
                }],
                resolve: {
                  item: ()=> {return item}
                },
                size: 'sm',
            });

        };

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
                "name": "Helmet",
                "title": "Helmet",
                "state": true,
                "available": true,
                "finished": false,
                "parts": "3",
                "currentStep": "2",
                "desc": "Este badge te lo direon por ganar 100.000 pts en el concurso del dia 22/02/16.",
                "img" :  "https://freeiconshop.com/files/edd/badge-flat.png",
            },
            {
                "id": "577543c881dbc14a04530f75",
                "name": "Crown",
                "state": true,
                "available": true,
                "finished": false,
                "parts": "5",
                "currentStep": "1",
                "title": "Crown",
                "desc": "",
                "img" :  "https://pixabay.com/static/uploads/photo/2015/12/15/09/31/badge-1093965_960_720.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Axe",
                "title": "Axe",
                "parts": "4",
                "currentStep": "3",
                "state": true,
                "available": true,
                "finished": false,
                "desc": "Este badge te lo direon por ganar 50.000 pts",
                "img" :  "http://www.risehackathon.com/img/membership.png",
            },
            {
                "id": "577e18ac4cc901b712fec731",
                "name": "Sword",
                "title": "Sword",
                "parts": "3",
                "currentStep": "1",
                "state": true,
                "available": true,
                "finished": false,
                "img" :  "http://www.iconarchive.com/download/i99054/stevelianardo/free-christmas-flat/christmas-star.ico",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Castle",
                "parts": "4",
                "currentStep": "4",
                "title": "Castle",
                "state": true,
                "available": false,
                "finished": true,
                "img" :  "http://i.istockimg.com/file_thumbview_approve/43707798/3/stock-illustration-43707798-flat-police-badge-icon.jpg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": false,
                "finished": false,
                "available": false,
                "img" :  "http://ketal.es/wp-content/uploads/2016/06/badge-simple-flat.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Pawnn",
                "title": "Pawnn",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://i.istockimg.com/file_thumbview_approve/78380927/6/stock-illustration-78380927-laboratory-glass-beaker-vector-flat-style-icon-on-round-badge.jpg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "https://cdn0.iconfinder.com/data/icons/web-development-2/512/laboratory_flask_beaker_lab_chemistry_potion_glassware_chemical_experiment_bottle_science_glass_education_flat_design_icon-512.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": true,
                "finished": false,
                "available": false,
                "img" :  "https://cdn3.iconfinder.com/data/icons/round-flat-black-vol-1/100/Round_Achievement_Black_Win_Cup_Prize_Goal-512.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://2.bp.blogspot.com/-7O-FzIvAeU0/UGyhd1win8I/AAAAAAAACD0/ttSPv-zoapY/s1600/trophy.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": false,
                "img" :  "https://cdn1.iconfinder.com/data/icons/web-design-and-development-2-2/512/58-512.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": false,
                "finished": false,
                "available": false,
                "img" :  "https://cdn4.iconfinder.com/data/icons/we-re-the-best/512/best-badge-star-medal-game-win-winner-gamification-first-award-acknowledge-acknowledgement-prize-victory-reward-cup-conquest-premium-rank-ranking-gold-hero-star-quality-challenge-trophy-victory-success-512.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6b27p-TR4Foo-X0eWI1mesPrTqgHt_3H0oF3ct4SE-LhgAYcg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": true,
                "finished": false,
                "available": true,
                "img" :  "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": false,
                "img" :  "https://cdn0.iconfinder.com/data/icons/gamification-flat-awards-and-badges/500/star13-512.png",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": true,
                "available": false,
                "finished": false,
                "img" :  "https://cdn4.iconfinder.com/data/icons/business-conceptual-part3/513/star-employee-512.png",
            }
        ];


    }
});