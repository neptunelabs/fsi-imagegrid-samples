document.addEventListener('DOMContentLoaded', () => {
  let instance;

  document.getElementById('myViewer').addListener('onInitFailed', () => {
    document.getElementById('gridBtn').disabled = false;
    document.getElementById("myModal").removeAttribute("style");
  });

  document.getElementById('gridBtn').addEventListener('click', () => {


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
        imagesources: 'images/samples/ssi/furniture/home-7473734.jpg,images/samples/ssi/furniture/home-7531451.jpg,images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg,images/samples/ssi/furniture/living-room-7547558.jpg,images/samples/ssi/furniture/home-2082923.jpg',
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

        // add metadata stuff
    function addMetadata () {
     console.log('Metadata here?')
     const tpl = document.createElement ("fsi-imagegrid-template");
      tpl.innerHTML = "      <div class=\"myImageGridTitle\">\n" +
       "          ###iptc.Headline###\n" +
       "      </div>\n" +
       "      <div class=\"myImageGridImage\" >\n" +
       "        <img class=\"fsi-image-grid-image\"/>\n" +
       "      </div>\n" +
       "      <div class=\"myImageGridText\" >\n" +
       "        <span>\n" +
       "      ###iptc.Caption### <br/>###iptc.FSI Extra###\n" +
       "        </span>\n" +
       "      </div>";
      document.getElementById('gridViewer').appendChild(tpl)
   }

  })
})


