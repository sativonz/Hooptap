import template from './template.jade';

export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        idWidget: '=',
        config: '='
    },
    link: (scope, element, attrs)=> {

        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=>{
                $rootScope.customer = response;
            }
        );

        //Default Widget values
        if (!scope.config) {

            scope.config.editable = scope.config.editable || true;
            scope.config.showImage = scope.config.showImage || true;
            scope.config.showProgressBar = scope.config.showProgressBar || true;
            scope.config.showGlobalActivity = scope.config.showGlobalActivity || true;
            scope.config.badgesView = scope.config.badgesView || 'list';
            scope.config.rewardsList = scope.config.rewardsList || Array('');

            scope.config = {'editable': true, 'showImage': true, 'badgesView': 'list' , 'showProgressBar': true, 'showGlobalActivity': true, rewardsList: []}
        }

        Customer.getCurrent({
            filter: {include: scope.config.rewardsList}
        }).$promise.then((response)=> {
            scope.user = response;

        }).catch(()=> {
            //TODO
        });

        //cuando exista un ENDPOINT del API
        /*     Widget.findById({id: scope.idWidget}).$promise.then(()=>{
         });*/

        scope.menuItems = [
            {view: 'profileWidgetFull.questsList', title: 'QUESTS.title'},
            {view: 'profileWidgetFull.badgesList', title: 'BADGES.title'},
            {view: 'profileWidgetFull.customerUpdate', title: 'CUSTOMER.common.edit'}
        ];

        $rootScope.currentView = 'profileWidgetFull.default';

        //Progressbar config
        scope.max = 200;
        scope.random = function () {
            //TODO pasar valor a la función dinamicamente
            var value = 49;
            var type;

            if (value < 20) {
                type = 'Newbie';
            } else if (value < 40) {
                type = 'Rookie';
            } else if (value < 60) {
                type = 'Beginner';
            } else if (value < 80) {
                type = 'Talented';
            } else if (value < 100) {
                type = 'Skilled!';
            } else if (value < 120) {
                type = 'Intermediate!';
            } else if (value < 140) {
                type = 'Skillful!';
            } else if (value < 160) {
                type = 'Advanced!';
            } else if (value < 180) {
                type = 'Senior!';
            } else if (value < 199) {
                type = 'Expert!';
            }

            //scope.showWarning = type === 'Senior' || type === 'Expert';

            scope.dynamic = value;
            scope.type = type;
        };

        scope.random();

        scope.randomStacked = function () {
            scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
                var index = Math.floor(Math.random() * 4);
                scope.stacked.push({
                    value: Math.floor(Math.random() * 30 + 1),
                    type: types[index]
                });
            }
        };
        scope.randomStacked();

    }
});