import template from './template.jade';
import detail from './detail.jade';
import stampit from 'stampit';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Badges grid
 * @module Components
 * @description Component for see the badges of the user in a grid
 * @restrict E
 * @param {Object} item Object with full information of the customer
 * @param {Boolean} showTitle Whether to display the title of the badge
 * @param {Boolean} showDesc Whether to display the description of the badge
 * @element ANY
 */
export default($rootScope, $timeout, $uibModal, $log, Customer, LoopBackAuth, clientHelper, BaseModel, _hasBadges) => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        item: "=",
        showTitle: '=?',
        showDesc: '=?',
        showDetailImg: '=?',
        numberCols: '=?'
    },
    link: (scope, element, attrs)=> {

        //Default image badge
        scope.defaultImage = require('./images/no-image.png');

        //Default values
        let BadgesModel = stampit().compose(BaseModel, _hasBadges);
        let defaults = {
            showTitle: true,
            showDesc: true,
            showDetailImg: false,
            numberCols: 4
        };


        //Llamadas badges
        Q.async(function*() {
            let allIndex, availableIndex, completedIndex = {};
            let all, available, completed = [];
            let availableResponse = yield BadgesModel().getAvailableBadges().$promise;
            let customerInstances = scope.item.badgeInstances;

            availableIndex = availableResponse.reduce((map, obj)=> {
                map[obj.id] = {
                    id: obj.id,
                    image: obj.image,
                    name: obj.name,
                    maxParts: obj.parts
                };
                return map;
            }, {});
            customerInstances.map((instance)=> {
                completedIndex[instance.badgeId] = {
                    id: instance.badge.id,
                    image: instance.badge.image,
                    name: instance.badge.name,
                    parts: instance.parts,
                    maxParts: instance.badge.parts,
                    status: instance.status
                };
                delete availableIndex[instance.badgeId];
            });

            //Mixing available with completed
            all = Object.assign({}, availableIndex, completedIndex);
            // //Convert object to array
            all = Object.keys(all).map(key => all[key]);
            completed = Object.keys(completedIndex).map((key)=> {
                return completedIndex[key]
            });

            scope.badges = BadgesModel({all: all, available: availableIndex, completed: completed});
            scope.$apply();
        })();
        //Set default values
        clientHelper.setDefaultAttributes(defaults, scope, attrs);

        //Detail view
        scope.badgeDetail = function (item) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                appendTo: element,
                template: detail(),
                controller: ['$scope', 'item', 'showTitle', 'showDesc', 'showDetailImg', ($scope, item, showTitle, showDesc, showDetailImg)=> {
                    $scope.item = item;
                    $scope.showTitle = showTitle;
                    $scope.showDesc = showDesc;
                    $scope.showDetailImg = showDetailImg;
                    $scope.defaultImage = require('./images/no-image.png');
                }],
                resolve: {
                    item: ()=> item,
                    showTitle: () => scope.showTitle,
                    showDesc: ()=> scope.showDesc,
                    showDetailImg: ()=> scope.showDetailImg,
                },
                size: 'sm'
            });

        };


        //Switch for cols
        switch (scope.numberCols) {
            case 2:
                scope.colWidth = 6;
                break;
            case 3:
                scope.colWidth = 4;
                break;
            case 5:
                scope.colWidth = 5;
                break;
            case 6:
                scope.colWidth = 2;
                break;
            case 4:
            default:
                scope.colWidth = 3;
                break;
        }

    }
});