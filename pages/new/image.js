// @ts-nocheck
import { Button } from "../../components/button";

const ImageLoader = ({ onchange, image, changePage, onclick }) => {
  const { src, isValid, errorMsg } = image;

  return (
    <div className="animate__animated animate__fadeInLeft animate__slow">
      <div className="create__form-image">
        {!src && !isValid ? (
          <>
            <div className="create__form-group">
              <label className="create__form-label-image" htmlFor="image">
                Click to upload one image
              </label>
              <input
                onChange={onchange}
                className="create__form-input-image"
                type="file"
                id="image"
              />
              {errorMsg !== "" && (
                <p className="error error__create">{errorMsg}</p>
              )}
            </div>
          </>
        ) : (
          <>
            <img src={src} alt="image" className="image" />
            <span onClick={onclick} className="cancel">
              X
            </span>
          </>
        )}
      </div>
      <div className="create__button create__button-content mt-md">
        <Button
          extra={"button-red"}
          onclick={(event) => changePage(event, "content")}
        >
          Back
        </Button>
        <Button onclick={(event) => changePage(event, "image")}>Post</Button>
      </div>
    </div>
  );
};

export default ImageLoader;
