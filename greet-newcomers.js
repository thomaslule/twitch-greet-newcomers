(function () {
  const chat = window.document.querySelector(".chat-room");

  // if greet_newcomers was already launched, disconnect it and remove the eventual emojis from the chat
  if (window.greet_newcomers) {
    window.greet_newcomers.disconnect();
    chat
      .querySelectorAll(".chat-line__message .chat-author__display-name")
      .forEach((nameNode) => {
        nameNode.textContent = nameNode.textContent.replace(/^👋 /, "");
      });
  }

  const knownViewers = new Set();

  // process a message: if we don't know the viewer, add it to our list and add the emoji
  function handleNewMessage(messageNode) {
    const viewerNameNode = messageNode.querySelector(
      ".chat-author__display-name"
    );
    if (viewerNameNode) {
      const viewerName = viewerNameNode.textContent;
      if (!knownViewers.has(viewerName)) {
        viewerNameNode.textContent = "👋 " + viewerName;
        knownViewers.add(viewerName);
      }
    }
  }

  // process all currently displayed messages
  chat.querySelectorAll(".chat-line__message").forEach(handleNewMessage);

  // observe the chat, process every new message
  window.greet_newcomers = new MutationObserver((mutationRecords) => {
    mutationRecords.forEach((mr) => {
      mr.addedNodes.forEach(handleNewMessage);
    });
  });
  window.greet_newcomers.observe(chat, {
    childList: true,
    attributes: false,
    characterData: false,
    subtree: false,
  });

  // display status message in chat
  const lastElementOfChat = chat.querySelector(".scrollable-trigger__wrapper");
  const div = chat.insertBefore(
    window.document.createElement("div"),
    lastElementOfChat
  );
  div.setAttribute("class", "chat-line__status");
  const span = div.appendChild(window.document.createElement("span"));
  const text =
    window.navigator.language.replace(/\-.*/, "") === "fr"
      ? "Affichage des nouveaux viewers 👋 Rafraichir la page pour arrêter. Ce message est visible uniquement par vous."
      : "Now showing new viewers 👋 Refresh the page to stop. This message is only visible to you.";
  span.textContent = text;

  // scroll to message
  const scrollable = window.document.querySelector(
    ".chat-room .simplebar-scroll-content"
  );
  scrollable.scrollTop = scrollable.scrollHeight;
})();
