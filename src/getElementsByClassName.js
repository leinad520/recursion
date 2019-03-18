// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// var getElementsByClassName = function(className) {
//   let newArr = [];
//
//   function recursiveFunc(el) {
//     for (let i = 0; i < el.length; i++) {
//       if (el[i].className.split(" ").includes(className)) {
//         newArr.push(el[i]);
//       }
//       if (el[i].children) {
//         recursiveFunc(el[i].children);
//       }
//     }
//   }
//   recursiveFunc(document.body.children);
//   return newArr;
// };

var getElementsByClassName = function(className) {
  let newArr = [];
  function recursiveFunc(el) {
    if (el.classList !== undefined && el.classList.contains(className)) {
      newArr.push(el);
    }
    if (el.childNodes) {
      el.childNodes.forEach(childNode => recursiveFunc(childNode));
    }
  }
  recursiveFunc(document.body);
  return newArr;
};
