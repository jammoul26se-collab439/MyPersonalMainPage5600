import { playClick } from "../util/playClick";

function Books() {
    return (
        <>
        <div className="page">
           <h1 className="section-title">My University's Book(Bachelor)</h1>
           <p className="game-description">You can purchase programming books that are taught at universities. Each book combines
            multiple trusted sources into one organized and easy-to-understand guide. The content is shorter , clearer, and better
            structured, making it easier to study and review. You can place your order , and the books will be delivered anywhere in 
            Lebanon. The prices are carefully calculated based on the production cost , delivery fees , intermediary costs , and fair
            personal profit. Order you books today and start learning more efficiently.
        </p>
        <a href="https://example.com"><button className = "game-button" onClick={(e) => {
           e.preventDefault();
           playClick();
           setTimeout( () => {
            window.location.href="https://example.com";
           },150);
        }}>Order My Books</button></a>
        </div>
        </>
    );
}

export default Books;