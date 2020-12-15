import { useState } from 'react';
import { fetchProfilePic } from 'utils';

const ShowcaseProfilePic = () => {
  const [imageURI, setImageURI] = useState();

  const getClickHandler = async () => {
    console.log('Clicked Get', userID);
    // Wait to fetch the image from the API  
    const image = await fetchProfilePic(userID);
    
    // Update the state with image from the DB
    setImageURI(image);
  };

  const [userID, setUserID] = useState('');

  return (
    <div>
      <input
        type="number"
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
