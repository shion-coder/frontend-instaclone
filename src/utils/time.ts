import { formatDistanceStrict, format, isToday } from 'date-fns';

/* -------------------------------------------------------------------------- */

/**
 * Convert time distance to display
 */

export const formatDateDistance = (endDate: string): string => {
  const format = formatDistanceStrict(new Date(), new Date(endDate));

  /**
   * Split to convert second word
   */

  const duration = format.split(' ');

  /**
   * Get first character of word ( m in minutes, h in hours ), if is s then change to 'Just now'
   */

  duration[1] = duration[1].substring(0, 1);

  if (duration[1] === 's') {
    return 'Just now';
  }

  return duration.join('');
};

/**
 * Convert time to display in post time
 */

export const formatDate = (date: string): string => {
  const newDate = new Date(date);

  return isToday(newDate) ? formatDateDistance(date) : format(newDate, 'MMMM d');
};
