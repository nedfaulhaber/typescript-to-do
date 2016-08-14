/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of Mischief",
    email: "loki@geocites.com"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };
}
