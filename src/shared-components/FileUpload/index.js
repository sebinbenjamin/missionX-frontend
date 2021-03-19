import { useRef, useState } from 'react';
import { callUploadAPI } from 'utils';

const FileUpload = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  // Use ref is, in simple terms, a way to refer to a HTML element in react
  // It kind of is used like the document.getElementById
  const fileUploadInput = useRef(null);

  const onChangeHandler = (event) => {
    if (event.target.value) {
      setIsDisabled(false);
    }
  };

  const uploadClickHandler = () => {
    const data = new FormData();
    const file = fileUploadInput.current.files[0];
    // `profilePic` is the name of the field. 
    // The same should be used in the backend || uploadMemory.single('profilePic') ||
    data.append('profilePic', file);
    callUploadAPI(data);
  };

  // Accept attribute specifies which files are accepted by the file input.
  // The name attribute here needs to match the one appended to the formData. 
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
