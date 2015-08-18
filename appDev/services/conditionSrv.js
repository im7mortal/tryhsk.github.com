var hsk = {};
hsk.utilits = {};
hsk.srv = {};
hsk.languges = {};
hsk.srv.checkboxes = {
	values: {
		hsk1: true,
		hsk2: true,
		hsk3: true,
		verb: true,
		numeral: true,
		adjective: true,
		pronoun: true,
		place: true,
		relate: true,
		noun: true,
		otherPart: true,
		otherThemes: true
	},
	initValues: function () {
		var values = hsk.utilits.cookie.getCookie('checkboxValues');
		if (values === undefined) {
			return this.values;
		} else {
			return JSON.parse(values);
		}
	},
	refreshValues: function (object) {
		hsk.utilits.cookie.setCookie('checkboxValues', object);
	}
};
hsk.srv.settings = {
	values: {
		sound: true,
		color: false,
		letter: true,
		number: false
	}
	,
	initValues: function () {
		var values = hsk.utilits.cookie.getCookie('settings');
		if (values === undefined) {
			return this.values;
		} else {
			return JSON.parse(values);
		}
	},
	refreshValues: function (object) {
		hsk.utilits.cookie.setCookie('settings', object);
	}
};


hsk.srv.languges = {
	defaultLanguage: 'ru',
	initValues: function () {
		var values = hsk.utilits.cookie.getCookie('language');
		if (values === undefined) {
			return this.defaultLanguage;
		} else {
			return JSON.parse(values);
		}
	},
	getValues: function (language) {
		return hsk.languges[language];
	},
	refreshValues: function (object) {
		hsk.utilits.cookie.setCookie('language', object);
	}
};

hsk.languges.zh = {
	"code": 'zh',
	"test": '__ТЕСТ__',
	"summary": '__СЛОВАРЬ__',
	"search": '搜索',
	"select": '选择语言',
	"char": "字",
	"pinyin": "拼音",
	"translate": "俄语",
	"eng": "英语",
	"pronunciation": "拼音",
	"color": "拼音",
	"numberTone": "拼音",
	"score": "拼音",
	"partOfSpeech": "拼音",
	"noun": "拼音",
	"pronoun": "拼音",
	"verb": "拼音",
	"adjective": "拼音",
	"numeral": "拼音",
	"otherPart": "拼音",
	"theme": "拼音",
	"place": "拼音",
	"relate": "拼音",
	"otherThemes": "拼音",
	"baseWords": "База слов в формате google Docs",
	"next": "NEXT",
	"refresh": "refresh",
	"success": "success!",
	"fail": "fail",
	"char-trans": "character - translation",
	"trans-char": "translation - character",
	"pron-char": "pronunciation - character",
	"pron-trans": "pronunciation - translation"
};
hsk.languges.en = {
	"code": 'en',
	"test": 'TEST',
	"summary": 'SUMMARY',
	"search": 'Search',
	"select": 'Choose language',
	"char": "Hieroglyph",
	"pinyin": "Pinyin",
	"translate": "Russian",
	"eng": "English",
	"pronunciation": "pronunciation",
	"color": "color",
	"numberTone": "number of tone",
	"score": "score",
	"partOfSpeech": "part of speech",
	"noun": "noun",
	"pronoun": "pronoun",
	"verb": "verb",
	"adjective": "adjective",
	"numeral": "numeral",
	"otherPart": "other part",
	"theme": "theme",
	"place": "place",
	"relate": "relate",
	"otherThemes": "other themes",
	"baseWords": "Base words in google Docs format",
	"next": "NEXT",
	"refresh": "refresh",
	"success": "success!",
	"fail": "fail",
	"char-trans": "character - translation",
	"trans-char": "translation - character",
	"pron-char": "pronunciation - character",
	"pron-trans": "pronunciation - translation",
	"pluralizeSummary": "{'0': '######',\
						'one': 'Выбрано {} слово',\
						'few': 'Выбрано {} слово',\
						'many': 'Выбрано {} слов'}"
};

hsk.languges.ru = {
	"code": 'ru',
	"test": 'ТЕСТ',
	"summary": 'СЛОВАРЬ',
	"search": 'Поиск',
	"select": 'Выберите язык',
	"char": "Иероглиф",
	"pinyin": "Пиньинь",
	"translate": "Перевод",
	"eng": "Английский",
	"pronunciation": "Произношение",
	"color": "Расскаска слогов по тонам",
	"numberTone": "Цифры тонов",
	"score": "Подчёркивания",
	"partOfSpeech": "часть речи",
	"noun": "существительные",
	"pronoun": "числительные",
	"verb": "глаголы",
	"adjective": "прилагательные",
	"numeral": "счётное слово",
	"otherPart": "другие",
	"theme": "Тематические",
	"place": "Место",
	"relate": "Отношения",
	"otherThemes": "другие",
	"baseWords": "База слов в формате google Docs",
	"next": "СЛЕДУЮЩИЙ",
	"refresh": "ОБНОВИТЬ",
	"success": "Молодец!",
	"fail": "Всё получится!",
	"char-trans": "иероглиф - перевод",
	"trans-char": "перевод - иероглиф",
	"pron-char": "произношение - перевод",
	"pron-trans": "произношение - иероглиф",
	"pluralizeTest": "{'0': 'Ничего не выбрано',\
						'1': 'Слишком мало слов. Выбрано {} слово',\
						'2': 'Слишком мало слов. Выбрано {} слова',\
						'3': 'Слишком мало слов. Выбрано {} слова',\
						'4': 'Слишком мало слов. Выбрано {} слова',\
						'5': 'Слишком мало слов. Выбрано {} слов',\
						'6': 'Слишком мало слов. Выбрано {} слов',\
						'7': 'Слишком мало слов. Выбрано {} слов',\
						'8': 'Слишком мало слов. Выбрано {} слов',\
						'9': 'Слишком мало слов. Выбрано {} слов',\
						'one': 'Выбрано {} слово',\
						'few': 'Выбрано {} слово',\
						'many': 'Выбрано {} слов'}",
	"pluralizeSummary": "{'0': 'Ничего не выбрано',\
						'one': 'Выбрано {} слово',\
						'few': 'Выбрано {} слово',\
						'many': 'Выбрано {} слов'}"
};


/**
 *
 * @type {{defineCookieEngine: Function, getCookie: Function, setCookie: Function}}
 */
hsk.utilits.cookie = {
	defineCookieEngine: function (engine) {
		this.engine = engine
	},
	getCookie: function (name) {
		return this.engine[name];
	},
	setCookie: function (name, object) {
		this.engine[name] = object;
	}
};

