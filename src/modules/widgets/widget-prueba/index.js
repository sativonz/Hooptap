/**First widget. Un pequeño paso para hooptap, un gran paso para los frontenders**/

import angular from 'angular-mod';

let module = angular.module('app.widgetPrueba', [])
    .directive('cWidgetPrueba', require('./component').default);

export default module.name;