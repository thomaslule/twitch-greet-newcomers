# twitch-greet-newcomers

This is a bookmarklet that helps you spot newcomers in your twitch chat by adding a 👋 emoji on their first message.

To install and use this tool, visit the [project page](https://thomaslule.github.io/twitch-greet-newcomers/).

If you want to build it yourself:

- The script that is added to the twitch page is `greet-newcomers.js`
- `npm run build-external` to build `greet-newcomers-external.bookmarklet`, a bookmarklet that get the script from the CDN
- `npm run build-local` to build `greet-newcomers-local.bookmarklet`, a bookmarklet that directly contains the script (this one won't get the updates)
- `npm run build-docs` will regenerate the bookmarklet code visible in the docs

To serve the docs locally:

```
cd docs
bundle exec jekyll serve
```

To update the docs:

```
cd docs
bundle update
```
