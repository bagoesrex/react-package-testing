# Croner

[`croner`](https://www.npmjs.com/package/croner) package in a React project for experimenting with scheduled tasks using cron syntax.

## What is Croner?

Croner is a modern cron scheduler for JavaScript. It allows you to execute tasks on a schedule using the familiar cron format, with support for:

- Timezones
- Graceful stopping
- Triggering manually
- Next run preview

> ⚠️ Note: Croner is primarily designed for Node.js environments. Use in React (browser) only for experimentation, as tasks will run as long as the component is mounted.

## Quick examples

```javascript
// Basic: Run a function at the interval defined by a cron expression
const job = new Cron("*/5 * * * * *", () => {
  console.log("This will run every fifth second");
});

// Enumeration: What dates do the next 100 sundays occur on?
const nextSundays = new Cron("0 0 0 * * 7").nextRuns(100);
console.log(nextSundays);

// Days left to a specific date
const msLeft = new Cron("59 59 23 24 DEC *").nextRun() - new Date();
console.log(
  Math.floor(msLeft / 1000 / 3600 / 24) + " days left to next christmas eve"
);

// Run a function at a specific date/time using a non-local timezone (time is ISO 8601 local time)
// This will run 2024-01-23 00:00:00 according to the time in Asia/Kolkata
new Cron("2024-01-23T00:00:00", { timezone: "Asia/Kolkata" }, () => {
  console.log("Yay!");
});
```

## Quick patterns

```
// ┌──────────────── (optional) second (0 - 59)
// │ ┌────────────── minute (0 - 59)
// │ │ ┌──────────── hour (0 - 23)
// │ │ │ ┌────────── day of month (1 - 31)
// │ │ │ │ ┌──────── month (1 - 12, JAN-DEC)
// │ │ │ │ │ ┌────── day of week (0 - 6, SUN-Mon)
// │ │ │ │ │ │       (0 to 6 are Sunday to Saturday; 7 is Sunday, the same as 0)
// │ │ │ │ │ │
// * * * * * *
```
