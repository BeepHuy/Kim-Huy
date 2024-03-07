const MainImg = document.getElementById("MainImg");
const smalling = document.getElementsByClassName("small-img");

for (let i = 0; i < smalling.length; i++) {
    smalling[i].onclick = function() {
        MainImg.src = smalling[i].src;
    }
}

// smalling[0].onclick = function() {
//     MainImg.src = smalling[0].src
// }
// smalling[1].onclick = function() {
//     MainImg.src = smalling[1].src
// }
// smalling[2].onclick = function() {
//     MainImg.src = smalling[2].src
// }
// smalling[3].onclick = function() {
//     MainImg.src = smalling[3].src
// }