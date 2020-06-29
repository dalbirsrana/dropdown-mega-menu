/**
 * File navigation.js.
 *
 * Handles navigation support for dropdown mega menu on desktop and 
 * toggling the navigation menu for small screens.
 * 
 */

( function() {
    
    let timer;
    
    // main menu container
    const container = document.querySelector('#site-navigation');
  
    // dropdown menu desktop menu button 
    const trigger_dmenu = container.querySelector('.menu-trigger');

	if ('undefined' === typeof trigger_dmenu) {
		return;
	} else {
		trigger_dmenu.setAttribute('aria-expanded', 'false');
	}

	const dmenuOn = () => {		
		if(timer) {
			clearTimeout(timer);
		}
		trigger_dmenu.setAttribute( 'aria-expanded', 'true');
		container.classList.add( 'dmenu-active' );
	};

	const dmenuOff = () => {
		timer = setTimeout(function() {
			trigger_dmenu.setAttribute( 'aria-expanded', 'false' );
			container.classList.remove( 'dmenu-active' );			
		}, 300);
	};

	const dmenuToggle  = () => {
		if (container.classList.contains('dmenu-active')) {
			trigger_dmenu.setAttribute( 'aria-expanded', 'false' );
			container.classList.remove( 'dmenu-active' );
		} else {
			trigger_dmenu.setAttribute( 'aria-expanded', 'true');
			container.classList.add( 'dmenu-active' );
		}
    }
 
    // event listener's 
	container.querySelector('.nav-link-main').addEventListener('click', dmenuToggle, false);
    
    ['mouseover', 'focus'].forEach( evt => 
		trigger_dmenu.addEventListener(evt, dmenuOn, false)
	);
    
    // ['mouseout', 'blur'].forEach( evt => 
	// 	trigger_dmenu.addEventListener(evt, dmenuOff, false)
	// ); 

	if ( 'undefined' === typeof buttonOn ) {
		return;
    }
    
    // dropdown menu list 
    const dmenu = container.querySelectorAll('.drop-menu')[0];
	if ( 'undefined' === typeof dmenu ) {
		button.style.display = 'none';
		return;
	}

    // dropdown menu mobile menu button
    const buttonOn = document.querySelector('#mobile-menu-button button');
    // dropdown menu mobile menu close button
    const buttonOff = document.querySelector('.mobile-close-btn');

	buttonOn.addEventListener('click', function() {
		container.classList.add('mobile-menu-active');
        document.body.style.overflow = 'hidden'; 
    }, 
    false); 

    buttonOff.addEventListener('click', function(e) {
		container.classList.remove('mobile-menu-active');
		document.body.style.overflow = 'auto';
		e.preventDefault();
    },
    false);


	// callback function to add event listener on list of links to add remove 'active' class
	const addDeleteActive = function (link, i, linkList) {
		link.onclick = function() {
			if(this.className === 'active') {
				this.classList.remove('active')
			} else {
				linkList.forEach((item) => {
					item.classList.remove('active')
				})
				this.classList.add('active')
			}
		}
	}

	// adding onclick event listener on (.drop-menu > li) elements 
	container.querySelectorAll('.drop-menu > li > a').forEach( addDeleteActive );

	// adding onclick event listener on (.megadrop .col > h4) elements
	container.querySelectorAll('.megadrop .col > h4').forEach( addDeleteActive );

} )();