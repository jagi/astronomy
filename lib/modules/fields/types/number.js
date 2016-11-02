import {
  isNumber,
  isObject
}
from 'lodash';
import Type from '../type.js';
import Validators from '../../validators/validators.js';

Type.create({
  name: 'Number',
  class: Number,
  cast(value) {
    if (isNumber(value) || isObject(value)) {
      return value;
    }
    return Number(value);
  },
  validate(args) {
    Validators.number(args);
  }
});