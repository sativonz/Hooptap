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
        numberCols: '=?',
    },
    link: (scope, element, attrs)=> {

        let BadgesModel = stampit().compose(BaseModel, _hasBadges);

        let defaults = {
            showTitle: true,
            showDesc: true,
            showDetailImg: false,
            numberCols: 4
        };

        Q.async(function *() {
            let result = yield BadgesModel().getAvailableBadges();
            console.log('>> BadgesModel()getAvailableBadges(). >> ', result);
            scope.availableBadges = result;
            //console.log(scope);
            window.scope = scope;
        })();
       

        clientHelper.setDefaultAttributes(defaults, scope, attrs);


        // Customer.get( { filter: { include: ['badges'] } } ).$promise.then(
        //     (response)=>{
        //
        //         console.log("Response badges:", response);
        //
        //     }
        // );

        //Detail view
        scope.badgeDetail = function (item) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                appendTo: document.getElementsByTagName('c-badges-grid'),
                template: detail,
                controller: ['$scope', 'item', 'showTitle', 'showDesc', 'showDetailImg', ($scope, item, showTitle, showDesc, showDetailImg)=> {
                    $scope.item = item;
                    $scope.showTitle = showTitle;
                    $scope.showDesc = showDesc;
                    $scope.showDetailImg = showDetailImg;
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
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Popcorn.svg",
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
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
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
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Corazon.svg",
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
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Popcorn.svg",
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
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Discount.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": false,
                "finished": false,
                "available": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Pawnn",
                "title": "Pawnn",
                "state": true,
                "finished": false,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "parts": "6",
                "currentStep": "6",
                "state": true,
                "finished": true,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Popcorn.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": true,
                "finished": false,
                "available": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Shield",
                "title": "Shield",
                "state": true,
                "finished": false,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Shoping.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": false,
                "finished": false,
                "available": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Discount.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Popcorn.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": true,
                "finished": false,
                "available": true,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Restore",
                "title": "Restore",
                "state": true,
                "finished": false,
                "available": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Discount.svg",
            },
            {
                "id": "5776228481dbc14a04530f79",
                "name": "Sackala",
                "title": "Sackala",
                "state": true,
                "available": false,
                "finished": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/badges/Gamer.svg",
            }
        ];


    }
});