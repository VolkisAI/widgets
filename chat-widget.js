document.addEventListener("DOMContentLoaded", function() {
  var scriptTag = document.getElementById('chat-widget-script');
  var uniqueUserPath = scriptTag.getAttribute('data-user-path');
  var width = scriptTag.getAttribute('data-width') || '400px'; // Default width if not specified
  var height = scriptTag.getAttribute('data-height') || '600px'; // Default height if not specified
  var iconUrl = scriptTag.getAttribute('data-icon-url') || '//s3.amazonaws.com/appforest_uf/f1680870188261x782123797109605800/bubble2.png'; // Default icon if not specified

  var chatWidget = document.createElement("div");
  chatWidget.id = "chatWidget";
  chatWidget.className = "chat-widget";
  chatWidget.innerHTML = '<img src="' + iconUrl + '" alt="Chat">';

  var chatIframeContainer = document.createElement("div");
  chatIframeContainer.id = "chatIframeContainer";
  chatIframeContainer.className = "chat-iframe-container";
  chatIframeContainer.style.display = 'none';
  chatIframeContainer.style.width = width;
  chatIframeContainer.style.height = height;
  chatIframeContainer.innerHTML = '<div class="close-button" id="closeButton">×</div><iframe src="https://app.chatiq.ai/chatbot/' + uniqueUserPath + '" name="myiFrame" style="width:100%; height:100%;"></iframe>';

  document.body.appendChild(chatWidget);
  document.body.appendChild(chatIframeContainer);

  chatWidget.addEventListener('click', function() {
    chatIframeContainer.style.display = chatIframeContainer.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    chatIframeContainer.style.display = 'none';
  });
});
