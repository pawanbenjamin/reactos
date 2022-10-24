function spyOn (func) {
  let [callCount, calledWith, returnVals] = [0, [], []];
  function spy (...args) {
    let returnVal = func(...args);
    callCount++;
    calledWith = calledWith.concat(args);
    returnVals.push(returnVal);
    return returnVal;
  }
  spy.getCallCount = function () {
    return callCount;
  };
  spy.wasCalledWith = function (val) {
    return calledWith.includes(val);
  };
  spy.returned = function (val) {
    return returnVals.includes(val);
  };
  return spy;
}

module.exports = spyOn;
