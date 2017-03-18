var args = process.argv
var React = require("react")
var Main = require("./js/main.js")
var props = JSON.parse(process.argv[3])
console.log(Main.init(props))
