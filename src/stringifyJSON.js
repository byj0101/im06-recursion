// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 // your code goes here
 var result = [];

 if(typeof obj === 'boolean' || typeof obj === 'number') return '' + obj;
 if(typeof obj === 'string') return '"' + obj + '"';
 if(typeof obj === 'undefined' || typeof obj === 'function') return '';
 if(obj === null) return 'null';


 if(Array.isArray(obj)) {
   for(var i in obj) result.push(stringifyJSON(obj[i]));
   return "[" + result + "]";
 }

 if(typeof obj === 'object') {
   for(var key in obj) {
     if(typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
       result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
     }
   }
   return "{" + result + "}";
 }
};
