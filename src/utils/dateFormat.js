import { format, isYesterday, isToday } from 'date-fns'

export const dateFormat = (date) => {
  switch (true) {
    case isYesterday(date):
      return 'Yesterday';
    case isToday(date):
      return 'Today';
    
    default:
      return format(date, 'dd MMM');
  }
}
