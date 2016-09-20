import template from './template.jade';
import stampit from 'stampit';
import './styles.scss';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Marker list score units
 * @module Components
 * @description Component for show the marker of the score units in a list
 * @restrict E
 * @param {Object} item Object with full information of the customer
 * @element ANY
 */
export default(BaseModel, _hasScoreUnits, $rootScope, Customer) => ({
    restrict: 'E',
    scope: {
        item: '='
    },
    template,
    link: (scope, element, attrs)=> {
        let ScoreUnitsModel = stampit().compose(BaseModel, _hasScoreUnits, _hasScoreUnits)(scope.item);

        //Index score units
        let ScoreUnitsIndex = {};


        scope.levelActual = (su)=> {
            let filter ={filter:{"where":{"customerId": ScoreUnitsModel.id, "scoreUnitId":su.id}, "include":["level", "scoreUnit"]}};
            ScoreUnitsModel.getScoreUnitInstances(filter).$promise.then((item)=>{
                $rootScope.$broadcast("$viewLevel", item);
            });
        };



        //Get scoreUnits list
        Q.async(function*() {
            let scoreUnits = yield ScoreUnitsModel.getScoreUnits().$promise;
            scoreUnits.map((su)=> {
                ScoreUnitsIndex[su.id] = {
                    id: su.id,
                    name: su.name,
                    image: su.image
                };
            });
            
            scope.item.scoreUnitInstances.map((su)=> {
                if (ScoreUnitsIndex.hasOwnProperty(su.scoreUnit.id)) {

                    ScoreUnitsIndex[su.scoreUnit.id]['quantity'] = su.quantity || 0;
                } else {
                    //TODO
                }
            });

   
            scope.scoreUnits = ScoreUnitsIndex;

            scope.$apply();
        })();


        //Default image badge
        scope.defaultImage = require('./images/no-image.png');
    }
});