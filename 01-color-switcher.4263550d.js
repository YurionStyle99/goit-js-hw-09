!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.getElementsByTagName("body")[0];t.disabled=!0,e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0}));var d=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));a.style.backgroundColor=e}),1e3);t.addEventListener("click",(function(){clearInterval(d),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.4263550d.js.map