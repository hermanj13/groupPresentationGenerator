var groups = [{Members: 'Dane, Brooke, Mac'},
{Members: 'Alexander, Maxim, Haley'},
{Members: 'Ash, Omar, Perla'},
{Members: 'Samuel, Esperanze, Heidy'},
{Members: 'Rain, Sophia, Young'},
{Members: 'Nick, Sean, Cory, Fitsum'},
{Members: 'Jesse, Joseph, Stuart'},
{Members: 'Donald, Anastasia, Andrew'}];

var presents = ['First', 'Second', 'Third', 'Forth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];

var present = function(){
  for(let i = 0; i < presents.length; i++){
    var presentingGroup = Math.floor(Math.random() * groups.length);
    console.log('Presenting', presents[i], 'is', groups[presentingGroup].Members)
    groups.splice(presentingGroup,1)
  }
}()
