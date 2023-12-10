const sidebarMenu = document.querySelector('#sidebar');
const buttonToggler = document.querySelector('.navigation__toggler');
const buttonCloser = document.querySelector('.sidebar_closer');

const elementNavigationMenu = document.querySelector('.navigation__menus')

// main content
const elementProjectComplate = document.querySelector('#value-project');
const elementYearComplate = document.querySelector('#value-year');

const containerValue = {
    projectComplate : 400,
    yearExperience : "30+"
}

elementProjectComplate.append(containerValue.projectComplate);
elementYearComplate.append("40+");
// main content end

// test
const navigationMenu = [{
    title : "Work",
    link : "/#"
}, {
    title : "About",
    link : "/#"
}, {
    title : "Service",
    link : "/#"
}, {
    title : "Contact",
    link : "/#"
}];

navigationMenu.map((navigation) => {
    return navigation;
})
// test end


buttonToggler.addEventListener("click", () => {
    sidebarMenu.classList.add("show");
    sidebarMenu.classList.remove("hide");
})

buttonCloser.addEventListener("click", () => {
    sidebarMenu.classList.add("hide");
    sidebarMenu.classList.remove("show");
})

