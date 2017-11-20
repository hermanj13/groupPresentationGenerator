let inquirer = require('inquirer')

var groups = [{
  name: "B.S Detect",
  members: "Young, Dane, Esperanza, Sean"
}, {
  name: "CongressWatch",
  members: "Joseph, Rain, Alexander"
}, {
  name: "Mind Reader",
  members: "Fitsum, Melanie, Heidy"
}, {
  name: "BoredBuddy",
  members: "Samuel, Nick, Perla"
}, {
  name: "For The People",
  members: "Andrew, Omar, Ash"
}, {
  name: "Group 6",
  members: "Jesse, DJ, Haley"
}, {
  name: "Gitify",
  members: "Stuart, Brooke, Sophia"
}, {
  name: "Group 8",
  members: "Ani, Cory, Max"
}];

var presents = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth'];

var randomize = function() {
  return Math.floor(Math.random() * groups.length);
}

var groupRunner = function() {
  var i = 0;
  groupRunnerHelper(i);
};

var groupRunnerHelper = function(i) {
  if (groups.length != 0) {
    var presentingGroup = randomize();
    console.log('Presenting', presents[i], 'is', groups[presentingGroup].name + ".", groups[presentingGroup].members, "come on down!");
    inquirer
      .prompt([{
        type: "confirm",
        name: "done",
        message: "Is " + groups[presentingGroup].name + " done?"
      }])
      .then(function(val) {
        groups.splice(presentingGroup, 1);
        i++;
        groupRunnerHelper(i);
      })
  }
}

groupRunner()
