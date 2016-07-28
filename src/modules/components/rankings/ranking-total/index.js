import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Ranking total
 * @module Components
 * @description Component for see the total ranking
 * @restrict E
 * //TODO revisar params
 * @param {String} title Title of the ranking
 * @param {String} rankingType Type of the ranking
 * @param {Image} img Image of the ranking
 * @element ANY
 */
export default($rootScope) => ({
    restrict: 'E',
    template,
    scope: {
    },
    link: (scope, element, attrs)=>{

        //init
        scope.showDetailView = false;
        //Methods
        scope.$root.toggleDetailView = (item)=>{
            //Para cambiar de header
            scope.$root.showMainHeader = !scope.$root.showMainHeader;
            //Para la vista de detalle
            scope.showDetailView  = !scope.showDetailView;
            if(item){
                scope.$root.rankingSelected = item;
            }

        };

        scope.allRankings = {
            "ranking1": {
                "name": "Ranking de diamantes",
                "rankingType": "diamond",
                "showProfileImg": true,
                "img": "http://es.seaicons.com/wp-content/uploads/2016/03/diamond-icon.png",
            },
            "ranking2": {
                "name": "Ranking de puntos",
                "rankingType": "diamond",
                "showProfileImg": true,
                "img": "http://vignette3.wikia.nocookie.net/battlefield/images/6/64/R048.png/revision/latest?cb=20100719191739",
            },
            "ranking3": {
                "name": "Ranking de estrellas",
                "rankingType": "diamond",
                "showProfileImg": true,
                "img": "http://findicons.com/files/icons/719/crystal_clear_actions/128/bookmark_256.png",
            },
            "ranking4": {
                "name": "Ranking de rubys",
                "rankingType": "diamond",
                "showProfileImg": true,
                "img": "http://www.file-extensions.org/imgs/app-icon/128/3544/ruby-icon.png",
            },
        }

    }

});