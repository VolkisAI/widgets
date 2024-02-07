document.addEventListener("DOMContentLoaded", function() {
  var scriptTag = document.getElementById('chat-widget-script');
  var uniqueUserPath = scriptTag.getAttribute('data-user-path');
  var iconUrl = scriptTag.getAttribute('data-icon-url'); // No default, it must be provided

  var chatWidget = document.createElement("div");
  chatWidget.id = "chatWidget";
  chatWidget.className = "chat-widget";
  chatWidget.innerHTML = '<img src="' + iconUrl + '" alt="Chat">';

  var chatIframeContainer = document.createElement("div");
  chatIframeContainer.id = "chatIframeContainer";
  chatIframeContainer.className = "chat-iframe-container";
  chatIframeContainer.style.display = 'none';
  chatIframeContainer.innerHTML = '<div class="close-button" id="closeButton">×</div><iframe src="https://app.chatiq.ai/version-test/chatbot/' + uniqueUserPath + '" name="myiFrame" style="width:100%; height:100%;"></iframe>';

  document.body.appendChild(chatWidget);
  document.body.appendChild(chatIframeContainer);

  // Function to adjust iframe size based on screen width
  function adjustIframeSize() {
    if(window.innerWidth <= 767){
      // Apply responsive design on mobile devices
      chatIframeContainer.style.width = '90vw';
      chatIframeContainer.style.height = '80vh';
    } else {
      // Set fixed size for screens wider than 767px
      chatIframeContainer.style.width = '450px';
      chatIframeContainer.style.height = '800px';
    }
  }

  // Listen for window resize events to adjust the iframe size
  window.addEventListener('resize', adjustIframeSize);

  // Initial adjustment
  adjustIframeSize();

  document.getElementById('chatWidget').addEventListener('click', function() {
    var displayStyle = chatIframeContainer.style.display;
    chatIframeContainer.style.display = displayStyle === 'none' ? 'block' : 'none';
    adjustIframeSize(); // Adjust the iframe size whenever the widget is clicked
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    chatIframeContainer.style.display = 'none';
  });
});
