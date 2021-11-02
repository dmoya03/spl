/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.getElementById('titleScreen').textContent = document.querySelector('.nav__menu a[href*=' + sectionId + ']').textContent
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
           console.log('Id de seccion: '+sectionId+'')
        }else{
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TOGGLE TITLE FIRST SECTION WHILE SCROLLING ===============*/
window.addEventListener('scroll', function() {
    var titleBar = document.querySelector('#titleScreen'); 
    
	var bigTitleHomeSection = document.querySelector('#homeSectionTitle');
	var positionBigTitleHomeSection = bigTitleHomeSection.getBoundingClientRect();

    var aboutSection = document.querySelector('#about');
    var positionAboutSection = aboutSection.getBoundingClientRect();

    var homeSection = document.querySelector('#home');
    var positionHomeSection = homeSection.getBoundingClientRect();

	// checking whether bigTitleHomeSection fully visible
	if(positionBigTitleHomeSection.top >= 0 && positionBigTitleHomeSection.bottom <= window.innerHeight) {
        titleBar.textContent = '';
		console.log('Big Title on Home Section is fully visible in screen');
	}

    // checking whether HomeSection fully visible
	if(positionHomeSection.top >= 0 && positionHomeSection.bottom <= window.innerHeight) {
        titleBar.textContent = 'Home';
		console.log('Home Section is fully visible in screen');
	}

	// checking bigTitleHomeSection for partial visibility
	if(positionBigTitleHomeSection.top < window.innerHeight && positionBigTitleHomeSection.bottom >= 0) {
		console.log('Big Title on Home Section is partially visible in screen');
        //titleBar.textContent = 'Home';
	}

    //Checking about section fully visibility
    if(positionAboutSection.top >= 0 && positionAboutSection.bottom <= window.innerHeight) {
        titleBar.textContent = 'About';
		console.log('About section is fully visible in screen');
	}

});