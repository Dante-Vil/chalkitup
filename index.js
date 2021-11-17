// This is similar to "import" in other languages
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

console.log('Hello World, so begins a short story of a brave man named' + chalk.green(' Ertugrul, ') + 'son of Suleyman Shah.');
console.log('');
console.log('He had to fight many battles, both' + chalk.yellow(' physical') + ' and' + chalk.magenta(' mental') + '. But not only did he fight his enemies the' + chalk.red(' Templars') + ', but even his own brothers -- because they got tricked by traitors in his tribe.');
console.log('');
console.log('After getting through the problems of the' + chalk.red(' Templars') + ' his tricked brothers, ' + chalk.green('Ertugrul ') + 'took his wife with child, mother, and loyal alps on a journey to' + chalk.blue(' Byzantine. ') + 'There he started his own tribe and became very prospersous -- although still with many problems and enemies. After years of struggling to keep his family and tribe safe, he finally conquered all of' + chalk.blue(' Byzantine ') + 'for his sultan, he moved on to conquer...'); 
console.log('');
chalkAnimation.rainbow('the whole world!');

// Don't need to console.log apparently or else it returns an object I think
const rainbow = chalkAnimation.rainbow('the whole world!');

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 15500);