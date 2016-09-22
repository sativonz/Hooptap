
export default ($scope) => {

	/*	Scope
	 ---------------------------------------------------------------------------------*/

	// Checks if we need to show the content
	$scope.isEnded = (obj) => {

		if(typeof obj == 'undefined') {
			return false;
		}
		else if(isPromise(obj)) {
			return isEnded('promise', obj);
		}
		else if(isPromise(obj.$promise)) {
			return isEnded('promise', obj.$promise);
		}

		return isEnded('generic', obj);
	};


	/*	Functions
	 ---------------------------------------------------------------------------------*/

	function isPromise (obj) {
		return obj && obj.hasOwnProperty('$$state');
	}

	function isEnded (type, obj) {
		let mapCheckers = {
				generic	: x => !!x, // function(x) { return !!x }
				promise	: x => x.$$state.status != 0
			},
			checker = mapCheckers[type] || mapCheckers['generic'];

		return checker(obj);
	}

}