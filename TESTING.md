# Testing

Verified 26 November 2026.

- Strict TypeScript check and production build passed.
- 41 automated logic tests passed. These include 24 timeline fixture checks, ordered funnel reconciliation, duplicate exclusion, invalid inputs, empty cohorts, median cases, report limitations and study-task definitions.
- 27 browser assertions passed: rendering, cohort changes, session handoff, required claim fields, escaped text, claim removal, moderator notes, simulated errors, Markdown export, reload reset and no browser exceptions. These include layout overflow checks across all four tabs at 320, 390, 768 and 1440 pixels.
- Desktop and phone layouts were visually checked.

These checks cover the supplied synthetic data and implemented interactions. They do not establish research validity, accessibility certification, production security, real API behaviour or user benefit. No live Sarvam API was called.

Reproduce with npm ci, npm run typecheck, npm test and npm run build. The browser checks in tests/browser.mjs require an installed Chrome browser. Set CHROME_PATH to its executable.
