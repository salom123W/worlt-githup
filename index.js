let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop- 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);

        if(top >= offset && top < offset + height) {
           navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('acttive');
           });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scroll > 100);
};



const typed =  new Typed('.multiple-text',{
   strings:['Frontend Developer','Youtuber','Xaker'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000, 
   loop:true
});