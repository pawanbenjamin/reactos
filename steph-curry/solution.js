function curry( originalFunc ) {
	var originalLength = originalFunc.length// how many arguments the original function takes
	function resolver(...args) {
		var memory = args
		var whatToReturn = function(...args) {
			var newMemory = memory.concat(args)// the concatting (non-mutating!) is crucial to allow "branching"
			if (newMemory.length >= originalLength) {
			  return originalFunc(...newMemory)
			} else {
			  return resolver(...newMemory)
			}
		}
		return whatToReturn
	}
	return resolver()// return initial resolver (invoked!) with ZERO arguments
}
