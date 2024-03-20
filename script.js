const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault(); // Corrected the typo: preventDefault instead of preventDeafult
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value); 
});

function fetchFile(url) {
    // fetching file & returning response as blob 
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL creates a URL of passed object
        let tempUrl = URL.createObjectURL(file); // Corrected the typo: createObjectURL instead of createObjectURl
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
         // passing file last name & extension as download value of <a> tag
        aTag.download = "filename";
        document.body.appendChild(aTag); // adding <a> tag inside body
        aTag.click(); // clicking <a> tag so the file downloads
        aTag.remove(); // removing <a> tag once file downloaded
        URL.revokeObjectURL(tempUrl); // Corrected the typo: revokeObjectURL instead of revokeObjectURL
        downloadBtn.innerText = "Download file";
    }).catch(() => {
        // catch method will call if any error comes during downloading 
        downloadBtn.innerText = "Download File";
        alert("failed to download file!");
    });
}
