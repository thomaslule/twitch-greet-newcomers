const chat = document.querySelector('[role=log]');

function addMessage(message) {
  const div = chat.appendChild(document.createElement("div"));
  div.setAttribute("class", "chat-line__status");
  const span = div.appendChild(document.createElement("span"));
  span.textContent = message;
} 

if (!window.greet_newcomers) {
  window.greet_newcomers = true;
  const knownViewers = new Set();
  
  function handleNewMessage(messageNode) {
    const viewerNameNode = messageNode.querySelector('.chat-author__display-name');
    const viewerName = viewerNameNode.textContent;
    if (!knownViewers.has(viewerName)) {
      viewerNameNode.textContent = '👋 ' + viewerName;
      knownViewers.add(viewerName);
    }
  };
  

  chat.querySelectorAll('.chat-line__message').forEach(handleNewMessage);
  
  const mo = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(mr => {
      mr.addedNodes.forEach(handleNewMessage);
    });
  });
  mo.observe(chat, { childList: true, attributes: false, characterData: false, subtree: false });

  addMessage('Now showing new viewers! Refresh the page to stop');
} else {
  addMessage('Already showing new viewers. Refresh the page to stop');
}
