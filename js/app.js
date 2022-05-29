/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



// Define Global Variables
const navbar = document.querySelector(".navbar__menu");
const navlist = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");

// build the nav
allSections.forEach((singleSection, index) => {
	singleSection.setAttribute("data-attr", `block ${index + 1}`);
	let navitem = document.createElement("li");
	navitem.className = "nav-item";

	// Build menu
	let navlink = document.createElement("a");
	navlink.href = "javascript:void(0)";
	navlink.id = "link" + (index + 1);
	navlink.innerHTML = `Section ${index + 1}`;
	navlink.className = "menu__link";

	navitem.appendChild(navlink);
	navlist.append(navitem);
});

// Scroll to appropriate section on click of the navigation link
(function () {
	for (let i = 0; i < allSections.length; i++) {
		let menulink = document.getElementById("link" + (i + 1));
		menulink.addEventListener("click", (e) => {
			e.preventDefault();
			let section = document.getElementById("section" + (i + 1));
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
			section.style.cssText = "padding-top: 50px";

		});
	}
})();

// Add class 'active' to section when near top of viewport
const sectionInView = () => {
	for (let x = 0; x < allSections.length; x++) {
		let section = document.getElementById("section" + (x + 1));
		let menulink = document.getElementById("link" + (x + 1));
		let getSection = section.getBoundingClientRect();

		// Set sections as active
		if (getSection.top <= 10 && getSection.bottom >= 10) {
			section.classList.add("active-class");
			menulink.classList.add("active");
		} else {
			section.classList.remove("active-class");
			menulink.classList.remove("active");
		}
	}
};
document.addEventListener("scroll", sectionInView);

// Create the scroll to top button
let scrollBtn = document.createElement("div");
let scrollToTop = document.createElement("a");
let scrollIcon = document.createElement("img");

scrollToTop.appendChild(scrollIcon);
scrollBtn.appendChild(scrollToTop);

scrollBtn.classList.add("scroll-btn");
scrollToTop.setAttribute("id", "scroll-to-top");
scrollToTop.setAttribute("href", "javascript:void(0)");
scrollIcon.src = "svg/ios-arrow-up.svg";

document.body.appendChild(scrollBtn);

window.onscroll = function () {
	if (window.scrollY > 20) {
		scrollBtn.classList.add("show");
	} else {
		scrollBtn.classList.remove("show");
	}
}
// Scroll to top of page using scrollTO event
scrollBtn.onclick = function () {
	window.scrollTo(0, 0);
}
document.documentElement.style.scrollBehavior = "smooth"






