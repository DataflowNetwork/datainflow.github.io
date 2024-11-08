
function toggleHiddenContent(id) {
  // Get the clicked element
  const hiddenElement = document.getElementById(id);

  // Find the parent card of the clicked icon
  const teamCard = hiddenElement.closest(".teamMember");

  // Hide any other visible content within this team member card
  const otherExpandedElements = teamCard.querySelectorAll(
    ".iconWrapper.expanded",
  );
  otherExpandedElements.forEach((element) => {
    if (element !== hiddenElement) {
      element.classList.remove("expanded");
    }
  });
  
  // Toggle the visibility of the clicked element
  hiddenElement.classList.toggle("expanded");

}
