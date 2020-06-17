import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://cf18dc0e69f94698b0daa1ec5aacc95b@sentry.io/5174495"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
