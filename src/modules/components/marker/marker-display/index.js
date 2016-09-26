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
export default($timeout, $rootScope, $filter, BaseModel, _hasScoreUnits, _hasCustomer) => ({
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

        //Filter su marker
        scope.suQuantity = $filter('numberFilter')(scope.item.scoreUnitInstances[0].quantity);

        //Score unit image default => the same of the score unit associated at level row
        let ScoreUnitModel = stampit().compose(BaseModel, _hasScoreUnits);
        if(scope.item && scope.item.hasOwnProperty('$promise')){
            Q.async(function*(){

                //TODO Coge el primer level de la lista // Siguiente release => poner bien id
                let nextLevel = yield ScoreUnitModel().getLevelById(scope.item.levels[0].nextId);
                scope.nextLevel = nextLevel;
                let nextLevelImage = yield ScoreUnitModel().getScoreUnitById(nextLevel.scoreUnitId);
                scope.nextLevelImage = nextLevelImage;
                let defaultScoreUnit = yield ScoreUnitModel().getScoreUnitById(scope.item.scoreUnitInstances[0].scoreUnitId);
                scope.defaultScoreUnit = defaultScoreUnit;



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
            if(item.levels.length > 0){
                if($rootScope.WPF){
                    $rootScope.WPF.viewlevelActualHome = !$rootScope.WPF.viewlevelActualHome;
                } else{
                    $rootScope.WPF = {};
                    $rootScope.WPF.viewlevelActualHome = !$rootScope.WPF.viewlevelActualHome;
                }
            }
        };

        //console.log(scope.item);
    }
});