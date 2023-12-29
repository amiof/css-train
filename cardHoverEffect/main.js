let cards=document.querySelectorAll(".card")
console.log(cards);
cards.forEach(card => {
  card.onmousemove=(e)=>{
    let x = e.pageX - card.offsetLeft;
    let y =e.pageY - card.offsetTop;
    // you can use it 
    // let x = e.layerX
    // let y = e.layerY
    // console.log(x,y,e);
    card.style.setProperty("--x", x + "px")
    card.style.setProperty("--y", y + "px")
  }
});
