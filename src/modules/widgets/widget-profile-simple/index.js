/**First widget. Un pequeño paso para hooptap, un gran paso para los frontenders**/

import angular from 'angular-mod';

let module = angular.module('app.widgetProfileSimple', [])
    .directive('wWidgetProfileSimple', require('./component').default)
    .config(require('./config').default);

export default module.name;