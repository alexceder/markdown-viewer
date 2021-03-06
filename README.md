# Markdown Viewer (Chrome Extension)

View your markdowns in the browser with GitHub flavoured style.

## Usage

Extension not yet in store. For now:

1. Clone
2. ``bower install``
3. Open ``chrome://extensions`` in Chrome.
4. Enable developer mode.
5. Load the package.
6. Make sure Chrome has a compatible default encoding.
    - Just keep it UTF-8 everywhere and you should be fine.

## TODO

- Implement LaTeX support (working on implementing KaTeX in dev branch)
- Make it GUI customizable that may:
    - Edit which URLs gets rendered.
    - Add exceptions to sites that should not be rendered.
    - Only enable extension on local files.
    - Temporarily disable rendering (as in JSON Formatter [github.com/callumlocke/json-formatter]()).

## Logo/Icon

![The Markdown Viewer icon](icon.png "The Markdown Viewer icon")

## Thanks

Inspired by [https://github.com/borismus/markdown-preview]()

## License

[MIT](LICENSE)
