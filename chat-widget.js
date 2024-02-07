document.addEventListener("DOMContentLoaded", function() {
  var scriptTag = document.getElementById('chat-widget-script');
  var uniqueUserPath = scriptTag.getAttribute('data-user-path');
  var width = scriptTag.getAttribute('data-width') || '400px'; // Default width if not specified
  var height = scriptTag.getAttribute('data-height') || '800px'; // Default height if not specified
  var iconUrl = scriptTag.getAttribute('data-icon-url'); // No default icon, it must be provided

  var chatWidget = document.createElement("div");
  chatWidget.id = "chatWidget";
  chatWidget.className = "chat-widget";
  chatWidget.style.width = '60px'; // Set width of the chat widget icon
  chatWidget.style.height = '60px'; // Set height of the chat widget icon
  chatWidget.innerHTML = '<img src="' + iconUrl + '" alt="Chat">';

  var chatIframeContainer = document.createElement("div");
  chatIframeContainer.id = "chatIframeContainer";
  chatIframeContainer.className = "chat-iframe-container";
  chatIframeContainer.style.display = 'none';

  // Set initial width and height from data attributes
  if(window.innerWidth > 767){
    chatIframeContainer.style.width = width;
    chatIframeContainer.style.height = height;
  }

  chatIframeContainer.innerHTML = '<div class="close-button" id="closeButton">×</div><iframe src="https://app.chatiq.ai/chatbot/' + uniqueUserPath + '" name="myiFrame" style="width:100%; height:100%;"></iframe>';

  document.body.appendChild(chatWidget);
  document.body.appendChild(chatIframeContainer);

  // Function to adjust iframe size based on screen width
  function adjustIframeSize() {
    if(window.innerWidth <= 767){
      // Apply responsive design on mobile devices
      chatIframeContainer.style.width = '90vw';
      chatIframeContainer.style.height = '80vh';
    } else {
      // Apply dimensions from data attributes on desktop
      chatIframeContainer.style.width = width;
      chatIframeContainer.style.height = height;
    }
  }

  // Listen for window resize events to adjust the iframe size
  window.addEventListener('resize', adjustIframeSize);

  // Initial adjustment if needed
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
