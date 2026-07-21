import { playClick } from "../util/playClick";


function Games() {
    return (
    <div className="page">
        <h1 className = "section-title">My Games</h1>
        <div className = "game-card">
            <h2 className = "game-title">Smart TicTacToe Game</h2>
        <p className = "game-description">A classic game that everyone knows. Originally played with paper and pencil, now you can
            challenge the Artificial Intelligence opponent with theree difficulty levels: Easy , Normal , and Hard.
            You can also play manually against a friend in 2 Players mode. The game support multiple languages and allows
            you to mute the sounds. Be careful with the Hard difficulty level , as no one has been able to defeat it yet.
            Can you be the first one? Give it a try!
        </p>
        <a href="https://tictaktoegamebyjawadjammoul49739.pages.dev/"><button className="game-button" onClick={playClick}>Play Smart TicTacToe Game</button></a>
        </div>
        <div className="game-card">
             <h2 className = "game-title">Crazy Snake Game</h2>
        <p className = "game-description">Every time you eat an apple, your snake grows longer. After eating six apples, a lemon appears temporarily.
           Eating it gives you bonus points. But be careful! After every five apples, a temporary bomb appears. If you touch it, you lose
           the game. The game includes multiple snake speeds, language switching, and a shop where you can customize the snake's color and appearance after reaching certain 
           high scores. For the best experience on PC, it is recommended to control the snake using the keyboard arrow keys instead of
           the on-screen Left, Right, Up, and Down buttons.</p>
        <a href="https://crazysnackgame98437.pages.dev"><button className="game-button" onClick={playClick}>Play Crazy Snake</button></a>
        </div>      
    </div>
    );
}
export default Games;