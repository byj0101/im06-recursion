// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var array = [];
  var findClass = function(element){
    if(element.classList && element.classList.contains(className)){
      array.push(element);
      }
        for(var i = 0; i<element.childNodes.length; i++){
          findClass(element.childNodes[i]);
    }
  };
  findClass(document.body);
  return array;
};


// document.body, element.childNodes, element.classList
