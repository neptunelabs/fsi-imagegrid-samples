const Sample = () => {
  return (
    <div className='fsi-viewer-section'>
    <div className="container py-4">
      <FSIComponent tagName="fsi-imagegrid" width={"1500px"} height={"600px"}
                    imagesources={"images/samples/ssi/furniture/home-7473734.jpg,images/samples/ssi/furniture/home-7531451.jpg,images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg,images/samples/ssi/furniture/living-room-7547558.jpg,images/samples/ssi/furniture/furniture-6048139.jpg"}
                    cellWidth={250} cellHeight={290} preloadCount={60}
                    autoCrop={"cc"} />
    </div>
    </div>
  );
};
