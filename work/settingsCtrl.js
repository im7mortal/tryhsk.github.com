tryHskControllers.controller('settingsCtrl', function ($scope, $rootScope, language, settings) {
	$rootScope.settings = settings.getSettings();
	$scope.$watch('settings', function () {
		settings.refreshSettings($scope.settings);
		$rootScope.settings = $scope.settings;
	}, true);

	$scope.languages = language.getLanguage();
	$scope.selections = [
		{name: 'russian',
			text: 'Русский'},
		{name: 'hanyu',
			text: '汉语'},
		{name: 'english',
			text: 'English'}
	];
	$scope.nextWord = function () {
		language.select = $scope.select;
		$scope.languages = language.getLanguage();
		$scope.select = language.select;
	};

});