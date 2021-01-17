describe('Game', function(){
  
  var game;

  beforeEach(function(){
    game = new Game(); 
  });

 it('should return 0 for a gutter game', function() {
  for (let i = 0; i < 20; i++) {
    game.roll(0);
  } 
  expect(game.score).toEqual(0);
 })

 it('should return 20 for a singles game', function(){
   for (let i = 0; i < 20; i++) {
     game.roll(1);
   }
   expect(game.score).toEqual(20);
 })
})