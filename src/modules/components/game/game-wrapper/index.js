import template from './template.jade';
import './styles.scss';
import test from '../../quests/quests-list/template.jade';


//TODO ngDocs
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