const lists = Array.from(document.querySelectorAll("li"));
lists[0].children[1].style.display = "inline";
lists[0].children[0].classList.add('h2');
lists[0].children[0].children[0].classList.toggle('arrow-img-up');
let lastClickIndex=0;
for(let li of lists){
  let lastClickDisplay = true;
  li.children[0].addEventListener('click',(event)=>{
    for(let x of lists){
      if(lists.indexOf(li) !== lastClickIndex){
        x.children[0].classList.remove('h2');
        x.children[1].style.display = 'none';
        x.children[0].children[0].classList.remove('arrow-img-up');
      }
    }
    if(lastClickIndex == lists.indexOf(li) && lastClickDisplay == true){
      li.children[1].style.display = 'none';
      li.children[0].children[0].classList.remove('arrow-img-up');
      lastClickDisplay = false;
    }else{
    li.children[1].style.display = 'inline';
    li.children[0].children[0].classList.add('arrow-img-up');
    lastClickDisplay = true;
    }
    li.children[0].classList.toggle('h2');
    lastClickIndex = lists.indexOf(li);
    
  })
}
