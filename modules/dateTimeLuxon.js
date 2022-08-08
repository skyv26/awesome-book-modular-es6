import { DateTime } from './luxon.min.js';

class DateTimeLuxon {
  constructor() {
    this.dt = '';
    this.options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  }

  getTime() {
    this.dt += DateTime.now().setLocale('en-US')
      .toLocaleString(this.options)
      .split(',')
      .splice(1);
    this.dt += ', ';
    this.dt += DateTime.now().setLocale('en-US').toLocaleString(DateTime.TIME_WITH_SECONDS);
    return this.dt;
}
}

export default DateTimeLuxon;