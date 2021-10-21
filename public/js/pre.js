(async function ($) {
  "use strict";
  document.getElementById("top_title").style = "display:none";
  document.querySelectorAll("link").forEach(function (each) {
    if (each.href.indexOf("load.php") > 1) {
      let parent = each.parentElement
      let newLink = document.createElement("link")
      newLink.rel = "stylesheet"
      newLink.onload = function () { parent.removeChild(each); }
      newLink.href = "https://2021.igem.org/wiki/index.php?title=Team:Tongji_China/css/overwrite.css&action=raw&ctype=text/css";
      parent.append(newLink)
    }
  });
})(jQuery);
