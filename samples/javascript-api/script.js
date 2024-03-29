document.addEventListener('DOMContentLoaded', () => {
  let instance;

  document.getElementById('myViewer').addListener('onInitFailed', () => {
    document.getElementById('gridBtn').disabled = false;
    //document.getElementById("myModal").removeAttribute("style");
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
      const mm = document.getElementById('myModal');
      mm.style.visibility = "visible";
      mm.style.display = "none";

    }

    const instance = $FSI.createNode("fsi-imagegrid",  {
        imagesources: 'images/samples/ssi/furniture/home-7473734.jpg,images/samples/ssi/furniture/home-7531451.jpg,images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg,images/samples/ssi/furniture/living-room-7547558.jpg,images/samples/ssi/furniture/furniture-6048139.jpg',
        debug: true,
        width:'1500px',
        height:'800px',
        cellWidth: '250',
        cellHeight: '290',
        preloadCount: '120',
        autoCrop: 'cc',
        id: 'gridViewer',
        viewerSelector:'#myViewer',
        // listen for finished loading FSI ImageGrid and becomes interactive
        onReady: show
      });

      instance.setAttribute("data-bs-target","#myModal")
      instance.setAttribute("data-bs-toggle","modal")

      addMetadata(instance);
      document.getElementById('gridEle').appendChild(instance)

        // add metadata stuff
    function addMetadata (instance) {
     const tpl = document.createElement ("fsi-imagegrid-template");
      tpl.innerHTML =
       "      <div class=\"myImageGridImage\" >\n" +
       "        <img class=\"fsi-image-grid-image\"/>\n" +
       "      </div>\n" +
       "      <div class=\"myImageGridText\" >\n" +
       "        <span>\n" +
       "      ###iptc.Headline### <br/>###iptc.Caption### <br/>###iptc.Urgency###\n" +
       "        </span>\n" +
       "      </div>";
      instance.appendChild(tpl)
   }

  })
})


