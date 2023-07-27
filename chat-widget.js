document.addEventListener("DOMContentLoaded", function() {
  var scriptTag = document.getElementById('chat-widget-script');
  var uniqueUserPath = scriptTag.getAttribute('data-user-path');

  var chatWidget = document.createElement("div");
  chatWidget.id = "chatWidget";
  chatWidget.className = "chat-widget";
  chatWidget.innerHTML = '<img src="//s3.amazonaws.com/appforest_uf/f1680870188261x782123797109605800/bubble2.png" alt="Chat">';

  var chatIframeContainer = document.createElement("div");
  chatIframeContainer.id = "chatIframeContainer";
  chatIframeContainer.className = "chat-iframe-container";
  chatIframeContainer.style.display = 'none';
  chatIframeContainer.innerHTML = '<div class="close-button" id="closeButton">×</div><iframe src="https://app.chatiq.ai/version-test/chatbot/client/' + uniqueUserPath + '" name="myiFrame" scrolling="yes"></iframe>';

  document.body.appendChild(chatWidget);
  document.body.appendChild(chatIframeContainer);

  document.getElementById('chatWidget').addEventListener('click', function() {
    var chatIframeContainer = document.getElementById('chatIframeContainer');
    chatIframeContainer.style.display = (chatIframeContainer.style.display === 'none') ? 'block' : 'none';
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('chatIframeContainer').style.display = 'none';
  });
});
