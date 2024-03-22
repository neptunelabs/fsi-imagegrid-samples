# Using FSI ImageGrid with React

If you want to use the FSI ImageGrid with React, we recommend that you create an FSI component to ensure that the viewers are initialised correctly.

Simply embedding the viewers as a component may work, but will cause problems as the viewer will be initialised in the shadow DOM and changes will not be recognised.

This sample shows a sample FSI component and how it is embedded. As this is a standalone sample, the embedding is slightly different.

In `fsi-component.js` you will find the class that extends the React component. You can read more about this in the corresponding documentation section [Creating the FSI Component] (https://docs.neptunelabs.com/docs/fsi-viewer/using-with-react).

You can use this FSIComponent in two ways, either directly in the files or as a separate component.
In `sample.js` it is directly embedded:

```html
    <div className="container py-4">
  <FSIComponent tagName="fsi-imagegrid" width={"1500px"} height={"600px"}
                imagesources={"images/samples/ssi/furniture/home-7473734.jpg,images/samples/ssi/furniture/home-7531451.jpg,images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg,images/samples/ssi/furniture/living-room-7547558.jpg,images/samples/ssi/furniture/furniture-6048139.jpg"}
  cellWidth={250} cellHeight={290} preloadCount={60}
  autoCrop={"cc"} />
</div>
```

The `tagName` defines which viewer script is loaded, in this case `fsi-imagegrid`. The other attributes are the normal viewer parameters you would set.

If you want to use this in React, unlike in this standalone example, it is important to import the FSIComponent accordingly.
You can read more about this in the [Using the FSIComponent](https://docs.neptunelabs.com/docs/fsi-viewer/using-with-react#using-fsicomponent) section of the documentation.


