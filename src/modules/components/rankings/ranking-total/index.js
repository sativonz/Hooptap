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


        scope.rankings = [
            {desc: 'Ranking mensual', rankingType:'monthly', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Los mas jugones', rankingType:'jugones', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Ranking semanal', rankingType:'weekly', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Los mas malos', rankingType:'malos', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Ranking diario', rankingType:'daily', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Histórico', rankingType:'historicco', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Histórico', rankingType:'historicco', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Histórico', rankingType:'historicco', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Histórico', rankingType:'historicco', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'Histórico', rankingType:'historicco', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},

        ];
    },
    template

});