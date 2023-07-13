var t1Button = document.getElementById("button-t1");

var initPage = {
  
    topCoderInfo: function(data) {
    // Assign data to a card or perform any other operations
    console.log('Top Coder:', data);
  },

  codeForcesInfo: function(data) {
    // Assign data to a card or perform any other operations
    var t1Title = document.getElementById("title-t1");
    var t1Desc = document.getElementById("description-t1");
    var t1Date = document.getElementById("date-t1");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();   
    t1Title.innerHTML = data[0].name;
    t1Desc.innerHTML = "Has Started: " + data[0].status;
    t1Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
        t1Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
        t1Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
        t1Desc.innerHTML = "Started?: " + "Finished";
    }
    

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