// Return the type of passed argument's prototype minus the [object ...] bit
function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// Check the type of argument's prototype and compare to a string
function checkType (obj, type) {
  if ('string' !== getType(type)) {
    return getType(obj);
  } else {
    return type.toLowerCase() === getType(obj);
  }
}
