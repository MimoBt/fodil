
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting){
       entry.target.classList.add("show");
      }else{
        entry.target.classList.remove("show");
      }
    });
   
   });
   
   const hiddenElements = document.querySelectorAll(".hidden");
   console.log(hiddenElements);
   hiddenElements.forEach((el) => observer.observe(el));


   const hamburger = document.querySelector('.humberger-menu');
   const nav = document.querySelector('.main-nav');

   hamburger.addEventListener('click', () => {
       nav.classList.toggle('active');
   });