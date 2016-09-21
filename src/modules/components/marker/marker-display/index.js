import template from './template.jade';
import stampit from 'stampit';
import './styles.scss';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Marker display
 * @module Components
 * @description Component for show the badges, score units and level in columns, giving the possibility of being 1, 2, 3 or 4
 * @restrict E
 * @param {Object} options The model to display de marker
 * @element ANY
 */
export default($timeout, $rootScope, BaseModel, _hasScoreUnits, _hasCustomer) => ({
    restrict: 'E',
    scope: {
        options: '=',
        item: '='
    },
    template,
    link: (scope, element, attrs)=> {

        //Default value for marker
        scope.defaultValue = 0;

        //Default imgs
        scope.badgeDefaultImage = function () {
            return require('./images/badge-default.svg')
        };

        scope.suDefaultImage = function () {
            return require('./images/su-default.svg')
        };

        scope.levelDefaultImage = function () {
            return require('./images/level-default.svg')
        };

        //Score unit image default => the same of the score unit associated at level row
        let ScoreUnitModel = stampit().compose(BaseModel, _hasScoreUnits);
        if(scope.item && scope.item.hasOwnProperty('$promise')){
            Q.async(function*(){

                //TODO Coge el primer level de la lista // Siguiente release => poner bien id
                let nextLevel = yield ScoreUnitModel().getLevelById(scope.item.levels[0].nextId);
                scope.nextLevel = nextLevel;
                let suImage = yield ScoreUnitModel().getScoreUnitById(nextLevel.scoreUnitId);
                scope.suImage = suImage;


                //Index levels
                let LevelsIndex = {};
                let allLevelsIndex = ScoreUnitModel().getLevels();


                allLevelsIndex.$promise.then((response)=>{
                    response.map((level)=>LevelsIndex[level.id]=level);
                    scope.LevelsIndex = LevelsIndex;
                   // console.log('LevelsIndex', LevelsIndex);
                });

            })();
        }

        //Calcule level actual to show or disable click
        scope.checkLevelActual = (item)=> {
            if(item.levels.length <= 0){}else {
                if($rootScope.WPF){} else{
                    $rootScope.WPF = {};
                    $rootScope.WPF.viewLevelActual = !$rootScope.WPF.viewLevelActual
                }

            }
        };
    }
});