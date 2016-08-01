import template from './template.jade';
import './styles.scss';
import test from '../../levels/level-actual/template.jade';


//TODO ngDocs
export default($uibModal, $log) => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=> {

        scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                template: test,
                controller: 'htWidgetCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return scope.items;
                    }
                }
            });


        };

        scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    },
    template

});