/* 
    TITLE: Coderbyte Solutions
    AUTHOR: MISTY MORREYN
*/

// EASY DIFFICULTY

/* Title: First Reverse - Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

var str;

function FirstReverse(str) { 
   var strRev = "";
	for (var i = (str.length-1); i > -1; i--) {
    strRev += str.charAt(i);
       
    }

  return strRev; 
         
}
*/

/*
// Title: Longest Word - Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

var sen = "flakdjfla@#!@%ksdjfl super ju$@#$$nk why oh god hellahellahella!!hellahellahellahella";

sen = sen.replace(/\W && \S/g, "");
var resArray = sen.split(" ");
var lgth = 0;
var longest;

function LongestWord(sen) { 
	for (var i = 0; i < resArray.length; i++) {
		if (resArray[i].length > lgth) {
			lgth = resArray[i].length;
			longest = resArray[i];
		}
}
  
sen = longest;
  
return sen; 
         
}

LongestWord(readline()); 
*/  