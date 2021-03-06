tryHskControllers.controller('TestController', ['$scope', '$rootScope', 'sortWords', '$timeout', 'StateManager', 'score', 'language', '$resource',
	function ($scope, $rootScope, sortWords, $timeout, StateManager, score, language, $resource) {
		var question
			, arr = []
			, wordsTests = [
				{},
				{},
				{},
				{}
			]
			, russian_char = document.getElementById('russian_char')
			, sound_test = document.getElementById('sound_test')
			, test_randoms = [];

		$scope.currentRights = 0;
		StateManager.add('test');
		//todo убрать в инициализатор!!!
		language.getLanguage(language.initLanguage()); // TODO need replace  NOT GOOD
		$scope.regimes = [
			{"option": $rootScope.content['char-trans'], "value": "char-trans"},
			{"option": $rootScope.content['trans-char'], "value": "trans-char"},
			{"option": $rootScope.content['pron-char'], "value": "pron-char"},
			{"option": $rootScope.content['pron-trans'], "value": "pron-trans"}
		];
		$scope.select = $scope.regimes[0].value;
		$scope.$watch('select', alert, true);
		$rootScope.$watch('checkboxValues', alert, true);



		// TODO wrapper
		$scope.isRight = function (answer) {
			score.isRight(answer);
			if(!score.count) return;
			$scope.answer = true;
			$scope.currentRights = score.count;
		};

		$scope.playSound = function () {
			document.getElementById('playSound').play();
			return false;
		};

		//Выдаёт рандомное число в зависимости от размера массива
		function getRandom(number) {
			return Math.round(Math.random() * (number));
		}

		//Выдаёт id  следующего слова учитывая предъидущие
		function randomize(length, arr) {
			var length85 = Math.floor(length * 0.85);
			do {
				var repeat = false;
				var question = getRandom(length - 1);
				for (var i = 0; i < length85; i++) {
					if (question == arr[i]) {
						repeat = true;
						break
					}
				}
			} while (repeat);
			arr.unshift(question);
			return question;
		}


		//Создаётся массив из 4 элементов, один из них id главного иероглифа
		/**
		 *
		 * @param length
		 * @returns {Array} 3 random numbers + question
		 */
		function generate_var(length) {
			var arr = [];
			for (var i = 2; i >= 0; i--) {
				do {
					var next = getRandom(length - 1);
					var uniq = false;
					for (var j = arr.length - 1; j >= 0; j--) {
						if (next === arr[j]) {
							uniq = true;
						}
					}
					if (next === question) {
						uniq = true;
					}
				}
				while (uniq);
				arr.push(next);
			}
			arr.splice(getRandom(3), 0, question);
			return arr;
		}

		function setSmock() {
			var arr = ['❤', '☀', '♞', '☭'];
			$scope.char = '☯';
			for (var i = 0; i < 4; i++) {
				wordsTests[i].char = arr[i];
				wordsTests[i].pinyin = '☀';
				wordsTests[i].translate = '♞';
				wordsTests[i].sound = '';  // звук птичек на звонке
				wordsTests[i].ansver = 'primary';
				wordsTests[i].button = 'лол!!!';
			}
		}

		//Создаёт 4 обьекта по id из  generate_var
		function fill_test(words) {

			for (var i = 0; i < 4; i++) {
				wordsTests[i].char = words[test_randoms[i]].char;
				wordsTests[i].pinyin = words[test_randoms[i]].pinyin;
				if (!$rootScope.settings.color) {
					for (var j = 0; j < wordsTests[i].pinyin.length; j++) {
						wordsTests[i].pinyin[j].color = 'black';
					}
				}
				wordsTests[i].translate = getTransate(words[test_randoms[i]]);
				if ($scope.select === 'pron-char' || $scope.select === 'char-trans') {
					wordsTests[i].main = getTransate(words[test_randoms[i]]);
				}
				if ($scope.select === 'trans-char' || $scope.select === 'pron-trans') {
					wordsTests[i].main = words[test_randoms[i]].char;
				}
				wordsTests[i].sound = words[test_randoms[i]].sound;
				wordsTests[i].id = words[test_randoms[i]].id;
				if (test_randoms[i] == question) {
					wordsTests[i].ansver = 'success';
					wordsTests[i].ansv = true;
					wordsTests[i].button = $rootScope.content.success;
				} else {
					wordsTests[i].ansver = 'danger';
					wordsTests[i].ansv = false;
					wordsTests[i].button = $rootScope.content.fail;
				}
			}
		}

		$scope.fill = function () {
			var data = $rootScope.words;
			$("div.content").css("display", "none").css("border", "");
			$("div.frame").removeClass( 'active' );
			question = randomize(data.length, arr);

			//Изменяет ширину окна главного иероглифа
			if (data[question].char.length == 1) {
				$scope.questionStyle = {'width':  92 + 'px'};
			} else {
				$scope.questionStyle = {'width': 80 * data[question].char.length + 'px'};
			}
			$scope.char = data[question].char;
			$scope.translate = getTransate(data[question]);
			switch ($scope.select) {
				case 'char-trans':
					$scope.charRegime = true;
					$scope.translateRegime = false;
					$scope.soundCharRegime = false;
					$scope.soundTranslateRegime = false;
					break;
				case 'trans-char':
					$scope.charRegime = false;
					$scope.translateRegime = true;
					$scope.soundCharRegime = false;
					$scope.soundTranslateRegime = false;
					break;
				case 'pron-char':
					$scope.charRegime = false;
					$scope.translateRegime = false;
					$scope.soundCharRegime = true;
					$scope.soundTranslateRegime = false;
					document.getElementById('playSound').play();
					break;
				case 'pron-trans':
					$scope.charRegime = false;
					$scope.translateRegime = false;
					$scope.soundCharRegime = false;
					$scope.soundTranslateRegime = true;
					document.getElementById('playSound').play();
					break;
			}
			if ($scope.charRegime || $scope.soundCharRegime) {
				$scope.variantStyle = '';
			} else {
				$scope.variantStyle = {'font-size': 40  + 'px','font-weight': 'normal'};
			}
			$scope.sound = data[question].sound;
			test_randoms = generate_var(data.length);
			fill_test(data);
			setTimeout(function () {
				$("div.content:has(button.success)").css("border", "2px solid #60a917");
				$("div.content:has(button.danger)").css("border", "2px solid red");
			}, 500);
//			$scope.result.amount = ++$scope.result.amount;

			return wordsTests;
		};

		function getTransate (object) {
			if($rootScope.content.code === 'ru') {
				return object.russian
			} else {
				return object.english
			}
		}

		$rootScope.$watch('content.code', function () {
			score.answered = false;
			$scope.nextShow = false;
			$scope.nextRefresh = true;
		}, true);

		$scope.nextWord = function () {
			score.answered = false;
			$scope.nextShow = true;
			$scope.nextRefresh = false;
			if ($rootScope.words.length < 10) {
				setSmock();
			} else {
				$scope.fill();
				$timeout(function () {
					if ($rootScope.settings.sound || $scope.select === 'pron-char' || $scope.select === 'pron-trans') {
						document.getElementById("sound").innerHTML = "<audio id=\"playSound\" src=\"" + $scope.sound + "\" autoplay ></audio>";
					} else {
						document.getElementById("sound").innerHTML = "<audio id=\"playSound\" src=\"" + $scope.sound + "\"></audio>";
					}
				}, 100);
			}
			$resource('test/', {}, {
				query: {
					method: 'GET',
					params: {
						login: 'root'
					}
				}
			}).query().$promise.then(
				function (result) {
					console.log(result);
				}
			);
		};


function alert (newValue, oldValue) {
	if(newValue === oldValue) return;
	$scope.nextShow = false;
	$scope.nextRefresh = true;
	arr = new Array(10);
}

		(function() {
			sortWords.getSortWords().then(function () {
				$scope.nextWord();
				$scope.wordsTests = wordsTests;
				StateManager.remove('test');
			});
		})()

}]);