# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-07-01

### Added

- Added "Gear Stack" (Vue 3 + FastAPI survival gear management app) to the projects list.
- Added dense mode for the projects and technologies sections, with a compact single-column layout on mobile.
- Added a project detail dialog for dense mode, including a dedicated `ProjectCardBody` component.
- Added sub-projects support to `ProjectCard` and project data.
- Added `@astrojs/sitemap` integration and a `robots.txt` for improved SEO.
- Added project search state persistence via URL query parameters.

### Changed

- Renamed project status terminology from "Active"/"Archived" to "Live"/"Retired".
- Reduced the max width of the layout and footer containers for better alignment.
- Refactored `ProjectCard` into `ProjectCard` + `ProjectCardBody` for clearer structure.
- Refined technology lists across several projects (added JavaScript/TypeScript where applicable).
- Updated project dependencies (`@lucide/vue`, `@astrojs/check`, and others).
- The filter clear button in the projects section now only appears when a filter is active.

### Fixed

- Fixed nav bar links overflowing horizontally on mobile.
- Fixed dense project list overflow and dialog header layout on mobile (badges/close button repositioned above the title).

## [1.2.0] - 2025-08-08

Initial tracked release.

[1.3.0]: https://github.com/jm-sky/madeyski.org/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/jm-sky/madeyski.org/releases/tag/v1.2.0
