//This GameState is for if the player has lost the game. 
function gameState2()
{
   if(gameState === 2)
   {
    seed1.destroy();
    seed2.destroy();
    seed3.destroy();
    poacher1.destroy();
    poacher2.destroy();
    poacher3.destroy();
    destroyAllThings();
    bullet.visible = false;
   }
}