**English** - [Français]({{ 'fr' | absolute_url }})

Drag and drop this button to your bookmark bar and click it when you are on your twitch channel page:

<p class="bookmarklet-button"><a href="{% include greet-newcomers.bookmarklet %}" title="Drag me to your bookmarks toolbar">Greet Newcomers</a></p>

This will help you spot newcomers in your chat by adding a 👋 emoji on their first message.

![example screenshot]({{ '/assets/screenshot.png' | absolute_url }})

You can also manually create the bookmark by copy/pasting this into the URL section of a new bookmark:

```
{% include greet-newcomers.bookmarklet %}
```

> This is scary, what does this code do? 😨

It just adds a routine to the webpage that marks new viewers in chat. It doesn't spy on anything. It is only visible to you.

You can read the executed code [here](https://github.com/thomaslule/twitch-greet-newcomers/blob/master/greet-newcomers.js).

The code is delivered by [jsDelivr](https://www.jsdelivr.com/).
