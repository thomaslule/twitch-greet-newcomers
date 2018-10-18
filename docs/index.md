**English** - [français]({{ 'fr' | absolute_url }})

Drag and drop this link to your bookmark bar and click it when you are on your twitch channel page:

**<a href="{% include greet.bookmarklet %}">Greet Newcomers</a>**

This will help you spot newcomers in your chat by adding a 👋 emoji on their first message.

You can also manually create the bookmark by copy/pasting this into the URL section of a new bookmark:

```
{% include greet.bookmarklet %}
```

> This is scary, what does this code do? 😨

It just scans the chat to find new viewers and it forgets everything when the tab is closed or refreshed. It doesn't spy on anything. It is only visible to you.

You can read the code properly formatted [here](https://github.com/thomaslule/twitch-greet-newcomers/blob/master/greet.js).
