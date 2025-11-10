# GameApp

<div style="display: flex; justify-content: center;">
	<img src="assets/video/Simulator%20Screen%20Recording%20-%20iPhone%2014%20Pro%20Max%20-%202025-11-10%20at%2013.34.04.gif" alt="App Demo" width="350" />
</div>

This is a small React Native app that implements a number guessing game.

The demo recording for the app is included as a GIF at `assets/video/Simulator Screen Recording - iPhone 14 Pro Max - 2025-11-10 at 13.34.04.gif`. When you push this repository to GitHub, the GIF will render automatically in the README.

## Features

- Main screen to enter a secret number (`MainScreen`).
- Game screen where the app guesses the number and the user gives hints (`StartGame`).
- Game over screen that shows the guessed number and the number of rounds, with a button to start a new game (`GameOver`).
- Centralized color palette at `components/UI/colors.ts` to keep styling consistent.

## Project structure (short)

- `App.tsx` — entry point and simple screen switching based on local state.
- `screens/MainScreen.tsx` — UI for entering a number.
- `screens/StartGame.tsx` — game logic and guessing flow.
- `screens/GameOver.tsx` — result screen.
- `components/UI/CustomButton.tsx`, `CustomTitle.tsx` — small UI components.
- `components/UI/colors.ts` — central colors file.
- `assets/video/` — demo recordings (GIF) showing the app in action.

## Run locally

1. Clone the repo to your machine.

2. Install dependencies:

```bash
npm install
```

3. Start the project with Expo (or run on a simulator/device):

```bash
npm start
# then open in Expo Go or an iOS/Android simulator
```

4. (Optional) TypeScript check:

```bash
npx tsc --noEmit
```

## Demo

The demo animation is embedded at the top of this README. The source GIF is located at:

`assets/video/Simulator Screen Recording - iPhone 14 Pro Max - 2025-11-10 at 13.34.04.gif`

## Notes & next steps

- I can replace hard-coded color values across the project so every component uses `Colors.*` if you want a full, consistent theme.
- I can also expand the `components/UI/colors.ts` file with extra tokens (background, text, success, danger, etc.) if you prefer.
- If you want, I can prepare a `.gitignore`, set up a GitHub repository, and push the project for you.

---

If you'd like any changes (translate back to Arabic, add more instructions, include screenshots), tell me and I'll update the README.
