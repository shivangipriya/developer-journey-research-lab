# Testing

Verified 26 November 2026.

- Strict TypeScript check and production build passed.
- 41 automated logic tests passed. These include 24 timeline fixture checks, ordered funnel reconciliation, duplicate exclusion, invalid inputs, empty cohorts, median cases, report limitations and study-task definitions.
- 27 browser assertions passed: rendering, cohort changes, session handoff, required claim fields, escaped text, claim removal, moderator notes, simulated errors, Markdown export, reload reset and no browser exceptions. These include layout overflow checks across all four tabs at 320, 390, 768 and 1440 pixels.
- 34 combined edge assertions passed against the anonymous Netlify production URL: nine hypothesis/check combinations, three evidence cases, Markdown export, blank and 3000-character claims, four workbench tabs at 320/390/768/1440 pixels, story reset preserving custom findings, reload restoring default findings, and no uncaught runtime errors.
- Desktop and phone layouts were visually checked. The free Netlify badge is visible.
- Reset exploration affects story choices only. Custom findings survive that reset but are not saved after reload. Export downloads them locally.

These checks cover the supplied synthetic data and implemented interactions. They do not establish research validity, accessibility certification, production security, real API behaviour or user benefit. No live Sarvam API was called.

Reproduce with npm ci, npm run typecheck, npm test and npm run build. The browser checks in tests/browser.mjs require an installed Chrome browser. Set CHROME_PATH to its executable.

Run the combined check with node tests/combined.mjs. Set BASE_URL to test another deployment or local server, and CHROME_PATH if Chrome is not at /usr/bin/google-chrome.
