// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null || obj === Infinity || obj === NaN) {
    return "null";
  }
  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (typeof obj === "function" || typeof obj === undefined) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    let newArr = [];
    if (!obj.length) {
      return "[]";
    } else if (obj.length) {
      obj.forEach(i => {
        newArr.push(stringifyJSON(i));
      });
      return "[" + newArr.join() + "]";
    }
  }

  if (typeof obj === "object") {
    let newArr = [];
    for (let key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        continue;
      } else {
        newArr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return "{" + newArr.join() + "}";
  }
};
