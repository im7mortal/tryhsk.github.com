"use strict";

function all_z(name){
    var bool;
    try{ bool = getCookie(name+'_bool')}catch(err){console.log('cookies haven\'t :'+err);bool= true;};
    if(bool=="false"){bool=false}else{bool=true}
    if (!bool){ $("." +name).prop('checked', false)}


    $("." +name).change(function (){
        bool = !bool;
        $("." +name).prop('checked', bool);
        setCookie(name+'_bool',bool);
        if (bool) {
            $("." +name+"_tr").show();
        } else {
            $("." +name+"_tr").hide();
        }
        get_arr();
        return false;
    });
    return bool;
}


var question;

var arr=new Array(10);
var noun_bool;
var pronoun_bool;
//var verb_bool= all_z('verb');
//var numeral_bool = new all_z('numeral');
//var subject_bool= true;
var test_arr=[];
var words;





bool_val();
$.ajax({
    url: 'words.json',
    async: false,
    dataType: 'json',
    success: function (json) {
        words = json;
    }
});

fill();



function fill(){
    $("div.content").css("display","none").css("border","");
    if (( all_z('noun') || all_z('pronoun')  || all_z('verb')   || all_z('subject') || all_z('numeral') )){}else{return alert("Ничего не выбрано")}
    get_arr();
    randomize();
    main_char();
    music();
    generate_var();
    $("div.content:has(button.primary)").css("border","2px solid green");
    $("div.content:has(button.danger)").css("border","2px solid red");
    return false;
}

function get_arr(){
    test_arr=[];

    if(all_z('noun')){
        for(var i=0; i<words.length; i++){
            if(words[i].noun){test_arr.unshift(words[i].id)}
        }
    }

    if(all_z('pronoun')){

        for(var i=0;i<words.length;i++){
            if(words[i].pronoun){test_arr.unshift(words[i].id)}
        }
    }

    if(all_z('verb')){
        for(var i=0;i<words.length;i++){
            if(words[i].verb){test_arr.unshift(words[i].id)}
        }
    }

    if(all_z('subject')){
        for(var i=0;i<words.length;i++){
            if(words[i].subject){test_arr.unshift(words[i].id)}
        }
    }

    if(all_z('numeral')){
        for(var i=0;i<words.length;i++){
            if(words[i].numeral){test_arr.unshift(words[i].id)}
        }
    }
    ammount_words();
    scroll();
    return test_arr;
}

function  scroll(){

    $('#table').css('height',test_arr.length*33);
//        $("#table").scrollbar({
//            height: test_arr.length*36,
//            axis: 'y'
//        });

}




function ammount_words(){
    document.getElementById("value").innerHTML='Выбрано ';
    var last_number=test_arr.length.toString().substr(test_arr.length.toString().length-1,1);
    var number=test_arr.length.toString();
    if(last_number==='1'){document.getElementById("value").innerHTML+=test_arr.length+' слово'}
    else {
        if(last_number=='2'||last_number=='3'||last_number=='4'){
            if(number=='12'||number=='13'||number=='14'){
                document.getElementById("value").innerHTML+=test_arr.length+' слов'}
            else {document.getElementById("value").innerHTML+=test_arr.length+' слова'}
        }
        else{
            document.getElementById("value").innerHTML+=test_arr.length+' слов'}
    }
}

function random_var(){
    return Math.floor(Math.random() * test_arr.length-1);
}

function randomize(){
    question = random_var();
    var repeat=true;
    do{
        for(var i=0;i<Math.floor(test_arr.length*0.75);i++){
            if(question==arr[i]){
                question = (random_var());repeat=true; break
            }else {
                repeat=false
            }
        }
    }while(repeat);
    arr.unshift(question);
    for(var i=0;i<10;i++){
    }
    return question;
}

function main_char(){
    var length=words[test_arr[question]].char.length;
    if(length==1){$("#random").css("width",92)}else{
        $("#random").css("width",80*length)
    }
    document.getElementById("random").innerHTML=words[test_arr[question]].char;
}

function music(){
    document.getElementById("music").innerHTML= "<audio id=\"sound\" src=\"" + words[test_arr[question]].sound +"\" autoplay></audio>";
    return function(){};
}


function mixer(arr){
    for ( var i = arr.length; i-->0; ) {
        var t = arr[i],
            j = Math.floor(i*Math.random());
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}


function generate_var(){

    var test_random = (function (){
        var test_random = [test_arr[question],test_arr[random_var()],test_arr[random_var()],test_arr[random_var()]];
        for(var i=0; i<4; i++) {
            for(var j=0; j<4; j++) {
                if(i==j){
                }else if (test_random[i]==test_random[j]){
                    test_random[i]= random_var();
                }else  ;
            }
        }
        return test_random;
    }) ();

    mixer(test_random);
    mixer(test_random);






    var russian_var= ["first_var","second_var","third_var","fourth_var"];
    for(var i=0; i<4;i++){
        document.getElementById(russian_var[i]).innerHTML=words[test_random[i]].russian;
    }
    var char_var= ["first_ansver_char","second_ansver_char","third_ansver_char","fourth_ansver_char"];
    for(var i=0; i<4;i++){
        document.getElementById(char_var[i]).innerHTML=words[test_random[i]].char;
    }
    var music_var= ["first_ansver_sound","second_ansver_sound","third_ansver_sound","fourth_ansver_sound"];
    for(var i=0; i<4;i++){
        document.getElementById(music_var[i]).innerHTML="<audio id=\"sound_"+music_var[i]+"\" src=\"" + words[test_random[i]].sound +"\" ></audio>"
    }
    var pinyin_var= ["first_ansver","second_ansver","third_ansver","fourth_ansver"];
    for(var i=0; i<4;i++){
        document.getElementById(pinyin_var[i]).innerHTML=words[test_random[i]].pinyin;
        if (test_random[i] == test_arr[question]){
            document.getElementById("true_"+pinyin_var[i]).innerHTML="<button class=\"primary next\">Правильно!!</button>";
            $(".next").click(function (){
                fill();
            });
        } else {document.getElementById("true_"+pinyin_var[i]).innerHTML="<button class=\"danger next\">Попробуй ещё!!</button>";
            $(".next").click(function (){
                fill();
            });
        }
    }
}




$(".noun").change(function (){
    noun_bool = !noun_bool;
    $('.noun').prop('checked', noun_bool);
    setCookie('noun_bool',noun_bool);
    if (noun_bool) {
        $(".noun_tr").show();
    } else {
        $(".noun_tr").hide();
    }
    get_arr();
    return false;
});


$(".pronoun").change(function (){
    pronoun_bool = !pronoun_bool;
    $('.pronoun').prop('checked', pronoun_bool);
    setCookie('pronoun_bool',pronoun_bool);
    if (pronoun_bool) {
        $(".pronoun_tr").show();
    } else {
        $(".pronoun_tr").hide();
    }
    get_arr();
    return false;
});




function bool_val(){
    pronoun_bool= true;
    try{ pronoun_bool = getCookie('pronoun_bool'); }catch(err){console.log('cookies haven\'t '+err)};
    if(pronoun_bool=="false"){pronoun_bool=false}
    if (!pronoun_bool){ $(".pronoun").prop('checked', false)}

    noun_bool= true;
    try{ noun_bool = getCookie('noun_bool'); }catch(err){console.log('cookies haven\'t '+err)};
    if(noun_bool=="false"){noun_bool=false}
    if (!noun_bool){ $(".noun").prop('checked', false)}
}

//for(var counter=1; counter <=10; counter ++){
//    $('<div>').css({
//        "border": "solid 1px blue",
//        "height": "50px",
//        "margin":  "10px",
//        "text-align": "center",
//        "width": "100px"
//    }).html('<h1>'+ counter +'</h1>')
//        .appendTo('body')
//        .click((function(iCounter){
//            return function(){
//                alert(iCounter);
//            }
//        })(counter));
//}









//function all_z(){
//    try{ numeral_bool = getCookie('numeral_bool'); }catch(err){numeral_bool= true;console.log('cookies haven\'t :'+err)};
//    if(numeral_bool=="false"){numeral_bool=false}else{numeral_bool=true}
//    if (!numeral_bool){ $(".numeral").prop('checked', false)}
//
//
//    $(".numeral").change(function (){
//        numeral_bool = !numeral_bool;
//        $('.numeral').prop('checked', numeral_bool);
//        setCookie('numeral_bool',numeral_bool);
//        if (numeral_bool) {
//            $(".numeral_tr").show();
//        } else {
//            $(".numeral_tr").hide();
//        }
//        get_arr();
//        return false;
//    });
//
//}



//$(".verb").change(function (){
//    verb_bool = !verb_bool;
//    $('.verb').prop('checked', verb_bool);
//    if (verb_bool) {
//        $(".verb_tr").show();
//    } else {
//        $(".verb_tr").hide();
//    }
//    get_arr();
//    return false;
//});

//
//$(".subject").change(function (){
//    subject_bool = !subject_bool;
//    $('.subject').prop('checked', subject_bool);
//    if (subject_bool) {
//        $(".subject_tr").show();
//    } else {
//        $(".subject_tr").hide();
//    }
//    get_arr();
//    return false;
//});
`









$("#next").click(function (){
    fill();
});

$("#random").click(function (){
    document.getElementById('sound').play();
    return false;
});


$(".music1").click(function (){
    document.getElementById('sound_first_ansver_sound').play();
    return false;
});


$(".music2").click(function (){
    document.getElementById('sound_second_ansver_sound').play();
    return false;
});


$(".music3").click(function (){
    document.getElementById('sound_third_ansver_sound').play();
    return false;
});


$(".music4").click(function (){
    document.getElementById('sound_fourth_ansver_sound').play();
    return false;
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  HSK    SUMMARY


summary();

function summary() {
    var output = "";
    for (var i=0;i<test_arr.length;i++) {
if(words[test_arr[i]].noun){ output+="<tr class='noun_tr'>"}
if(words[test_arr[i]].pronoun){ output+="<tr class='pronoun_tr'>"}
if(words[test_arr[i]].verb){ output+="<tr class='verb_tr'>"}
if(words[test_arr[i]].subject){ output+="<tr class='subject_tr'>"}
if(words[test_arr[i]].numeral){ output+="<tr class='numeral_tr'>"}

        output += "<td class=\"char char_big\">" + words[test_arr[i]].char + "</td>" + " " + "<td class=\"pinyin\">" + words[test_arr[i]].pinyin + "</td>" + " " + "<td class=\"russian\">" + words[test_arr[i]].russian + "</td>" + " " + "<td class=\"english\" style=\"display:none\">" + words[test_arr[i]].english + "</td>" + "</tr>";
    }
    document.getElementById("place").innerHTML = output;

    return false;

}

$("#char").change(function () {

    if ($("#char").prop('checked')) {
        $(".char").show();
    } else {
        $(".char").hide();
    }
    return false;
});
//
//$("#pinyin").change(function () {
//
//    if ($("#pinyin").prop('checked')) {
//        $(".pinyin").show();
//    } else {
//        $(".pinyin").hide();
//    }
//    return false;
//});
var rus=["pinyin","pinyin"];

function lipa(rus){



    return function(){
            $("#"+rus).change(function () {
                if ($("#"+rus).prop('checked')) {
                    $("."+rus).show();
                } else {
                    $("."+rus).hide();
                }
                return false;
            });
        }
}
lipa(rus);



$("#english").change(function () {

    if ($("#english").prop('checked')) {
        $(".english").show();
    } else {
        $(".english").hide();
    }
    return false;
});




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      cookie

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// устанавливает cookie c именем name и значением value
// options - объект с свойствами cookie (expires, path, domain, secure)
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

// удаляет cookie с именем name
function deleteCookie(name) {
    setCookie(name, "", { expires: -1 })
}