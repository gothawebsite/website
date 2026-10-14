import test from 'node:test';
import assert from 'node:assert/strict';
import { getCountdown, createCalendarEvent } from '../countdown.mjs';

const launch = new Date('2026-11-14T15:00:00+05:30');

test('countdown shows 31 days at the matching time one month before launch', () => {
  assert.deepEqual(getCountdown(launch, new Date('2026-10-14T15:00:00+05:30')), {
    days: 31,
    hours: 0,
    minutes: 0,
    seconds: 0,
    complete: false,
  });
});

test('countdown handles the final second and stops at zero after launch', () => {
  assert.deepEqual(getCountdown(launch, new Date(launch.getTime() - 1000)), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1,
    complete: false,
  });
  assert.deepEqual(getCountdown(launch, new Date(launch.getTime() + 1000)), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    complete: true,
  });
});

test('calendar download contains the launch moment in UTC', () => {
  const event = createCalendarEvent(launch);
  assert.match(event, /BEGIN:VCALENDAR\r\n/);
  assert.match(event, /DTSTART:20261114T093000Z\r\n/);
  assert.match(event, /SUMMARY:GOTHA Launch\r\n/);
  assert.match(event, /END:VCALENDAR\r\n$/);
});
