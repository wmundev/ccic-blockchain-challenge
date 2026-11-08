# Github URL of project
## Individual Github Repository
https://github.com/wmundev/ccic-blockchain-challenge

## Group Github Repository
https://github.com/wmundev/calpoly-rmit-ccic-capstone

# URL of deployed project
https://blockchain.cacyber.net

Credentials not needed

# Project setup instructions

Use Node.js 24 (the major version is pinned in `.node-version`) and pnpm 11.25.0,
as declared in `package.json`. The app uses Vite, React 17 and TypeScript;
Vitest runs the component tests. The migration retains React 17 and Material UI 4.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm start
```

Open http://localhost:3000 for development. Components containing JSX use the
`.jsx` or `.tsx` extension. Vite uses the root `index.html` as its entry point;
static files remain in `public/`.

```sh
pnpm test          # run the test suite once
pnpm test:watch    # run tests in watch mode
pnpm typecheck    # check TypeScript
pnpm build        # typecheck and create the production build in build/
pnpm serve        # preview the production build at http://localhost:4173
```

Commit `pnpm-lock.yaml` with dependency changes. CI installs with the frozen
lockfile, runs tests, and builds using the pinned Node and pnpm versions.

# Deployment

## Cloudflare Pages

In Workers & Pages, select the Pages project and update its build settings for
both production and preview deployments:

| Setting | Value |
| --- | --- |
| Production branch | `master` |
| Framework preset | React (Vite), or None with the explicit settings below |
| Root directory | Repository root (leave blank) |
| Build command | `pnpm build` |
| Build output directory | `build` |
| Build system | v3 |
| `NODE_VERSION` environment variable | `24` (or remove the override so `.node-version` is used) |
| `PNPM_VERSION` environment variable | `11.25.0` |

The output remains `build/`, matching the personal website and the old CRA build;
do not use Vite's default `dist/` when selecting the framework preset. The
committed pnpm lockfile replaces Yarn. Remove any old custom Yarn install/build
commands or version overrides. Automatic dependency installation should be
enabled (remove `SKIP_DEPENDENCY_INSTALL` if it was set).

Save the settings, clear the old build cache once, and retry the deployment of
the migration commit. The existing custom domain can stay attached.

Build configuration and tool version overrides are described in Cloudflare's
[build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
and [build image](https://developers.cloudflare.com/pages/configuration/build-image/)
documentation.

Offline caching has been removed. `public/service-worker.js` is a retirement
script at the previous worker URL: existing installations clear their old
Workbox caches and unregister when they check for an update. New visits do not
register a service worker. Keep this script deployed so returning users can
retire the old worker too.

## AWS S3 Hosting

Run `pnpm build` and upload the contents of `build/` to the static website bucket,
using `index.html` as the index document. See the
[AWS static website hosting instructions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html).

# Release notes
## [1.0.10] - 2021-05-30
### New features
- UI
- content changes
- add credits

## [1.0.9] - 2021-05-27
### New features
- N/A

## [1.0.8] - 2021-05-26
### New features
- N/A

## [1.0.7] - 2021-05-23
### New features
- Is a drag and drop challenge now
- Include many different types of hints to help the player
- Implement the storyline in the application
- Included elements of blockchain knowledge required to complete the challenge
- Add in README instructions for starting application, and deploying application to S3

## [1.0.6] - 2021-05-09
### New features
- Offline caching

## [1.0.5] - 2021-05-08
### New features
- Icon update and title update

## [1.0.4] - 2021-05-06
### New features
- Add in more hints for the challenge and add in more elements and beautify UI

## [1.0.3] - 2021-04-28
### New features
- UI change - center div

## [1.0.2] - 2021-04-24
### New features
- Blockchain challenge now changed to a drag and drop challenge instead of inputting an answer


## [1.0.1] - 2021-04-21
### New features
- Added feature to submit form
- Fix images not loading bug

## [1.0.0] - 2021-04-19
### New features
- Added new blockchain challenge
- Add images flashing every 15 seconds


# Changelog

## [1.0.10] - 2021-05-30
### Changed
- add test documentation
- make content changes requested by the CalPoly team
- Change text
- Update UI Styling
- add credits for rmit and calpoly team

## [1.0.9] - 2021-05-27
### Changed
- fix unit tests

## [1.0.8] - 2021-05-26
### Changed
- Update Github Actions for unit testing

## [1.0.7] - 2021-05-23
### Changed
- Complete refactor of blockchain challenge
- Is a drag and drop challenge now
- Include many different types of hints to help the player
- Implement the storyline in the application
- Included elements of blockchain knowledge required to complete the challenge
- Add in README instructions for starting application, and deploying application to S3
- remove dead code

## [1.0.6] - 2021-05-09
### Changed
- Add pwa service worker for offline caching

## [1.0.5] - 2021-05-08
### Changed
- Icon update and title update

## [1.0.4] - 2021-05-06
### Changed
- Add in more hints for the challenge and add in more elements and beautify UI

## [1.0.3] - 2021-04-28
### Changed
- Remove debugger and center div

## [1.0.2] - 2021-04-24
### Changed
- Blockchain challenge now changed to a drag and drop challenge instead of inputting an answer


## [1.0.1] - 2021-04-21
### Added
- Added feature to submit form

### Fixed
- Fix images not loading bug

## [1.0.0] - 2021-04-19
### Added
- Added new blockchain challenge
- Add images flashing every 15 seconds
