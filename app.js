var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 4sPawpUZDulDdRTPQCAmVj:7CyeP22EtEJE7AmydN0e7P");

xhr.send(data);
