const ImageLoader = ({ onchange, value }) => {
  return (
    <div className="animate__animated animate__fadeInLeft animate__slow">
      <div className="create__form-image">
        {value.length < 1 ? (
          <div className="create__form-group">
            <label className="create__form-label-image" htmlFor="image">
              Click to upload images
            </label>
            <input
              multiple
              onChange={onchange}
              className="create__form-input-image"
              type="file"
              id="image"
            />
          </div>
        ) : (
          <>
            <div className="create__form-images">
              {value.map((img, index) => (
                <img
                  src={img}
                  alt={"Imagejidsuidls"}
                  className="image"
                  key={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageLoader;
