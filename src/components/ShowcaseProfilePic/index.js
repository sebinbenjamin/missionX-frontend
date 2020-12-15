import { useState } from 'react';
import { fetchProfilePic } from 'utils';

const ShowcaseProfilePic = () => {
  const [imageURI, setImageURI] = useState();
  const getClickHandler = async () => {
    console.log('Clicked Get', userID);
    const image = await fetchProfilePic(userID);
    setImageURI(image);
  };

  const [userID, setUserID] = useState('');

  return (
    <div>
      <input
        type="text"
        value={userID}
        onInput={(e) => setUserID(e.target.value)}
      />
      <button onClick={getClickHandler}>Show Profile Pic</button>
      <hr></hr>
      <img src={imageURI} alt="Profile"></img>
    </div>
  );
};

export default ShowcaseProfilePic;
