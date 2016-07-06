import template from './template.jade';

export default($rootScope) => ({
    restrict: 'E',
    scope: {},
    link:(scope,element,attrs)=>{
        scope.max =  200;

        scope.random = function() {
            //TODO pasar valor a la función dinamicamente
            var value = 50;
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
                type = 'Intermediate';
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

        scope.randomStacked = function() {
            scope.stacked = [];
            var types = ['Newbie', 'Rookie', 'Beginner', 'Talented', 'Skilled', 'Intermediate', 'Skillful!', 'Advanced!', 'Senior!', 'Expert!'];

            for (var i = 0, n = Math.floor(Math.random() * 10 + 1); i < n; i++) {
                var index = Math.floor(Math.random() * 10);
                scope.stacked.push({
                    value: Math.floor(Math.random() * 30 + 1),
                    type: types[index]
                });
            }
        };
        scope.randomStacked();
    },
    template

});