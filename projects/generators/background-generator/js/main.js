const occupationSelect = document.getElementById("occupation");
const earlyLifeSelect = document.getElementById("early-life");
const reasonSelect = document.getElementById("reason");
const attributeList = document.getElementById("attribute-list");
const backgroundStory = document.getElementById("background-story");

// Event listeners for selects
occupationSelect.addEventListener("change", updateAttributesAndStory);
earlyLifeSelect.addEventListener("change", updateAttributesAndStory);
reasonSelect.addEventListener("change", updateAttributesAndStory);

function updateAttributesAndStory() {
  const selectedOccupation =
    occupationSelect.options[occupationSelect.selectedIndex];
  const selectedEarlyLife =
    earlyLifeSelect.options[earlyLifeSelect.selectedIndex];
  const selectedReason = reasonSelect.options[reasonSelect.selectedIndex];
  const attributes =
    selectedOccupation.dataset.attribute +
    ", " +
    selectedEarlyLife.dataset.attribute +
    ", " +
    selectedReason.dataset.attribute;
  const attributesArray = attributes.split(", ");

  // Clear existing attributes
  attributeList.innerHTML = "";

  // Display attributes
  attributesArray.forEach((attribute) => {
    const listItem = document.createElement("li");
    listItem.textContent = attribute;
    attributeList.appendChild(listItem);
  });

  // Generate background story based on selected options
  const background = generateBackground(
    selectedOccupation.textContent,
    selectedEarlyLife.textContent,
    selectedReason.textContent
  );
  backgroundStory.textContent = background;
}

function generateBackground(occupation, earlyLife, reason) {
  let background = "";
  if (occupation === "Piracy" || occupation === "Privateering") {
    background += `You were born into a life of ${occupation.toLowerCase()}, raised as ${earlyLife.toLowerCase()}.\n`;
    background += `The call of the sea and the thrill of adventure fueled your ${reason.toLowerCase()}.`;
  } else if (occupation === "Fishing" || occupation === "Farming") {
    background += `You grew up ${earlyLife.toLowerCase()}, learning the ways of ${occupation.toLowerCase()} from a young age.\n`;
    background += `However, ${reason.toLowerCase()} led you to seek excitement beyond the fields or waters.`;
  } else {
    background += `Born as ${earlyLife.toLowerCase()}, you found your calling in ${occupation.toLowerCase()}.\n`;
    background += `Driven by ${reason.toLowerCase()}, you set out on a journey to find your true purpose.`;
  }
  return background;
}

// Initial update
updateAttributesAndStory();
