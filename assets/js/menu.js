const menu = [
  {
    title: "Home",
    url: "index.php",
  },
  {
    title: "About",
    url: "about.php",
  },
  {
    title: "Homeworks",
    url: "about.php",
    childrens: [
      {
        title: "JS Opdrachten",
        url: "https://github.com/BirhanBey/JSOpdrachten/blob/main/JSopdrachten.js",
        target: "_blank",
      },
      {
        title: "XIT",
        url: "things/08_xit/index.html",
        target: "_blank",
      },
      {
        title: "Mountain",
        url: "things/7_mountain/index.html",
        target: "_blank",
      },
      {
        title: "Portfolio",
        url: "things/06_portfolio/index.html",
        target: "_blank",
      },
      {
        title: "Happy Clients",
        url: "things/05_happy_clients/index.html",
        target: "_blank",
      },
      {
        title: "Tesla Roadster",
        url: "things/tesla_exercise/index.html",
        target: "_blank",
      },
      {
        title: "FigJam",
        url: "things/04_figjam_class/index.html",
        target: "_blank",
      },
      {
        title: "Position",
        url: "things/position/index.html",
        target: "_blank",
      },
      {
        title: "Humus",
        url: "things/01_recept/index.html",
        target: "_blank",
      },
    ],
  },
  {
    title: "Previous works",
    url: "blog.html",
    childrens: [
      {
        title: "Auto Rent",
        url: "previous/AutoRent/index.html",
        target: "_blank",
      },
      {
        title: "Spatial",
        url: "previous/Spatial/index.html",
        target: "_blank",
      },
      {
        title: "Transit",
        url: "previous/respSite/index.html",
        target: "_self",
      },
    ],
  },
  {
    title: "Contact",
    url: "contact.php",
  },
];

$(document).ready(function () {
  $.each(menu, function (index, value) {
    if (value.childrens != null) {
      //drowdown ekle
      $(".navbar-nav").append(
        '<li class="nav-item"><div class="dropdown"><button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">' +
          value.title +
          '</button><ul class="dropdown-menu" id="drop-' +
          index +
          '"></ul></div></li>'
      );
      //çocukları ekle
      $.each(value.childrens, function (childindex, childvalue) {
        $("#drop-" + index + "").append(
          '<li><a class="dropdown-item" href="' +
            childvalue.url +
            '" target="' +
            childvalue.target +
            '">' +
            childvalue.title +
            "</a></li>"
        );
      });
      //mobil menu
      $(".mobilnav").append(
        '<li><div class="dropdown"><button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">' +
          value.title +
          '</button><ul class="dropdown-menu" id="mobildrop-' +
          index +
          '"></ul></div></li>'
      );
      $.each(value.childrens, function (childindex, childvalue) {
        $("#mobildrop-" + index + "").append(
          '<li><a class="dropdown-item" href="' +
            childvalue.url +
            '" target="' +
            childvalue.target +
            '">' +
            childvalue.title +
            "</a></li>"
        );
      });
    } else {
      $(".navbar-nav").append(
        '<li class="nav-item"><a class="nav-link" href="' +
          value.url +
          '">' +
          value.title +
          "</a></li>"
      );
      //mobil menu
      $(".mobilnav").append(
        '<li><a href="' + value.url + '">' + value.title + "</a></li>"
      );
    }
  });
});
