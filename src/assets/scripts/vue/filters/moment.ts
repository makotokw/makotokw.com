import moment from 'moment';

export default function toDateFormat(value: moment.MomentInput, format: string): string {
  return moment(value).format(format);
}
