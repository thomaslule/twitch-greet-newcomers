# twitch-greet-newcomers
mark viewers' first messages in twitch chat

Add this into the URL section of a new bookmark and click it when you are on your twitch channel page.

```
(javascript:(function()%7Bif%20(window.greet_newcomers)%20%7Bconsole.log('Alredy%20showing%20new%20viewers')%3Breturn%3B%7Dconst%20knownViewers%20%3D%20new%20Set()%3Bconst%20handleNewMessage%20%3D%20messageNode%20%3D%3E%20%7Bconst%20viewerNameNode%20%3D%20messageNode.querySelector('.chat-author__display-name')%3Bconst%20viewerName%20%3D%20viewerNameNode.textContent%3Bif%20(!knownViewers.has(viewerName))%20%7BviewerNameNode.textContent%20%3D%20'%F0%9F%91%8B%20'%20%2B%20viewerName%3BknownViewers.add(viewerName)%3B%7D%7D%3Bconst%20handleMutations%20%3D%20mutationRecords%20%3D%3E%20%7BmutationRecords.forEach(mr%20%3D%3E%20%7Bmr.addedNodes.forEach(handleNewMessage)%3B%7D)%3B%7D%3Bconst%20chat%20%3D%20document.querySelector('%5Brole%3Dlog%5D')%3Bconst%20mo%20%3D%20new%20MutationObserver(handleMutations)%3Bmo.observe(chat%2C%20%7B%20childList%3A%20true%2C%20attributes%3A%20false%2C%20characterData%3A%20false%2C%20subtree%3A%20false%20%7D)%3Bconsole.log('Now%20showing%20new%20viewers')%3Bwindow.greet_newcomers%20%3D%20true%7D)())
```

This will add a 👋 emoji just before the name of viewers who talk for the first time.
