"use strict";

tryHskServices.service('checkboxValues', ['$cookies', '$rootScope', function ($cookies, $rootScope) {

	// вынести в инициализатор
	hsk.utilits.cookie.defineCookieEngine($cookies);

	this.initCheckboxValues = function () {
		$rootScope.checkboxValues = hsk.srv.checkboxes.initValues();
	};
	this.refreshCheckboxValues = function () {
		hsk.srv.checkboxes.refreshValues(JSON.stringify($rootScope.checkboxValues));
	}

}]);

tryHskServices.service('settings', ['$rootScope', function ($rootScope) {

	this.initSettings = function () {
		$rootScope.settings = hsk.srv.settings.initValues();
	};
	this.refreshSettings = function () {
		hsk.srv.settings.refreshValues(JSON.stringify($rootScope.settings));
	}

}]);

tryHskServices.service('language', ['$cookies', '$rootScope', function ($cookies, $rootScope) {


	this.getLanguage = function (selectLanguage) {
		$rootScope.content = hsk.srv.languges.getValues(selectLanguage);
	};
	this.initLanguage = function () {
		return hsk.srv.languges.initValues();
	};
	this.refreshSelectlanguage = function (selectLanguage) {
		var object = {
			selectLanguage: selectLanguage
		};
		hsk.srv.settings.refreshValues(JSON.stringify(object));
		$rootScope.content = hsk.srv.languges.getValues(selectLanguage);
	}

}]);


tryHskServices.service('score', [ function () {
	this.answered = false;
	this.count = 0;
	this.isRight = function (answer) {
		if (!this.answered && answer) {
			this.count = this.count ? ++this.count : 1;
		}
		this.answered = true;
	};
}]);