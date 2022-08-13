function append(text) {
	var list = document.getElementById("list")
	var item = document.createElement("li")
	item.classList.add("list-group-item")
	item.classList.add("selectall")
	item.appendChild(document.createTextNode(text))
	list.appendChild(item)
}
function clear() {
	var list = document.getElementById("list")
	list.innerHTML = ""
}
function makeid(length) {
    var result = ""
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength))
   }
   return result
}
function generate() {
	var agent = navigator.userAgent
	var rand = makeid(20)
	var name = document.getElementById("name").value.replace(/[^a-zA-Z]/g, "")
	if (name !== "") {
		agent = agent.replace("WebApp", name)
	}
	var _temp = agent.split(" ")[agent.split(" ").length - 3].split("/")[0]
	append(agent.replace(_temp, rand.slice(-10)).replace("Electron", rand.slice(0, 10)))
}
var cl = clear
generate()