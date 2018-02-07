class validationUtil {

  static isEmpty(value) {
    return (!value ? true : false);
  }

  static isNumber(value) {
    return (value == parseInt(value, 10) ? true : false);
  }

}

export default validationUtil;