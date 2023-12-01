document.addEventListener('DOMContentLoaded', () => {
  let instance
  document.getElementById('gridBtn').addEventListener('click', () => {

  document.getElementById('myViewer').addListener('onReady', () => {
  if (document.getElementById('gridEle').firstChild) return; // viewers already setup
  const show = () => {
  // show FSI ImageGrid instance and hide image
    document.getElementById('gridEle').style.visibility = 'visible'
    document.getElementById('gridImg').style.display = 'none'
    document.getElementById('gridBtn').style.display = 'none'
    document.getElementById('productContainer').style.height = '600px'
    document.getElementById('gridViewer').style.height = '600px'
    document.getElementById('gridText').style.display = 'none'
    addMetadata()
  }

  const instance = $FSI.createNode("fsi-imagegrid",  {
      imagesources: 'images/samples/ssi/furniture/home-7473734.jpg,  images/samples/ssi/furniture/home-7531451.jpg, images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg, images/samples/ssi/furniture/living-room-7547558.jpg, images/samples/ssi/furniture/home-2082923.jpg',
      debug: true,
      width:'1500px',
      cellWidth: '250',
      cellHeight: '250',
      preloadCount: '120',
      autoCrop: 'cc',
      id: 'gridViewer',
      viewerSelector:'#myViewer',
      // listen for finished loading FSI ImageGrid and becomes interactive
      onReady: show
    }, true)

    instance.setAttribute("data-bs-target","#myModal")
    instance.setAttribute("data-bs-toggle","modal")

    document.getElementById('gridEle').appendChild(instance)
    })


    // add metadata stuff
    function addMetadata () {
   const template = document.createElement("fsi-imagegrid-template");
   template.style.display = 'none'
   template.setAttribute("class", 'fsi-image-grid-template');
   template.setAttribute("id", 'fsi-image-grid-template');

   const myImageGridImage = document.createElement("div");
   myImageGridImage.setAttribute("id", 'myImageGridImage');
   myImageGridImage.setAttribute("class", 'myImageGridImage');
   const img = document.createElement("img");
   img.setAttribute("class", 'fsi-image-grid-image');

   const myImageGridText = document.createElement("div");
   myImageGridText.innerHTML = "###iptc.Headline### <br/>###iptc.Caption### <br/>###iptc.FSI Extra###</span>";

   myImageGridText.setAttribute("class", 'myImageGridText');

   document.getElementById("gridViewer").appendChild(template);
   document.getElementById("fsi-image-grid-template").appendChild(myImageGridImage);
   document.getElementById("fsi-image-grid-template").appendChild(myImageGridText);
   document.getElementById("myImageGridImage").appendChild(img);
 }
  })

})
