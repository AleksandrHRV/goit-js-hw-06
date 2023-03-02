const allItemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItemList.length}`);

//   пробел
console.log("")

allItemList.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  
  //   пробел
  console.log("")
});
