import moment from 'moment';

/**
 * @param value
 * @param {string} format
 * @returns {string}
 */
export default function toDateFormat(value, format) {
  return moment(value).format(format);
}
