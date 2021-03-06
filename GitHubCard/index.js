/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = [
  "cholman", 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

axios.get("https://api.github.com/users/cholman/followers")
.then(response => {
  //console.log(response.data);
  response.data.forEach(follower => {
    followersArray.push(follower.login);

  });

  followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`).then(response => {
      const user = response.data;
      entryPoint.appendChild(createCard(user));
    });
  })
});


const entryPoint = document.querySelector('.cards');


// followersArray.forEach(follower => {
//   axios.get(`https://api.github.com/users/${follower}`).then(response => {
//       console.log(response);

//       const user = response.data;
//       entryPoint.appendChild(createCard(user));
// });
// })

  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function createCard(obj){

  console.log(obj);
  const card      = document.createElement("div"),
        img       = document.createElement("img"),
        cardInfo  = document.createElement("div"),
        name      = document.createElement("h3"),
        username  = document.createElement("p"),
        location  = document.createElement("p"),
        profile   = document.createElement("p"),
        link      = document.createElement("a"),
        followers = document.createElement("p"),
        following = document.createElement("p"),
        bio       = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");
  
  username.textContent = obj.login;
  name.textContent = obj.name;
  location.textContent = obj.location;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  link.textContent = obj.html_url;
  profile.textContent = `Profile: `;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(link);

  img.src = obj.avatar_url;
  link.href = obj.html_url;

 

  //console.log(card);
  return(card);

}

