const Sample = () => {
  return (
    <div className='fsi-viewer-section'>
      <FSIComponent tagName="fsi-imagegrid" width={"100%"} height={"330px"}
                    dir={"images/samples/imagegrid/landscape"}
                    cellWidth={200} cellHeight={100} preloadCount={60}
                    autoCrop={"cc"} />
    </div>
  );
};
