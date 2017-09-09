
/*
// input parameters:
// - errorTextProps: state object where error texts are stored
// - errorTextField is an attribute of errorTextProps and can be used in the html for showing the error message
// - errorText is the message that is set in the errorTextField
// - condition is when a field is valid
// - nullable is if the field can be zero or not
// - value is the field that is validated
*/

export var validateField = (errorTextProps, errorTextField, text, condition, nullable, value) => {

  if (!nullable && (value === undefined || value === '' || value === null)) {
    errorTextProps[errorTextField] = 'This field cannot be empty';
  }
  else if (!condition) {
    errorTextProps[errorTextField] = text;
  }
  else {
    errorTextProps[errorTextField] = null;
  }
  return errorTextProps;
};


export var allValid = (validationObject) => {

  for (var i in validationObject) {
    if (validationObject[i] !== null) {
      return false;
    }
  }
  return true;
};
