if (!window.greet_newcomers) {
  window.greet_newcomers = true;
  const knownViewers = new Set();
  
  const handleNewMessage = messageNode => {
    const viewerNameNode = messageNode.querySelector('.chat-author__display-name');
    const viewerName = viewerNameNode.textContent;
    if (!knownViewers.has(viewerName)) {
      viewerNameNode.textContent = '👋 ' + viewerName;
      knownViewers.add(viewerName);
    }
  };
  
  const chat = document.querySelector('[role=log]');

  chat.querySelectorAll('.chat-line__message').forEach(handleNewMessage);
  
  const mo = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(mr => {
      mr.addedNodes.forEach(handleNewMessage);
    });
  });
  mo.observe(chat, { childList: true, attributes: false, characterData: false, subtree: false });

  window.alert('Now showing new viewers! Refresh the page to stop');
} else {
  window.alert('Already showing new viewers. Refresh the page to stop');
}
