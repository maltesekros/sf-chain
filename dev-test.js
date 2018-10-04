const Block = require('./block');

// const block = new Block('foo', 'bar!!!!!!', 'zoo', 'this is the data');
//
// console.log(block.toString());
// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
const fightersBlock = Block.mineBlock(fooBlock, 'fighters');

console.log(fooBlock.toString());
console.log(fightersBlock.toString());