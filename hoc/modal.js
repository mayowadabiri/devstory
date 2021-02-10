import Loader from "../components/loader";

const ModalComponent = ({loadingMessage}) => {
  //   console.log(props)
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__loader">
            <Loader />
            <p className="mt-sm">{loadingMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
