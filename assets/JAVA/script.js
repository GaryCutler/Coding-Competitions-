var t1Button = document.getElementById("button-t1");
var t2Button = document.getElementById("button-t2");
var t3Button = document.getElementById("button-t3");

var initPage = {
  
  codeForcesInfo: function(data) {
    // var t1Title = document.getElementById("title-t1");
    var t1Desc = document.getElementById("description-t1");
    var t1Date = document.getElementById("date-t1");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();   
    // t1Title.innerHTML = data[0].name;
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
    // var t2Title = document.getElementById("title-t2");
    var t2Desc = document.getElementById("description-t2");
    var t2Date = document.getElementById("date-t2");
    var dateStr = data[10].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t2Title.innerHTML = data[10].name;
    t2Date.innerHTML = formattedDate;
    if (data[10].status === "BEFORE") {
      t2Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[10].status === "CODING") {
      t2Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t2Desc.innerHTML = "Started?: " + "Finished";
    }

    console.log('Code Chef:', data);
  },

  atCoderInfo: function(data) {
    // var t3Title = document.getElementById("title-t3");
    var t3Desc = document.getElementById("description-t3");
    var t3Date = document.getElementById("date-t3");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t3Title.innerHTML = data[0].name;
    t3Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
      t3Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t3Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t3Desc.innerHTML = "Started?: " + "Finished";
    }
    console.log('Top Coder:', data);
  }
};

var fetchPromises = [
  fetch("https://kontests.net/api/v1/at_coder").then(response => response.json()),
  fetch("https://kontests.net/api/v1/codeforces").then(response => response.json()),
  fetch("https://kontests.net/api/v1/code_chef").then(response => response.json())
];

Promise.all(fetchPromises)
  .then(responses => {
    const [atCoderData, codeForcesData, codeChefData] = responses;
    initPage.atCoderInfo(atCoderData);
    initPage.codeForcesInfo(codeForcesData);
    initPage.codeChefInfo(codeChefData);
  })
  .catch(error => {
    console.log('Error:', error);
  });