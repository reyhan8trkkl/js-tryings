const h1Items = document.getElementsByClassName("title") // chose h1 elements which includes 'title' class.

for (let i = 0; i < h1Items.length; i++) {

    let newSpans  = document.createElement("span")
    newSpans.innerHTML = `span`
    if (h1Items[i].innerHTML.includes("span")) {
        continue
    }

  h1Items[i].appendChild(newSpans)
    
}