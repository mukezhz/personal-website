/************************************************
 REQUIRED URLS
 ************************************************/
const username = "mukezhz";
const githubApiUrl = `https://api.github.com/users/${username}`;
const githunRepoUrl = `https://api.github.com/users/${username}/repos`;

const URLS = [
  {
    icon: "github",
    url: "github.com",
  },
  {
    icon: "gitlab",
    url: "gitlab.com",
  },
  {
    icon: "telegram",
    url: "t.me",
  },
  {
    icon: "twitter",
    url: "twitter.com",
  },
  {
    icon: "instagram",
    url: "instagram.com",
  },
];
/************************************************
 ELEMENTS REFERENCES
 ************************************************/
const profileImage = document.querySelector("#profile-img");
const description = document.querySelector("#about-me");
const fname = document.querySelector("#fname");
const ul = document.querySelector("#repo");

const contact = document.querySelector("#contact");
const footer = document.querySelector("#footer");
const wrap = document.querySelector("#wrap");
const loading = document.querySelector("#loading");

const hidden = true;

function errorCheck(ok = true, status = "", statusText = "") {
  statusText = statusText.toLowerCase();
  status = parseInt(status);
  if (status > 400 || statusText.includes("forbid") || !ok) {
    throw `Error Occur: ${status} : ${statusText}`;
    // console.log(`Error Occur: ${status} : ${statusText}`);
  }
}

/***************************************
 FETCHING THE DATA
 ***************************************/
// Fetching JSON
async function getGithubJSON(url = "") {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const { statusText, status, ok } = response;
    errorCheck(ok, status, statusText);
    if (response.ok) return response.json(); // parses JSON response into native JavaScript objects
  } catch (e) {
    console.log(e);
  }
}
// Selecting info or repo to fetch
async function githubInfo(choose = "") {
  try {
    if (choose == "repo") {
      return await getGithubJSON(githunRepoUrl);
    } else {
      return await getGithubJSON(githubApiUrl);
    }
  } catch (e) {
    console.log("Error fetching");
  }
}

function setProfileImage(data, size = 200) {
  profileImage.width = size;
  profileImage.src = data.avatar_url;
}

function setName(data) {
  fname.textContent = data.name;
}

function setDescription(data) {
  description.textContent = data.bio;
}

function getRepos() {
  githubInfo("repo").then((data) => {
    const repos = data;
    repos.forEach((repo) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.appendChild(document.createTextNode(repo.name));
      a.appendChild(li);
      a.href = repo.html_url;
      a.target = "blank";
      ul.appendChild(a);
    });
  });
}

async function setInfo() {
  try {
    const data = await githubInfo();
    if (data.message)
      if (data.message.toLowerCase().includes("api rate limit"))
        throw "API Rate Limit Exceed";
    setProfileImage(data);
    setName(data);
    setDescription(data);
    await getRepos();
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}

/*********************************
 CONTACT SECTION
 *********************************/
function createIcon(iconname) {
  const i = document.createElement("i");
  i.setAttribute("class", `fab fa-${iconname}`);
  return i;
}

function createUrl(url) {
  const a = document.createElement("a");
  a.href = `https://${url}/${username}`;
  return a;
}

function setUrltoIcon(i, a) {
  a.appendChild(i);
}

function initIconUrl(iconname, url) {
  const i = createIcon(iconname);
  const a = createUrl(url);
  setUrltoIcon(i, a);
  return { i, a };
}

function setContact(iconname, url) {
  URLS.forEach((data) => {
    const { icon, url } = data;
    const { i, a } = initIconUrl(icon, url);
    contact.appendChild(a);
  });
}

setContact();
setInfo()
  .then((d) => {
    wrap.hidden = !hidden;
    return d;
  })
  .then((d) => {
    loading.hidden = hidden;
    loading.setAttribute("style", "display: none");
  });

footer.textContent = `©️ ${new Date().getUTCFullYear()}`;
