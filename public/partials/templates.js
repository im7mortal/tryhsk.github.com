angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("partials/checkbox/checkbox.html","<div data-role=treeview class=treeview><ul><li class=node><span class=node-toggle></span><span class=leaf>HSK level</span><ul><li data-mode=checkbox><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.hsk1><span class=check></span><span class=leaf>HSK 1</span></label></li><li data-mode=checkbox><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.hsk2><span class=check></span><span class=leaf>HSK 2</span></label></li><li data-mode=checkbox><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.hsk3><span class=check></span><span class=leaf>HSK 3</span></label></li></ul></li><li class=node><span class=node-toggle></span><span class=leaf>{{content.partOfSpeech}}</span><ul><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.noun><span class=check></span><span class=leaf>{{content.noun}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.pronoun><span class=check></span><span class=leaf>{{content.pronoun}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.verb><span class=check></span><span class=leaf>{{content.verb}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.adjective><span class=check></span><span class=leaf>{{content.adjective}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.numeral><span class=check></span><span class=leaf>{{content.numeral}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.otherPart><span class=check></span><span class=leaf>{{content.otherPart}}</span></label></li></ul></li><li class=node><span class=node-toggle></span><span class=leaf>{{content.theme}}</span><ul><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.place><span class=check></span><span class=leaf>{{content.place}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.relate><span class=check></span><span class=leaf>{{content.relate}}</span></label></li><li><label class=\"input-control checkbox\"><input type=checkbox ng-model=checkboxValues.otherThemes><span class=check></span><span class=leaf>{{content.otherThemes}}</span></label></li></ul></li></ul></div>");
$templateCache.put("partials/info/info.html","<div id=_page_3 ng-controller=InfoController class=frame></div>");
$templateCache.put("partials/love/love.html","<div id=_page_5 ng-controller=LoveController class=\"frame no-padding-top no-padding-right\"><img src=public/img/g.png alt=\"Fork me on GitHub\" class=place-right><div class=\"grid no-margin\"><div class=\"row condensed no-margin\"><p class=\"leader v-align-middle\">github.com/tryhsk/tryhsk.github.com</p></div><div class=\"row condensed\"><p class=sub-leader>{{content.baseWords}}</p></div><div class=\"row condensed\"><p class=header>docs.google.com/spreadsheets/d/1eCcrph6foyjtuQBQxeaZF8ZyrP3EUIE8uiJf3yVISS4/edit?usp=sharing</p></div></div></div>");
$templateCache.put("partials/settings/settings.html","<div id=_page_4 ng-controller=SettingsController class=frame><div class=\"input-control select\"><select ng-model=selectLang ng-change=freshLanguage(selectLang)><option value=ru>Русский</option><option value=en>English</option></select></div><div class=\"grid fluid\"><div class=\"row cells2\"><div class=cell><div class=\"row condensed\"><div class=\"input-control checkbox\"><label><input type=checkbox ng-model=settings.sound><span class=check></span><span class=leaf>{{content.pronunciation}}</span></label></div></div><div class=\"row condensed\"><div class=\"input-control checkbox\"><label><input type=checkbox ng-model=settings.color><span class=check></span><span class=leaf>{{content.color}}</span></label></div></div><div class=\"row condensed\"><div class=\"input-control checkbox\"><label><input type=checkbox ng-model=settings.number><span class=check></span><span class=leaf>{{content.numberTone}}</span></label></div></div><div class=\"row condensed\"><div class=\"input-control checkbox\"><label><input type=checkbox ng-model=settings.letter><span class=check></span><span class=leaf>{{content.score}}</span></label></div></div></div><div class=cell><div class=pinyin><span style=\"font-size: xx-large; color:{{tone.color}}\" ng-repeat=\"tone in example\"><span ng-hide=settings.letter>{{tone.pinyin}}</span><span ng-show=settings.letter>{{tone.transpinyin}}</span><span ng-show=settings.number>{{tone.number}}</span></span></div></div></div></div></div>");
$templateCache.put("partials/summary/summary.html","<div id=_page_2 ng-controller=SummaryController class=\"frame frame no-padding\"><div class=\"searchSummary padding10\">{{content.search}}:<input ng-model=query><ng-pluralize ng-show=\"content.code === \'ru\'\" count=words.length when=\"{\'0\': \'Ничего не выбрано\', \'one\': \'Выбрано {} слово\', \'few\': \'Выбрано {} слово\', \'many\': \'Выбрано {} слов\'}\" class=padding10></ng-pluralize><ng-pluralize ng-show=\"content.code === \'en\'\" count=words.length when=\"{\'0\': \'None selected\', \'many\': \'Joined word {}\'}\" class=padding10></ng-pluralize><ng-pluralize ng-show=\"content.code === \'zh\'\" count=words.length when=\"{\'0\': \'None selected\', \'many\': \'Joined word {} zh\'}\" class=padding10></ng-pluralize></div><div class=\"grid margin20\"><div class=\"row cells12\"><div class=\"cell colspan3\"><div ng-include=\"\'partials/checkbox/checkbox.html\'\"></div></div><div id=table class=\"cell colspan9 tableContainer\"><div ng-show=summaryLoader class=summaryLoader><div class=spinner><div class=rect1></div><div class=rect2></div><div class=rect3></div><div class=rect4></div><div class=rect5></div></div></div><table class=table><thead><div class=\"row cells4\"><div class=\"text-left cell\"><a ng-click=\"predicate = \'id\'; reverse=false\">{{content.char}}</a>(<a ng-click=\"predicate = \'-id\'; reverse=false\">^</a>)</div><div class=\"text-left cell\"><a ng-click=\"predicate = \'s\'; reverse=!reverse\">{{content.pinyin}}</a></div><div class=\"text-left cell\"><a ng-click=\"predicate = \'russian\'; reverse=!reverse\">{{content.translate}}</a></div><div style=\"display: none\" class=\"text-left cell\"><a ng-click=\"predicate = \'english\'; reverse=!reverse\">{{content.eng}}</a></div></div></thead><tbody class=scrollContent><div class=zoneSummary><div ng-repeat=\"word in words | filter:query | orderBy:predicate:reverse\" class=\"row cells12\"><div class=\"char char_big cell colspan3\">{{word.id}} {{word.char}}</div><div class=\"pinyin cell colspan3\"><span style=color:{{tone.colorStyle}} ng-repeat=\"tone in word.pinyin\"><span ng-show=!settings.letter>{{tone.pinyin}}</span><span ng-show=settings.letter>{{tone.transpinyin}}</span><span ng-show=settings.number>{{tone.number}}</span></span></div><div class=\"russian cell colspan6\">{{word.russian}}</div></div></div></tbody></table></div></div></div></div>");
$templateCache.put("partials/test/test.html","<div id=_page_1 ng-controller=TestController class=\"frame no-padding\"><div class=grid><div class=\"row cells12\"><div class=\"cell colspan3\"><div class=\"row condensed\"><div class=\"margin10 label\"><div class=\"input-control select\"><select ng-model=select><option value=char-trans ng-bind=\"content[\'char-trans\']\"></option><option value=trans-char ng-bind=\"content[\'trans-char\']\"></option><option value=pron-char ng-bind=\"content[\'pron-char\']\"></option><option value=pron-trans ng-bind=\"content[\'pron-trans\']\"></option></select></div></div></div><div class=\"row condensed\"><div id=sound></div><button ng-show=nextShow ng-click=nextWord() ng-bind=content.next class=\"button margin10 info\"></button><button ng-show=nextRefresh ng-click=nextWord() class=\"button margin10 warning\">{{content.refresh}}<span class=\"mif-loop2 align-right\"></span></button></div><div class=\"row condensed\"><output id=value></output><ng-pluralize ng-show=\"content.code === \'ru\'\" count=words.length when=\"{\'0\': \'Ничего не выбрано\', \'1\': \'Слишком мало слов. Выбрано {} слово\', \'2\': \'Слишком мало слов. Выбрано {} слова\', \'3\': \'Слишком мало слов. Выбрано {} слова\', \'4\': \'Слишком мало слов. Выбрано {} слова\', \'5\': \'Слишком мало слов. Выбрано {} слов\', \'6\': \'Слишком мало слов. Выбрано {} слов\', \'7\': \'Слишком мало слов. Выбрано {} слов\', \'8\': \'Слишком мало слов. Выбрано {} слов\', \'9\': \'Слишком мало слов. Выбрано {} слов\', \'one\': \'Выбрано {} слово\', \'few\': \'Выбрано {} слово\', \'many\': \'Выбрано {} слов\'}\" class=margin10></ng-pluralize><ng-pluralize ng-show=\"content.code === \'en\'\" count=words.length when=\"{\'0\': \'None selected\', \'1\': \'Too few words. Joined {} words\', \'2\': \'Too few words. Joined {} words\', \'3\': \'Too few words. Joined {} words\', \'4\': \'Too few words. Joined {} words\', \'5\': \'Too few words. Joined {} words\', \'6\': \'Too few words. Joined {} words\', \'7\': \'Too few words. Joined {} words\', \'8\': \'Too few words. Joined {} words\', \'9\': \'Too few words. Joined {} words\', \'one\': \'Chosen one word\', \'many\': \'Joined word {}\'}\" class=margin10></ng-pluralize><ng-pluralize ng-show=\"content.code === \'zh\'\" count=words.length when=\"{\'0\': \'None selected\', \'1\': \'Too few words. Joined {} words\', \'2\': \'Too few words. Joined {} words\', \'3\': \'Too few words. Joined {} words\', \'4\': \'Too few words. Joined {} words\', \'5\': \'Too few words. Joined {} words\', \'6\': \'Too few words. Joined {} words\', \'7\': \'Too few words. Joined {} words\', \'8\': \'Too few words. Joined {} words\', \'9\': \'Too few words. Joined {} words\', \'one\': \'Chosen one word\', \'many\': \'Joined word {} zh\'}\" class=margin10></ng-pluralize></div><div class=\"row condensed\"><h1 ng-show=answer ng-bind=currentRights class=\"margin10 align-center\"></h1></div></div><div class=\"cell colspan6\"><div class=\"row condensed\"><center><button ng-show=\"soundCharRegime || soundTranslateRegime\" ng-click=playSound() class=\"shortcut link buttonSound\"><i class=mif-volume-medium></i></button><button ng-show=charRegime ng-style=questionStyle ng-click=playSound() class=\"shortcut link font60\">{{char}}</button><div ng-show=translateRegime class=\"russian-char font20\">{{translate}}</div></center></div><div class=\"row condensed\"><div id=accordion data-role=accordion data-closeany-any=true class=\"accordion place-center test\"><div ng-repeat=\"wordsTest in wordsTests\" class=\"frame no-padding\"><a href=# ng-click=isRight(wordsTest.ansv) ng-style=variantStyle class=heading>{{wordsTest.main}}</a><div class=\"content no-margin\"><div ng-show=\"charRegime || soundCharRegime\" class=\"row cells6 no-margin\"><audio ngsrc={{wordsTest.sound}}></audio><div class=\"cell colspan2\"><h2>{{wordsTest.char}}</h2></div><div class=\"cell colspan3\"><h2><span style=color:{{tone.color}} ng-repeat=\"tone in wordsTest.pinyin\"><span ng-hide=settings.letter>{{tone.pinyin}}</span><span ng-show=settings.letter>{{tone.transpinyin}}</span><span ng-show=settings.number>{{tone.number}}</span></span></h2></div></div><div ng-show=\"translateRegime || soundTranslateRegime\" class=\"row condensed no-margin\"><h4>{{wordsTest.translate}}</h4></div><div class=\"row condensed no-margin\"><button ng-class=wordsTest.ansver ng-click=nextWord() class=button>{{wordsTest.button}}</button></div></div></div></div></div></div><div class=\"cell colspan3\"><div ng-include=\"\'partials/checkbox/checkbox.html\'\"></div></div></div></div></div>");}]);