function openPopUp(evt, oCell){
  var myModal = new bootstrap.Modal(document.getElementById("modalSelection"), {});
  document.onreadystatechange = function () {
    myModal.toggle();
  };
  document.getElementById('fsi-grid-fit').assignFSIViewer('grid-viewer');
}
