# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then produce a production build
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test runner configured in this project.

## Architecture

A single-page quiz app (Vite + React 18 + TypeScript + Tailwind + shadcn/ui, `react-router` v7). UI text is in Russian. Deployed on Vercel; `vercel.json` rewrites all non-asset paths to `/` for client-side routing. The `@/*` import alias maps to `src/*`.

### Per-subject structure

The app is organized by subject (cyber, history, philosophy, academy, religia, mta, db). Each subject is three parallel pieces:

- **Data** — `src/data/<subject>.ts` exports an `IQuestion[][]`: an outer array of *variants* (билеты), each variant being an array of questions. See `src/types/index.d.ts` for `IQuestion` / `IOption`.
- **Page** — `src/pages/<Subject>/<Subject>Page.tsx` renders `<List>` over the variants, letting the user pick a variant or "Общий" (all variants flattened).
- **Quiz** — `src/pages/<Subject>/<Subject>Quiz.tsx` resolves the current question from the route params and renders the shared `<Quiz>` component.

Only **cyber** is currently wired up. Every other subject's routes (in `src/App.tsx`), its main-menu button (in `src/pages/MainPage.tsx`), and its imports are commented out but present. To re-enable a subject, uncomment those blocks.

Note: some quiz files have a trailing space in the filename (`CyberQuiz .tsx`, `AcademyQuiz .tsx`) — match the exact name when importing.

### Routing

- `/` → `MainPage` (subject menu)
- `/:endpoint` → subject page (variant list)
- `/:endpoint/:index/:id` → single question, where `index` is the variant index **or the literal string `"total"`** (flatten all variants), and `id` is the question id.

`TEndpoints` (in `src/types/index.d.ts`) is the union of valid endpoint strings; add a new subject's endpoint there.

### Quiz state (`src/store/questionStore.ts`)

A single Zustand store persisted to `localStorage` under the key `"questions"`. Key fields:

- `questions` — the active (shuffled) question set for the current run
- `currentOrder` — index into `questions` of the current question
- `result` — a **string of `"1"`/`"0"` characters**, appended one char per answered question (`correct()` → `"1"`, `wrong()` → `"0"`). `OnFinish.tsx` derives the score by counting `"1"`s.

Flow: `List.onStart` shuffles a variant and calls `start()`, then navigates to the first question. `Quiz` checks the answer locally and calls `correct()`/`wrong()`, then `next()` + navigate on advance. `OnFinish` shows a recharts pie of the result and calls `finish()` to reset the store.

Questions and their options are shuffled with `shuffle()` from `src/lib/utils.ts` (also exports `cn` for Tailwind class merging).

### Components & UI

Shared quiz UI lives in `src/components/` (`Quiz`, `List`, `Options`, `Actions`, `Alert`, `Heading`, `OnFinish`). shadcn/ui primitives are in `src/components/ui/` (configured via `components.json`, base color gray, lucide icons). Theme is forced to dark via `useTheme()` (see `src/hooks/useTheme.ts`); there is no light/dark toggle.
