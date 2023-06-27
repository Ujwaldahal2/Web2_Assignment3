function changeImage(item) {
    var enlargedItem = document.querySelector(".enlargedItem");
    enlargedItem.innerHTML = item.querySelector(".box-content").innerHTML;
}