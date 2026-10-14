export function getCountdown(target, now = new Date()) {
  const remaining = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    complete: remaining <= 0,
  };
}

export function createCalendarEvent(target) {
  const stamp = (date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const start = stamp(target);
  const end = stamp(new Date(target.getTime() + 60 * 60 * 1000));

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//GOTHA//Launch Reminder//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:gotha-launch-20261114@gotha',
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'SUMMARY:GOTHA Launch',
    'DESCRIPTION:The wait ends. Discover GOTHA.',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n');
}
