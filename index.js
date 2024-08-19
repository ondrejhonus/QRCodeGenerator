function QRSubmit(){
    let contents = document.getElementById("QRCodeInput").value;
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${contents}`).then((data) => {
      QRCodeURL = data.url;
      console.log(QRCodeURL);
      let codeDiv = document.querySelector(".code");
      codeDiv.innerHTML = `<img src="${QRCodeURL}" alt="qr-code" clas="box"></img>`
    });
}