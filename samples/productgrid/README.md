# Frontpage - Using a product grid for featured products

This readme describes how the product grid page sample with *FSI Imagegrid* of *FSI Server* is achieved.
The aim of the demo is to show how you can easily integrate the viewer.
You will also learn how to add metadata to images.

# Add your images/ assets to FSI Server

First, you'll need to upload the images you want to use to FSI Server.
You can install a [demo version](https://www.neptunelabs.com/get/) via Docker or use our [online demo server](https://demo.fsi-server.com/fsi/interface/) to try it out first.

# Uploading images

There are several possibilities to upload images into the interface.

![Config Image](readme-grid.png)

- Choose the Upload tab, click the "Choose files" button to add files to upload to the list. The files will be uploaded to the current folder.
- Drag & Drop files to the file view or the tree view

While having an image or folder selected, you can see all possible publishing ways for the specific item by visiting the "Publish To Web" tab.
For this example, select one image and use the preset *Medium Grid* in the section *Image Grid* :

![Config Image](readme-grid-1.png)

This publishes the directory with a custom <fsi-imagegrid> tag and displays a medium image grid.


![Config Image](readme-grid-2.png)

The *Source Code* section enables you to control the look of your viewer by setting the dimensions and format, as well as adding effects or crop options to it.

You can set the output dimensions and format (auto automatically chooses the best format for the browser used, or you can set WEBP, JPEG, PNG or GIF).
In this area you also can see the source code for your selected publishing option which you can edit and copy to publish the images.

Here you also see the <fsi-imagegrid> tag which sets the parameters used for the zoom option.
If you click on the tag, the bar on the right automatically switches to the tab *Parameters*, enabling you to customize the ImageGrid to your liking.

![Config Image](readme-grid-3.png)

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-imagegrid).


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
<fsi-imagegrid style="text-align:center;width:100%; height:1000px;"
               dir="images/samples/grid/colour"
               cellWidth="220"
               cellHeight="220"
               preloadCount="60"
               autoCrop="cc"
               scroll="false"
>
</fsi-imagegrid>
```

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
