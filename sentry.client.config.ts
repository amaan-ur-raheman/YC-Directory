import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://141092632e8fe916c474a58811e07deb@o4509101087326208.ingest.de.sentry.io/4509101089620049",

  // Note: if you want to override the automatic release value, do not set a
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "system",
      }),
  ]
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
