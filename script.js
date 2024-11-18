var inputvalue = "KiranChannagiri";
let input = document.querySelector(".input");
let img = document.querySelector(".img");
let date = document.querySelector(".date");
let bioooo = document.querySelector(".bio");
let repos = document.querySelector(".repos");
let Followers = document.querySelector(".Followers");
let following = document.querySelector(".following");
let locationn = document.querySelector(".location");
let name = document.querySelector(".name");
console.log(locationn);
let link = document.querySelector(".link");
let twitter = document.querySelector(".twitter");
let company = document.querySelector(".company");
let url = document.querySelector(".url");
document.querySelector(".search").addEventListener("click", () => {
  if(input.value=="")
  {
    alert("Enter the text in the input field")
  }
  else 
  {
    inputvalue = input.value;
    ApiCall();
  }
  
});
async function ApiCall() {
  console.log("inside the async function");

  console.log(inputvalue);
  let response = await fetch(`https://api.github.com/users/${inputvalue}`);
  let output = await response.json();
  console.log(output);
  img.src = output.avatar_url;
  let datee = output.created_at;
  let slicedDate = datee.slice(0, 10);
  date.textContent = slicedDate;
  if (output.bio == null) {
    bioooo.textContent = "This Profile has no Bio";
  } else {
    bioooo.textContent = output.bio;
  }
  name.textContent = output.name;
  repos.textContent = output.public_repos;
  Followers.textContent = output.followers;
  following.textContent = output.following;
  repos.href = output.repos_url;
  Followers.href = output.followers_url;
  following.href = output.following_url;
  url.href = output.url;
  url.textContent = "@" + output.login;
  if (output.location == null) {
    locationn.textContent = "Not Available";
  } else {
    locationn.textContent = output.location;
  }

  if (output.company == null) {
    company.textContent = "Not Available";
  } else {
    company.textContent = output.company;
  }

  if (output.blog == "") {
    link.textContent = "Not Available";
  } else {
    link.textContent = output.blog;
    link.href = output.blog;
  }

  if (output.twitter_username == null) {
    twitter.textContent = "Not Available";
  } else {
    twitter.textContent = output.twitter_username;
    twitter.href = "https://twitter.com/" + output.twitter_username;
  }
}
//
ApiCall();
