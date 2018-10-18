Drag and drop this link to your bookmark bar and click it when you are on your twitch channel page:

**<a href="javascript:(function()%7B%22use%20strict%22%3Bvar%20chat%3Ddocument.querySelector(%22%5Brole%3Dlog%5D%22)%3Bfunction%20addMessage(e)%7Bvar%20t%3Dchat.appendChild(document.createElement(%22div%22))%3Bt.setAttribute(%22class%22%2C%22chat-line__status%22)%2Ct.appendChild(document.createElement(%22span%22)).textContent%3De%7Dif(window.greet_newcomers)addMessage(%22Already%20showing%20new%20viewers.%20Refresh%20the%20page%20to%20stop%22)%3Belse%7Bvar%20handleNewMessage%3Dfunction(e)%7Bvar%20t%3De.querySelector(%22.chat-author__display-name%22)%2Ca%3Dt.textContent%3BknownViewers.has(a)%7C%7C(t.textContent%3D%22%F0%9F%91%8B%20%22%2Ba%2CknownViewers.add(a))%7D%3Bwindow.greet_newcomers%3D!0%3Bvar%20knownViewers%3Dnew%20Set%3Bchat.querySelectorAll(%22.chat-line__message%22).forEach(handleNewMessage)%3Bvar%20mo%3Dnew%20MutationObserver(function(e)%7Be.forEach(function(e)%7Be.addedNodes.forEach(handleNewMessage)%7D)%7D)%3Bmo.observe(chat%2C%7BchildList%3A!0%2Cattributes%3A!1%2CcharacterData%3A!1%2Csubtree%3A!1%7D)%2CaddMessage(%22Now%20showing%20new%20viewers!%20Refresh%20the%20page%20to%20stop%22)%7D%7D)()">Greet newcomers</a>**

This will help you spot newcomers in your chat by adding a 👋 emoji on their first message.

You can also manually create the bookmark by copy/pasting this into the URL section of a new bookmark:

```
javascript:(function()%7B%22use%20strict%22%3Bvar%20chat%3Ddocument.querySelector(%22%5Brole%3Dlog%5D%22)%3Bfunction%20addMessage(e)%7Bvar%20t%3Dchat.appendChild(document.createElement(%22div%22))%3Bt.setAttribute(%22class%22%2C%22chat-line__status%22)%2Ct.appendChild(document.createElement(%22span%22)).textContent%3De%7Dif(window.greet_newcomers)addMessage(%22Already%20showing%20new%20viewers.%20Refresh%20the%20page%20to%20stop%22)%3Belse%7Bvar%20handleNewMessage%3Dfunction(e)%7Bvar%20t%3De.querySelector(%22.chat-author__display-name%22)%2Ca%3Dt.textContent%3BknownViewers.has(a)%7C%7C(t.textContent%3D%22%F0%9F%91%8B%20%22%2Ba%2CknownViewers.add(a))%7D%3Bwindow.greet_newcomers%3D!0%3Bvar%20knownViewers%3Dnew%20Set%3Bchat.querySelectorAll(%22.chat-line__message%22).forEach(handleNewMessage)%3Bvar%20mo%3Dnew%20MutationObserver(function(e)%7Be.forEach(function(e)%7Be.addedNodes.forEach(handleNewMessage)%7D)%7D)%3Bmo.observe(chat%2C%7BchildList%3A!0%2Cattributes%3A!1%2CcharacterData%3A!1%2Csubtree%3A!1%7D)%2CaddMessage(%22Now%20showing%20new%20viewers!%20Refresh%20the%20page%20to%20stop%22)%7D%7D)()
```

> This is scary, what does this code do? 😨

It just scans the chat to find new viewers and it forgets everything when the tab is closed or refreshed. It doesn't spy on anything. It is visible for you only.

You can read the code properly formatted [here](https://github.com/thomaslule/twitch-greet-newcomers/blob/master/greet.js).
