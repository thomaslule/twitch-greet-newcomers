if (window.greet_newcomers) {
  console.log('Already showing new viewers');
  return;
}

const knownViewers = new Set();

const handleNewMessage = messageNode => {
  const viewerNameNode = messageNode.querySelector('.chat-author__display-name');
  const viewerName = viewerNameNode.textContent;
  if (!knownViewers.has(viewerName)) {
    viewerNameNode.textContent = '👋 ' + viewerName;
    knownViewers.add(viewerName);
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

console.log('Now showing new viewers');
window.greet_newcomers = true;
