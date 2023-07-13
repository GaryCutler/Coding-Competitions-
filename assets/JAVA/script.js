// var tiles = document.querySelector(".tile");
// var tile1 = document.getElementById("tile1");
// var tile2 = document.getElementById("tile2");
// var tile3 = document.getElementById("tile3");

var initPage = {
  
    topCoderInfo: function(data) {
    // Assign data to a card or perform any other operations
    console.log('Top Coder:', data);
  },

  codeForcesInfo: function(data) {
    // Assign data to a card or perform any other operations
    console.log('Code Forces:', data);
  },

  codeChefInfo: function(data) {
    // Assign data to a card or perform any other operations
    console.log('Code Chef:', data);
  }
};

var fetchPromises = [
  fetch("https://kontests.net/api/v1/top_coder").then(response => response.json()),
  fetch("https://kontests.net/api/v1/codeforces").then(response => response.json()),
  fetch("https://kontests.net/api/v1/code_chef").then(response => response.json())
];

Promise.all(fetchPromises)
  .then(responses => {
    const [topCoderData, codeForcesData, codeChefData] = responses;
    initPage.topCoderInfo(topCoderData);
    initPage.codeForcesInfo(codeForcesData);
    initPage.codeChefInfo(codeChefData);
  })
  .catch(error => {
    console.log('Error:', error);
  });