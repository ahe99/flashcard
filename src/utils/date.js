import moment from 'moment';

export const formattedTimestampToDate = date => {
  return moment(date.toDate()).format('YYYY/MM/DD');
};

export const formattedTimestampToDateTime = date => {
  return moment(date.toDate()).format('YYYY/MM/DD HH:mm:ss');
};
