**English** - [français](/fr)

Drag and drop this link to your bookmark bar and click it when you are on your twitch channel page:

**<a href="javascript:(function()%7B%22use%20strict%22%3Bvar%20chat%3Dwindow.document.querySelector(%22%5Brole%3Dlog%5D%22)%3Bwindow.greet_newcomers%26%26(window.greet_newcomers.disconnect()%2Cchat.querySelectorAll(%22.chat-line__message%20.chat-author__display-name%22).forEach(function(e)%7Be.textContent%3De.textContent.replace(%2F%5E%F0%9F%91%8B%20%2F%2C%22%22)%7D))%3Bvar%20knownViewers%3Dnew%20Set%3Bfunction%20handleNewMessage(e)%7Bvar%20t%3De.querySelector(%22.chat-author__display-name%22)%2Ca%3Dt.textContent%3BknownViewers.has(a)%7C%7C(t.textContent%3D%22%F0%9F%91%8B%20%22%2Ba%2CknownViewers.add(a))%7Dchat.querySelectorAll(%22.chat-line__message%22).forEach(handleNewMessage)%2Cwindow.greet_newcomers%3Dnew%20MutationObserver(function(e)%7Be.forEach(function(e)%7Be.addedNodes.forEach(handleNewMessage)%7D)%7D)%2Cwindow.greet_newcomers.observe(chat%2C%7BchildList%3A!0%2Cattributes%3A!1%2CcharacterData%3A!1%2Csubtree%3A!1%7D)%3Bvar%20div%3Dchat.appendChild(window.document.createElement(%22div%22))%3Bdiv.setAttribute(%22class%22%2C%22chat-line__status%22)%3Bvar%20span%3Ddiv.appendChild(window.document.createElement(%22span%22))%2Ctext%3D%22fr%22%3D%3D%3Dwindow.navigator.language.replace(%2F%5C-.*%2F%2C%22%22)%3F%22Affichage%20des%20nouveaux%20viewers%20!%20Rafraichir%20la%20page%20pour%20arr%C3%AAter.%20Ce%20message%20est%20visible%20uniquement%20par%20vous.%22%3A%22Now%20showing%20new%20viewers!%20Refresh%20the%20page%20to%20stop.%20This%20message%20is%20only%20visible%20to%20you.%22%3Bspan.textContent%3Dtext%3B%7D)()">Greet newcomers</a>**

This will help you spot newcomers in your chat by adding a 👋 emoji on their first message.

You can also manually create the bookmark by copy/pasting this into the URL section of a new bookmark:

```
javascript:(function()%7B%22use%20strict%22%3Bvar%20chat%3Dwindow.document.querySelector(%22%5Brole%3Dlog%5D%22)%3Bwindow.greet_newcomers%26%26(window.greet_newcomers.disconnect()%2Cchat.querySelectorAll(%22.chat-line__message%20.chat-author__display-name%22).forEach(function(e)%7Be.textContent%3De.textContent.replace(%2F%5E%F0%9F%91%8B%20%2F%2C%22%22)%7D))%3Bvar%20knownViewers%3Dnew%20Set%3Bfunction%20handleNewMessage(e)%7Bvar%20t%3De.querySelector(%22.chat-author__display-name%22)%2Ca%3Dt.textContent%3BknownViewers.has(a)%7C%7C(t.textContent%3D%22%F0%9F%91%8B%20%22%2Ba%2CknownViewers.add(a))%7Dchat.querySelectorAll(%22.chat-line__message%22).forEach(handleNewMessage)%2Cwindow.greet_newcomers%3Dnew%20MutationObserver(function(e)%7Be.forEach(function(e)%7Be.addedNodes.forEach(handleNewMessage)%7D)%7D)%2Cwindow.greet_newcomers.observe(chat%2C%7BchildList%3A!0%2Cattributes%3A!1%2CcharacterData%3A!1%2Csubtree%3A!1%7D)%3Bvar%20div%3Dchat.appendChild(window.document.createElement(%22div%22))%3Bdiv.setAttribute(%22class%22%2C%22chat-line__status%22)%3Bvar%20span%3Ddiv.appendChild(window.document.createElement(%22span%22))%2Ctext%3D%22fr%22%3D%3D%3Dwindow.navigator.language.replace(%2F%5C-.*%2F%2C%22%22)%3F%22Affichage%20des%20nouveaux%20viewers%20!%20Rafraichir%20la%20page%20pour%20arr%C3%AAter.%20Ce%20message%20est%20visible%20uniquement%20par%20vous.%22%3A%22Now%20showing%20new%20viewers!%20Refresh%20the%20page%20to%20stop.%20This%20message%20is%20only%20visible%20to%20you.%22%3Bspan.textContent%3Dtext%3B%7D)()
```

> This is scary, what does this code do? 😨

It just scans the chat to find new viewers and it forgets everything when the tab is closed or refreshed. It doesn't spy on anything. It is only visible to you.

You can read the code properly formatted [here](https://github.com/thomaslule/twitch-greet-newcomers/blob/master/greet.js).
