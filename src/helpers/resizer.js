 export function resizer(elem) {
   let item = document.querySelectorAll(elem);
   let h = [];
   let m;
   item.forEach((el) => {
     h.push(el.offsetHeight);
   });
   m = Math.max(...h);
   item.forEach((el) => (el.style.height = m + 'px'));
 }
