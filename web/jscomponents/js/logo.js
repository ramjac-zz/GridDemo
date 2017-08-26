var root = document.getElementById("logo");
var count = 0 // added a variable

var Logo = {
	view: function() {
		return m("span", {
				class: "title"
			}, "CSS Grid Demo");
	}
};

m.mount(root, Logo)