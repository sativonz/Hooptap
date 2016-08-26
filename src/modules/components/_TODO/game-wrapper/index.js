import template from './template.jade';
import './styles.scss';
import test from '../../quests/quests-list/template.jade';
/**
 * @ngdoc directive
 * @name Game room detail
 * @module Components
 * @description Component to show the detail view of your custom games
 * @restrict E
 * @param {Boolean} showTitle Whether or not display the title of the game detail
 * @param {Boolean} showDesc Whether or not display the description of the game detail
 * @element ANY
 */
export default($uibModal, $log) => ({
    restrict: 'E',
    template,
    scope: {
    },
    link: (scope, element, attrs)=> {
        //TODO por hacer el titulo
        scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                template: test,
                controller: 'htWidgetCtrl',
                size: size,
            });

            $('.modal-content').append('Hi');


            //-> UNUSED
            // scope.ok = function () {
            //     $uibModalInstance.close($scope.selected.item);
            // };
            //
            // scope.cancel = function () {
            //     $uibModalInstance.dismiss('cancel');
            // };

        }

    }

});