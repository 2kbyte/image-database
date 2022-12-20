function imgListener(){
    let name = document.getElementById("1").attributes[1].textContent;
    let nameSplit = name.split("/");
    let lastSplit = nameSplit[nameSplit.length - 1];
    console.log(lastSplit);
    
    const div = document.getElementById('2');
    div.textContent = lastSplit;
}