const axios = require('axios');

const getUserInfo = async (accessToken) => {
  try {
    const response = await axios.get('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userInfo = response.data;
    return userInfo;
  } catch (error) {
    throw error;
  }
};


const getUser=(req,res)=>{
    const accessToken = global.access_token_calendar; // Replace with the actual access token
    getUserInfo(accessToken)
  .then((userInfo) => {
    const userName = userInfo.name;
    const userpic = userInfo.picture;
    const userEmail=userInfo.email;

    res.json({"username":userName,"Email":userEmail,"userpic":userpic})
  })
  .catch((error) => {
    console.error('Error fetching user information:', error.message);
  });

}

module.exports=getUser;
