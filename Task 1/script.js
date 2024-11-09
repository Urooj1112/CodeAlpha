function showImage(imgElement) {
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
  
    // Set the image source and text
    expandedImg.src = imgElement.src;
    imgText.textContent = imgElement.alt;
  
    // Display the modal
    modal.style.display = "flex";
  }
  
  function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  