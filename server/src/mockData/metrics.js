// Key metric dummy dataset
const METRIC_DATA = [
    {
      title: 'Session Duration',
      info: '(mins)',
      value: 100 
    }, 
    {
      title: 'Active Users',
      info: 'Daily Active Users (DAU) / Monthly Active Users (MAU)',
      daily: 988, 
      monthly: 15000,
      value: function() {
        return Math.floor((this.daily/this.monthly) * 100);
      } 
    },
    {
      title: 'Session Pages',
      info: 'Pages per session',
      value: 9
    }, 
    {
      title: 'Page Load Time',
      info: '(secs)',
      value: 3
    }
];

export default METRIC_DATA;