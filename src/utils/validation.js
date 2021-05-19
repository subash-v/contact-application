export function validateEmpty(val) {
  if (val) {
    return true;
  } else {
    return false;
  }
}
export function checkEmptyObject(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}
