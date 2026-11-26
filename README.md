# Developer Journey Research Lab

A product user research work sample for investigating the path from sign-up to a first successful API call. A portfolio project by Shivangi Priya.

Current interactive version with sourced documentation observation: https://shivangipriya.github.io/developer-journey-research-lab/

Earlier interactive version, without the later documentation observation, remains at https://developer-journey-research-lab.netlify.app/

## The idea

A funnel can locate a gap. It cannot explain intent. This prototype connects an ordered synthetic funnel to session evidence, alternative explanations, neutral usability tasks and a research brief. It demonstrates how to approach a study, not the results of a completed study.

## Try the workflow

Start with the guided story: choose one of three competing explanations, compare three synthetic cases and choose the next check. Consequences change with the selection; they are proposed research choices, not study results. Reset exploration resets story choices only, preserving custom evidence notes. Reload clears all in-memory changes, so export before leaving.

1. Open Journey. Compare All sessions and First API project. Select First success.
2. Inspect session evidence. Read the event note before making a claim.
3. Add an Observation, Hypothesis or Decision, with an alternative explanation and a next study. Saving requires all three fields.
4. Open Study plan. Review the task and moderator notes. Switch the simulated error to see how the research stimulus changes.
5. Export a Markdown research brief to retain the evidence trail and limits.

## What is real

- Working cohort filters and an ordered five-step funnel.
- Session-level event timelines and notes.
- An editable evidence board that separates observations, hypotheses and decisions.
- A proposed three-task moderated study, with neutral probes and privacy guardrails.
- Simulated authentication, credits and capacity-error stimuli informed by public documentation.
- A downloadable Markdown brief.

## What is synthetic or not established

All 24 bundled sessions, timestamps and notes are invented. They are not Sarvam customer records or interview transcripts. The seven-day window is a sample definition, not collected behavioural data. Segment differences do not establish causality or statistical significance. No interviews, live API tests, product improvements or conversion lifts have been established. This is independent portfolio work, not a Sarvam product, audit or commissioned study.

The underlying sample uses ordered session IDs, not unique people. Missing events do not prove abandonment and may reflect incomplete instrumentation. Median time to first success includes successful sessions only and therefore excludes unsuccessful attempts. A returned event in the sample is not a validated retention measure.

## Data and privacy

No backend, analytics, cookies, external fonts, authentication, key input or Sarvam API requests. Working notes are kept in memory and reset on reload. Do not enter private information, customer data or secrets. Export creates a local Markdown download. Public documentation links leave the site when clicked.

## Implementation

React + strict TypeScript + Vite. Core funnel, validation, summary and export logic live in `src/core.ts`; interface in `src/main.tsx`; styles in `src/style.css`. Static output uses relative paths for independent hosting. The current GitHub Pages deployment build is in docs/. The source in src/ includes the interactive story and separate dated documentation observation. Netlify retains the earlier interactive version. GitHub Pages can serve main /docs. Rebuild with npm run build, then replace docs/ with the contents of dist/. The current Pages deployment uses versioned links to its existing asset filenames; the documentation screenshot is stored in docs/1-docs-retry-observation.png. No paid services or API credits are needed.

```
npm ci
npm run typecheck
npm test
npm run build
node tests/browser.mjs
```

## Source notes

Checked 26 November 2026:
- Role context: https://www.sarvam.ai/careers/jobs/0a5bf81d-3370-47e6-88f4-14aa5102ba72
- Public quickstart: https://docs.sarvam.ai/api/getting-started/quickstart
- Error distinctions: https://docs.sarvam.ai/api/getting-started/errors-troubleshooting

The error examples are for the model API path. The documentation distinguishes 403 invalid keys, 402 insufficient credits, and several 429 causes. Document AI can use 401 instead. This demo is not a comprehensive error simulator or a substitute for current official documentation.

Method guidance, checked 26 November 2026:
- Nielsen Norman Group, realistic neutral tasks and avoiding clues: https://www.nngroup.com/articles/test-tasks-quant-qualitative/
- GOV.UK Service Manual, moderated observation, consent and task design: https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing

These are method references, not endorsements or evidence that this prototype has been validated.

## Limitations and next research step

Run a consented, moderated study with first-time API users and experienced builders in a safe environment. Observe without leading, record instrumentation gaps, seek disconfirming evidence and revise the proposed explanations. Validate whether the framework helps a real research team before making any usefulness or impact claim.

## License

MIT License. Copyright (c) 2026 Shivangi Priya.

## Dated documentation observation

The current Pages version separately records a static inspection of the public error-recovery page on 26 November 2026. Its prose excludes seat-budget exhaustion from backoff while the Python retry helper checks HTTP status alone. This is a documentation-example consistency observation, not live API execution, a user finding or demonstrated product impact. The synthetic cohort remains separate. Official source: https://docs.sarvam.ai/api/getting-started/errors-troubleshooting#retry-with-exponential-backoff
