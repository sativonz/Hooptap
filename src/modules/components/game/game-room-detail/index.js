import template from './template.jade';
import './styles.scss';
//TODO ngDocs
export default($timeout, $uibModal, $log) => ({
    restrict: 'E',
    template,
    scope: {
        showTitle: '=',
        showDesc: '=',
    },
    link: (scope, element, attrs)=> {

        //Wrapper game
        scope.openWrapperGame = function (size) {

            var modalInstance = $uibModal.open({
                animation: scope.animationsEnabled,
                template: '<p>Wrapper game</p>',
                controller: 'htWidgetCtrl',
                size: size,
            });



            //-> UNUSED
            // scope.ok = function () {
            //     $uibModalInstance.close($scope.selected.item);
            // };
            //
            // scope.cancel = function () {
            //     $uibModalInstance.dismiss('cancel');
            // };

        };


        //Definir el numero de cols entre 2, 3, 4 y 5
        scope.numberCols = 4;
        scope.defaultImage = require("./images/default-icon.png");
        scope.gameromDetail = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  require("./images/default-icon.png"),
            }
        ];
    }
});