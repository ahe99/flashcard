import moment from 'moment';

export const getFormattedTimestamp = date => {
  return moment(date.toDate()).format('YYYY/MM/DD');
};
