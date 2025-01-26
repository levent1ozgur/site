const moveDiv = document.getElementById("move");
const titleBar = moveDiv.querySelector(".title-bar"); // Target the title bar
let isDragging = false;
let offsetX, offsetY;

// Add event listeners to the title bar for drag functionality
titleBar.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - moveDiv.offsetLeft;
  offsetY = event.clientY - moveDiv.offsetTop;
  moveDiv.style.position = "absolute";
  moveDiv.style.zIndex = 1000; // Ensure it's above other elements
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  // Calculate the new position
  const newX = event.clientX - offsetX;
  const newY = event.clientY - offsetY;

  // Get the viewport boundaries
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get the dimensions of the draggable element
  const moveDivWidth = moveDiv.offsetWidth;
  const moveDivHeight = moveDiv.offsetHeight;

  // Ensure the element doesn't go outside the screen
  const boundedX = Math.max(0, Math.min(newX, viewportWidth - moveDivWidth));
  const boundedY = Math.max(0, Math.min(newY, viewportHeight - moveDivHeight));

  // Set the new position
  moveDiv.style.left = `${boundedX}px`;
  moveDiv.style.top = `${boundedY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Deselect all tabs and hide all panels
    document
      .querySelectorAll('[role="tab"]')
      .forEach((t) => t.setAttribute("aria-selected", "false"));
    document
      .querySelectorAll('[role="tabpanel"]')
      .forEach((panel) => (panel.hidden = true));
    // Activate the selected tab and corresponding panel
    const selectedTab = event.currentTarget;
    selectedTab.setAttribute("aria-selected", "true");
    const panelId = selectedTab.getAttribute("aria-controls");
    document.getElementById(panelId).hidden = false;
  });
});
// Select the main "Close" button
const mainCloseButton = document.querySelector('[aria-label="Close"]');
// Function to create the pop-up window
function createPopup() {
  // Create the pop-up container
  const popup = document.createElement("div");
  popup.className = "window";
  popup.style.width = "300px";
  popup.style.position = "absolute";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.zIndex = "1001";
  // Add the title bar
  popup.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-text">Notification</div>
      <div class="title-bar-controls">
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">
      <p>Website will be close!</p>
    </div>
    <section class="field-row" style="justify-content: flex-end; padding: 0 8px 8px 8px">
      <button id="popup-ok">OK</button>
      <button id="popup-cancel">Cancel</button>
    </section>
  `;
  // Append the pop-up to the document body
  document.body.appendChild(popup);
  // Add event listeners to the pop-up buttons
  const okButton = document.getElementById("popup-ok");
  const cancelButton = document.getElementById("popup-cancel");
  const closeButton = popup.querySelector('[aria-label="Close"]');
  // "OK" button: Close the website
  okButton.addEventListener("click", () => {
    window.close(); // Attempt to close the website (may be blocked by browser settings)
  });
  // "Cancel" button and "Close" button: Close the pop-up
  const closePopup = () => document.body.removeChild(popup);
  cancelButton.addEventListener("click", closePopup);
  closeButton.addEventListener("click", closePopup);
}
// Add event listener to the main "Close" button
mainCloseButton.addEventListener("click", createPopup);
//Error sound
function playSound() {
  const button = document.getElementById("playButton");
  const soundUrl = button.getAttribute("data-url"); // Get the data-url attribute value
  const sound = new Audio(soundUrl); // Create a new audio object with the sound URL
  sound.play(); // Play the sound
}
// For title slide
(function () {
  let titleText = document.title;
  let sliderText = titleText + " "; // Add a space for smooth sliding effect
  let i = 0;

  function slideTitle() {
    // Slide the title text
    document.title = sliderText.slice(i) + sliderText.slice(0, i);
    i = (i + 1) % sliderText.length; // Loop through the text
    // Reset the position when the title has fully moved
    if (i === 0) {
      document.title = titleText; // Reset title back to original
    }
  }
  setInterval(slideTitle, 150); // Adjust timing for the slide speed
})();

function openWindow(url, title) {
  // Create a new window div
  const newWindow = document.createElement("div");
  newWindow.className = "window"; // Use your existing window class for styling
  newWindow.style.width = "100%";
  newWindow.style.height = "100%";
  newWindow.style.position = "absolute";
  newWindow.style.top = "0px"; // Adjust as needed
  newWindow.style.left = "0px"; // Adjust as needed;
  newWindow.style.zIndex = "1000"; // Ensure it appears on top
  // Add the title bar
  const titleBar = document.createElement("div");
  titleBar.className = "title-bar"; // Use your existing title-bar class
  titleBar.innerHTML = `
    <div class="title-bar-text">${title}</div>
    <div class="title-bar-controls">
      <button aria-label="Close" onclick="this.closest('.window').remove()"></button>
    </div>
  `;
  newWindow.appendChild(titleBar);
  // Add the iframe content
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "calc(100% - 30px)"; // Leave space for the title bar
  iframe.frameBorder = "0";
  newWindow.appendChild(iframe);
  // Add the window to the body (or your window container)
  document.body.appendChild(newWindow);
  // Optional: Make the window draggable (if not already handled)
  makeWindowDraggable(newWindow);
}

function makeWindowDraggable(windowElement) {
  let offsetX = 0,
    offsetY = 0,
    isDragging = false;
  const titleBar = windowElement.querySelector(".title-bar");
  titleBar.style.cursor = "normal";
  titleBar.addEventListener("mousedown", (e) => {
    isDragging = false;
    offsetX = e.clientX - windowElement.offsetLeft;
    offsetY = e.clientY - windowElement.offsetTop;
  });
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
    }
  });
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

// Function to create and display the pop-up window
function openHelpPopup() {
  // Create the pop-up window container
  const helpWindow = document.createElement("div");
  helpWindow.classList.add("window");
  helpWindow.style.width = "300px";

  // Create the title bar
  const titleBar = document.createElement("div");
  titleBar.classList.add("title-bar");

  // Create the title text
  const titleText = document.createElement("div");
  titleText.classList.add("title-bar-text");
  titleText.textContent = "Credit";

  // Create the title bar controls (close button)
  const titleBarControls = document.createElement("div");
  titleBarControls.classList.add("title-bar-controls");

  const closeButton = document.createElement("button");
  closeButton.setAttribute("aria-label", "Close");
  closeButton.textContent = "";
  closeButton.addEventListener("click", () => {
    helpWindow.remove(); // Close the pop-up
  });

  // Append elements to the title bar
  titleBarControls.appendChild(closeButton);
  titleBar.appendChild(titleText);
  titleBar.appendChild(titleBarControls);

  // Create the body of the window
  const windowBody = document.createElement("div");
  windowBody.classList.add("window-body");
  const content = document.createElement("p");
  content.innerHTML =
    'Made with <a href="https://botoxparty.github.io/XP.css/" target="_blank" rel="noopener noreferrer">xp.css</a> by Adam Hammad and Jordan Scales. Licensed under the MIT License.';
  windowBody.appendChild(content);

  // Append title bar and body to the pop-up window
  helpWindow.appendChild(titleBar);
  helpWindow.appendChild(windowBody);

  // Append the pop-up window to the body of the document
  document.body.appendChild(helpWindow);
}

// Get the help button
const helpButton = document.querySelector('[aria-label="Help"]');

// Add event listener to the help button
helpButton.addEventListener("click", openHelpPopup);

popup.parentNode.removeChild(popup); // Fully removes the popup
popup = null; // Ensures it's not retained in memory
