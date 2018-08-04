if (!window.greet_newcomers) {
  window.greet_newcomers = new Set();
  
  const handleNewMessage = messageNode => {
    const viewerNameNode = messageNode.querySelector('.chat-author__display-name');
    const viewerName = viewerNameNode.textContent;
    if (!window.greet_newcomers.has(viewerName)) {
      viewerNameNode.textContent = '👋 ' + viewerName;
      window.greet_newcomers.add(viewerName);
    }
  };
  
  const handleMutations = mutationRecords => {
    mutationRecords.forEach(mr => {
      mr.addedNodes.forEach(handleNewMessage);
    });
  };
  
  const chat = document.querySelector('[role=log]');
  
  const mo = new MutationObserver(handleMutations);
  mo.observe(chat, { childList: true, attributes: false, characterData: false, subtree: false });  
} else {
  window.greet_newcomers.clear();
}
window.alert('Showing new viewers from now on! Refresh the page to stop');
