class validationUtil {

  static isEmpty(value) {
    return (!value ? true : false);
  }

  static isNumber(value) {
    return (value == parseInt(value, 10) ? true : false);
  }

  static isEqualObject(obj1, obj2) {
    return (JSON.stringify(obj1) === JSON.stringify(obj2));
  }

}

export default validationUtil;