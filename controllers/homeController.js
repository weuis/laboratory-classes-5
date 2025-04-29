const { MENU_LINKS } = require("../constants/navigation");

exports.getHomeView = (request, response) => {
  response.render("home.ejs", {
    headTitle: "My Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
};

