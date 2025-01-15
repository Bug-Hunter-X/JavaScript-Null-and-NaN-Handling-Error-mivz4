# JavaScript Null and NaN Handling Error

This repository demonstrates a common error in JavaScript related to handling null values and potential `NaN` results from arithmetic operations. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

The issue arises when the function attempts arithmetic operations on `null` values.  The corrected version utilizes type checking and explicit handling to prevent `NaN` outputs and improve robustness.