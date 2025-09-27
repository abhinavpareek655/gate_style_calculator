# GATE Style Scientific Calculator

This project provides a GATE-style scientific calculator that helps students practice with the same look-and-feel as the calculator used in the GATE examination. It is packaged as a Windows desktop application using Electron so the calculator can be run locally.

This repository is open source — contributions, issues and forks are welcome.

---

## Key points

- The UI mirrors an exam-style scientific calculator to help students become familiar with controls and functions used in the exam.
- The expression evaluator is implemented with a shunting-yard parser and RPN evaluator (no `eval()`), limiting input to recognized operators, numbers, parentheses and allowed functions.

---

## Features

- GATE-style scientific calculator UI
- Hardened evaluator (shunting-yard + RPN)
- Common math functions and constants (sin, cos, tan, sqrt, ln, log, exp, abs, fact, pi, e)
- Two-argument functions: `yroot(a,b)` and `ylog(a,b)` (use a comma between args)
- Frameless draggable window with native-like controls
- Packaging configuration for Windows installer (electron-builder)

---

## Quick setup (local)

1. Clone this repository and install dependencies:

    ```powershell
    git clone <repository-url>
    cd <your-clone-folder>
    npm install
    ```

2. Run in development:

    ```powershell
    npm start
    ```

3. Build a Windows installer (optional):

    ```powershell
    npm run dist
    ```

    The installer will be placed in `dist/` when the build finishes. If you prefer a portable packaged app instead of an installer, run `npm run pack-win` (requires `electron-packager`).

    Notes:
    - The app loads jQuery from a CDN by default; replace the script with a local copy (`js/jquery-3.7.1.min.js`) if you require offline usage.
    - For stable Windows builds, provide a multi-size ICO at `build/icon.ico` to avoid conversion issues on some systems.
    - The evaluator implementation is in `js/oscZenoedited.js` and avoids `eval()`.

---

## Security and evaluation

The evaluator restricts inputs to a safe grammar and recognized functions/operators. If you extend the evaluator, add tests and validate inputs to limit risk of misuse.

---

## Contributing

Feel free to open issues or pull requests. Suggested contribution steps:

1. Fork the repository
2. Create a feature branch
3. Add tests or manual verification instructions if you change parser behavior
4. Open a pull request describing your changes and testing steps


