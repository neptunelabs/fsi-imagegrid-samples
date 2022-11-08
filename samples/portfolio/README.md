# Portfolio - Using FSI Showcase with metadata

This readme describes how to create a photographer portfolio showcase with FSI Viewer and FSI ImageGrid.
The aim of the demo is to show how you can easily integrate an image grid with metadata. If you click on an
image, a zoom modal opens.

# Using FSI ImageGrid

In order to display the viewer, you only need to add the corresponding scripts
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/imagegrid/js/fsiimagegrid.js'
</script>
```
This ensures that FSI ImageGrid is loaded.

Simply embed the <fsi-imagegrid> tag on the page where you want to display the grid.
In our example, this looks like this:

```html
  <fsi-imagegrid style="text-align:center;width:100%;height:100%;"
                 dir="/images/samples/grid/landscape/"
                 id="fsi-grid-fit"
                 cellWidth="300"
                 cellHeight="325"
                 useTouchZoom="true"
                 useQuickZoom="false"
                 autoCrop="cc"
                 scroll="false"
                 debug="true"
                 onCellClick="openPopUp"
>

  <fsi-imagegrid-template style="display:none">
    <div class="myImageGridTitle">
      <span>###iptc.Caption###</span>
    </div>
    <div class="myImageGridImage" >
      <img class="fsi-image-grid-image"/>
    </div>
    <div class="myImageGridText" >
					<span>
						###iptc.FSI Extra###<br/><br/>
						Foto: ###iptc.Credit###<br/><br/>
					</span>
    </div>
  </fsi-imagegrid-template>
</fsi-imagegrid>
```

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Displaying metadata

In our example we have displayed some labels beneath the thumbnails in the image grid.
This is achieved by adding the following part:

```html
 <fsi-imagegrid-template style="display:none">
  <div class="myImageGridTitle">
    <span>###iptc.Caption###</span>
  </div>
  <div class="myImageGridImage" >
    <img class="fsi-image-grid-image"/>
  </div>
  <div class="myImageGridText" >
					<span>
						###iptc.FSI Extra###<br/><br/>
						Foto: ###iptc.Credit###<br/><br/>
					</span>
  </div>
</fsi-imagegrid-template>
```

The div with the ImageGrid Title contains the metadata Caption, while the div with the class myImageGridText contains FSI Extra and the Credit.
In order to add this metadata, go to the tab *Metadata* and click on the three tiles on the right, selecting **Add fields**:

![Config Image](readme-portfolio-3.png)

Tip: if you do this with multiple images selected, the fields will be added to them, making it more convenient.

We have added Caption, Credit and FSI Extra to it:

![Config Image](readme-portfolio-4.png)

You can then type in all the information you want to display in the fields:

![Config Image](readme-portfolio-5.png)

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
