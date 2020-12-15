import { useRef, useState } from 'react';
import { callUploadAPI } from 'utils';

const FileUpload = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const fileUploadInput = useRef(null);

  const onChangeHandler = (event) => {
    if (event.target.value) {
      setIsDisabled(false);
    }
  };

  const uploadClickHandler = () => {
    const data = new FormData();
    const file = fileUploadInput.current.files[0];
    data.append('profilePic', file);
    callUploadAPI(data);
  };

  //  Accept attribute specifies which files are accepted by the file input.
  return (
    <>
      <input
        type="file"
        name="profilePic"
        onChange={onChangeHandler}
        ref={fileUploadInput}
        accept=".jpg, .jpeg, .png"
        encType="multipart/form-data"
      />
      <button disabled={isDisabled} onClick={uploadClickHandler}>
        Upload Image
      </button>
    </>
  );
};

export default FileUpload;
