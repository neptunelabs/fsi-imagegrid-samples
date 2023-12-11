# JS API Sample

FSI ImageGrid contains an extensive JS API with methods and callbacks that you can use.
You can find [an overview of all available parameters in the corresponding documentation](https://docs.neptunelabs.com/docs/fsi-imagegrid/js-api/public-methods).

This example is a simple demonstration of how to use these methods and callbacks, adding a grid with metadata on click.
When you click on a grid image, a modal with FSI Viewer will open

To display the image grid with FSI ImageGrid and zoom with FSI Viewer, all you need to do is add the following scripts to the top of your page:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/imagegrid/js/fsiimagegrid.js'
</script>
```
This will ensure that both viewers are loaded.

Normally you would need to place the *<fsi-imagegrid>* and *<fsi-viewer>* tags in your source code where you want the viewer to be displayed.

In this example, we only want to display the viewer in place of an image when a button is clicked.
This means that the viewer is initialised by JavaScript.

To do this, we have created this part in the body:

```html
<div class="productContainer mx-auto" id="productContainer">
  <img id="gridImg" src="{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/shelves-4032134.jpg&width=1269&rect=0.2888,0.34931,0.65009,0.27263&height=300&effects=pad(CC,FFFFFF),transparency(50)" width="1269" alt="" height="300">
  <p class="text" id="gridText">MEGA DEALS:<br/> UP TO 50% OFF</p>
  <button id="gridBtn" class="btn" disabled="disabled">VIEW DEALS OF THE DAY</button>
  <div class="gridContainer mx-auto" id="gridEle"></div>
</div>
```

`productContainer` is the div that contains all the elements.
`gridImg` is the image that will be displayed on load and replaced by the viewer.
The `gridContainer` div will contain the FSI ImageGrid.
The `gridBtn` button is used to switch from the image to the viewer.

For the modal which contains FSI Viewer we use a Bootstrap modal:

```html
<div
  id="myModal"
  class="modal fade bd-example-modal-xl"
  data-bs-keyboard="false"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myExtraLargeModalLabel"
  aria-hidden="true"
  style="display:block;visibility:hidden;opacity:1;"
>
  <div class="modal-dialog modal-xl" role="document" >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="myModalToggleLabel">Click on the image to zoom</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <fsi-viewer
          id="myViewer"
          plugins="fullScreen"
          resize="false"
          fullScreenElement="samplePopupContent"
          skin="white"
          width="1100px"
          height="700px"
          debug="true"
        >
        </fsi-viewer>
    </div>
  </div>
</div>
</div>
```

The switch on button click is achieved via JS in the corresponding `script.js`.

```js
document.addEventListener('DOMContentLoaded', () => {
  let instance;

  document.getElementById('myViewer').addListener('onInitFailed', () => {
    document.getElementById('gridBtn').disabled = false;
    //document.getElementById("myModal").removeAttribute("style");
  });
```

```js
  document.getElementById('gridBtn').addEventListener('click', () => {
```
A click on the `gridBtn` element will initialise a new FSI ImageGrid element in the `gridEle` element.
For this we use `$FSI.createNode` below.
With the `onReady` callback (see [documentation](https://docs.neptunelabs.com/docs/fsi-imagegrid/js-api/callbacks#onready))
we call `show` which ensures a smooth transition:
Only when the viewer is ready will the viewer element will be set to visible, while the image and button are set to `display:none`.

```js

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
```

It's important to add the FSI Viewer ID to the parameter `viewerSelector:'#myViewer'`, this connects the image grid to the zoom viewer.

We also enable the Bootstrap modal by giving the image grid element the following attributes:

```js

    instance.setAttribute("data-bs-target","#myModal")
    instance.setAttribute("data-bs-toggle","modal")

    addMetadata(instance);
    document.getElementById('gridEle').appendChild(instance)
```
The metadata is then added and the viewer appended to the `gridContainer` div.

### Adding metadata

We need to add the `fsi-imagegrid-template` node within the `<fsi-imagegrid>` custom tag.
For this, we use the function `addMetadata`:

```js
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

}
```
