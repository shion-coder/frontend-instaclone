import * as Sentry from '@sentry/react';

/* -------------------------------------------------------------------------- */

const init = (): void => {
  Sentry.init({ dsn: 'https://b89704fe35194242909704399fc12785@o426791.ingest.sentry.io/5370025' });
};

const log = (error: unknown): void => {
  Sentry.captureException(error);
};

export default { init, log };
