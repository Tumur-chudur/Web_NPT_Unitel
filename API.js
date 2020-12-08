let req = new XMLHttpRequest();
//3 сек тутамд refresh хийгдэнэ
setInterval(req.onreadystatechange, 3000);
req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    let contentJSON = JSON.parse(req.responseText).resource;
    let container = document.getElementById("container");
    for (const x in contentJSON) {
      let prize = new Prize()
      prize.addPrize(contentJSON[x].title, contentJSON[x].desc, contentJSON[x].imgURL)
      let contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "gallery");
      let aTag = document.createElement("a");
      aTag.setAttribute("target", "_blank");
      aTag.setAttribute("href", prize.imgURL);
      let imgTag = document.createElement("img");
      imgTag.setAttribute("src", prize.imgURL);
      aTag.appendChild(imgTag);
      let childDiv = document.createElement("div");
      childDiv.setAttribute("class", "desc");
      let h4 = document.createElement("h4");
      let h4Text = document.createTextNode(prize.title);
      h4.appendChild(h4Text);
      let br1 = document.createElement("br");
      let br2 = document.createElement("br");
      let pDesc = document.createElement("p");
      let pText = document.createTextNode(prize.desc);
      pDesc.appendChild(pText);
      childDiv.appendChild(h4);
      childDiv.appendChild(br1);
      childDiv.appendChild(br2);
      childDiv.appendChild(pDesc);
      contentDiv.appendChild(aTag);
      contentDiv.appendChild(childDiv);
      container.appendChild(contentDiv);
    }
  }
};

req.open("GET", "https://api.jsonbin.io/b/5fcf74982946d2126fffee83", true);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader(
  "secret-key",
  "$2b$10$.ELsJz082QWUlxrBptlA9eGIdjkPL./vho1eYuzFCiDdGLTmYtqoy"
);
req.send();