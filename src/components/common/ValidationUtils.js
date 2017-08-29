
/*
// input parameters:
// - modalprops: state in the modal
// - fieldValid is an attribute of modalProps.validate where the validity of a specific field is stored
// - errorTextField is an attribute of modalProps.validate and can be used as a field in the html for showing the error message
// - errorText is the message that is set in the errorTextField
// - condition is when a field is valid
// - nullable
// - value
*/

export var validateField = (modalProps, fieldValid, errorTextField, errorText, condition, nullable, value) => {
  if (!nullable && (value === undefined || value === '' || value === null)) {
    modalProps.validation[fieldValid] = false;
    modalProps[errorTextField] = 'This field cannot be empty';
  }
  else if (!condition) {
    modalProps.validation[fieldValid] = false;
    modalProps[errorTextField] = errorText;
  }
  else {
    modalProps.validation[fieldValid] = true;
    modalProps[errorTextField] = '';
  }
  return modalProps;
};


export var allValid = (validationObject) => {

  var result = Object.keys(validationObject).map((key) =>
    validationObject[key]
  );

  if (result.indexOf(undefined) !== -1 || result.indexOf(false) !== -1) {
    return false;
  }
  return true;
};
