function openPopUp(evt, oCell) {
  const modalToggle = document.getElementById('myModal')
  modalToggle.addEventListener('hidden.bs.modal', (event) => {
    document.getElementById('fsi-grid-fit').assignFSIViewer('grid-viewer')
  })
}
