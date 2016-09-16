export default($rootScope,viewHandlerService) => ({
    restrict: 'A',
    link: (scope, element, attrs)=> {
        //console.log(scope, element, attrs);


        element.bind('click', function () {
            viewHandlerService.setCurrentView(attrs.vhRef);
            console.log(viewHandlerService.getCurrentView());

        });

    }
});
