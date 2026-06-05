import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  workers: isCI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    isCI
      ? {
          name: 'chromium',
          use: {
            ...devices['Desktop Chrome'],
          },
        }
      : {
        name: 'chrome',
        use: {
          browserName: 'chromium',
          channel: 'chrome',
        },
      },
],
});