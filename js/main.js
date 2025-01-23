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
