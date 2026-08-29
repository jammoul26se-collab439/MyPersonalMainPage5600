import "../styles/Games.css";
import { playClick } from "../util/playClick";
import { useState } from "react";
function Games({language , playMusic , stopMusic}) {
    const [page ,setPage] = useState(1);
    const gamesText = {
    en: {
        title: "My Games",
        ticTitle: "Smart TicTacToe Game",
        ticDescription:
`A classic game that everyone knows. Originally played with paper and pencil, now you can challenge the Artificial Intelligence opponent with three difficulty levels: Easy, Normal, and Hard. You can also play manually against a friend in 2 Players mode. The game supports multiple languages and allows you to mute the sounds. Be careful with the Hard difficulty level, as no one has been able to defeat it yet. Can you be the first one? Give it a try!`,
        ticButton: "Play Smart TicTacToe Game",
        snakeTitle: "Crazy Snake Game",
        snakeDescription:
`Every time you eat an apple, your snake grows longer. After eating six apples, a lemon appears temporarily. Eating it gives you bonus points. But be careful! After every five apples, a temporary bomb appears. If you touch it, you lose the game. The game includes multiple snake speeds, language switching, and a shop where you can customize the snake's color and appearance after reaching certain high scores.`,
        snakeButton: "Play Crazy Snake Game" , 
        prev: "Prev" ,
        next: "Next" ,
        chessTitle: "Chess Game",
        chessDescription:
`A game that combines tactics, brainpower, and strategic planning. It features three difficulty levels, a "Makhlouta" mode, and 1v1 gameplay. I've also added my own touches, including new sounds and custom rules in a special game mode.
The AI plays against you according to the difficulty level you choose at the beginning of the game, while a timer limits the time available for each player's turn depending on the selected difficulty.
This is the third web game I've created. Is the idea old? Yes. But with some special touches? Awesome!`,
chessButton: "Play Chess Game" 
    },

fr: {
    title: "Mes Jeux",
    ticTitle: "Jeu Smart TicTacToe",
    ticDescription:
`Un jeu classique que tout le monde connaît. Autrefois joué avec du papier et un crayon, vous pouvez maintenant affronter une intelligence artificielle avec trois niveaux de difficulté : Facile, Normal et Difficile. Vous pouvez également jouer manuellement contre un ami en mode 2 joueurs. Le jeu prend en charge plusieurs langues et vous permet de couper les sons. Attention au niveau Difficile, car personne n'a encore réussi à le battre. Serez-vous le premier ? Essayez dès maintenant !`,
    ticButton: "Jouer à Smart TicTacToe",
    snakeTitle: "Jeu Crazy Snake",
    snakeDescription:
`Chaque fois que vous mangez une pomme, votre serpent grandit. Après avoir mangé six pommes, un citron apparaît temporairement. Le manger vous rapporte des points bonus. Mais attention ! Toutes les cinq pommes, une bombe temporaire apparaît. Si vous la touchez, vous perdez la partie. Le jeu propose plusieurs vitesses de déplacement du serpent, le changement de langue et une boutique où vous pouvez personnaliser la couleur et l'apparence du serpent après avoir atteint certains scores élevés. Pour une meilleure expérience sur PC, il est recommandé de contrôler le serpent avec les touches fléchées du clavier plutôt qu'avec les boutons Gauche, Droite, Haut et Bas affichés à l'écran.`,
    snakeButton: "Jouer à Crazy Snake" , 
    prev: "Précédent",
    next: "Suivant",
    chessTitle: "Jeu d'échecs",
chessDescription:
`Un jeu qui combine la stratégie, la réflexion et la planification. Il propose trois niveaux de difficulté, un mode "Makhlouta" et des parties en 1 contre 1. J'y ai également ajouté mes propres touches, notamment de nouveaux sons et des règles personnalisées dans un mode de jeu spécial.
L'intelligence artificielle joue contre vous selon le niveau de difficulté que vous choisissez au début de la partie, tandis qu'un chronomètre limite le temps disponible pour le tour de chaque joueur en fonction du niveau sélectionné.
Il s'agit du troisième jeu web que j'ai créé. L'idée est-elle ancienne ? Oui. Mais avec quelques touches spéciales ? Génial !`,
chessButton: "Jouer aux échecs"
},

es: {
    title: "Mis Juegos",
    ticTitle: "Juego Smart TicTacToe",
    ticDescription:
`Un juego clásico que todo el mundo conoce. Originalmente se jugaba con papel y lápiz, pero ahora puedes desafiar a una Inteligencia Artificial con tres niveles de dificultad: Fácil, Normal y Difícil. También puedes jugar manualmente contra un amigo en el modo de 2 jugadores. El juego admite varios idiomas y te permite silenciar los sonidos. Ten cuidado con el nivel Difícil, ya que nadie ha logrado derrotarlo todavía. ¿Serás el primero? ¡Pruébalo!`,
    ticButton: "Jugar Smart TicTacToe",
    snakeTitle: "Juego Crazy Snake",
    snakeDescription:
`Cada vez que comes una manzana, tu serpiente crece. Después de comer seis manzanas, aparece temporalmente un limón. Comerlo te da puntos extra. ¡Pero cuidado! Después de cada cinco manzanas aparece temporalmente una bomba. Si la tocas, perderás la partida. El juego incluye varias velocidades para la serpiente, cambio de idioma y una tienda donde puedes personalizar el color y la apariencia de la serpiente al alcanzar determinadas puntuaciones altas. Para una mejor experiencia en PC, se recomienda controlar la serpiente con las teclas de dirección del teclado en lugar de los botones Izquierda, Derecha, Arriba y Abajo que aparecen en la pantalla.`,
    snakeButton: "Jugar Crazy Snake" , 
    prev: "Anterior",
    next: "Siguiente",
    chessTitle: "Juego de Ajedrez",
chessDescription:
`Un juego que combina táctica, inteligencia y planificación estratégica. Cuenta con tres niveles de dificultad, un modo "Makhlouta" y partidas 1 contra 1. También he añadido mis propios toques, incluyendo nuevos sonidos y reglas personalizadas en un modo de juego especial.
La inteligencia artificial juega contra ti según el nivel de dificultad que elijas al comienzo de la partida, mientras que un temporizador limita el tiempo disponible para el turno de cada jugador según el nivel seleccionado.
Este es el tercer juego web que he creado. ¿La idea es antigua? Sí. Pero con algunos toques especiales, ¿genial? ¡Por supuesto!`,
chessButton: "Jugar al Ajedrez"
},

ru: {
    title: "Мои Игры",
    ticTitle: "Умные Крестики-нолики",
    ticDescription:
`Классическая игра, которую знает каждый. Раньше в неё играли на бумаге карандашом, а теперь вы можете сразиться с искусственным интеллектом на трёх уровнях сложности: лёгком, среднем и сложном. Также доступен режим игры с другом для двух игроков. Игра поддерживает несколько языков и позволяет отключать звуки. Будьте осторожны с высоким уровнем сложности — пока ещё никому не удалось победить его. Сможете ли вы стать первым? Попробуйте!`,
    ticButton: "Играть в Smart TicTacToe",
    snakeTitle: "Игра Crazy Snake",
    snakeDescription:
`Каждый раз, когда вы съедаете яблоко, змейка становится длиннее. После шести съеденных яблок временно появляется лимон. Если съесть его, вы получите дополнительные очки. Но будьте осторожны! После каждых пяти яблок временно появляется бомба. Если вы коснётесь её, игра закончится поражением. В игре доступны несколько скоростей движения змейки, переключение языков и магазин, где можно изменить цвет и внешний вид змейки после достижения определённых высоких результатов. Для наилучшего игрового процесса на компьютере рекомендуется управлять змейкой с помощью клавиш-стрелок на клавиатуре, а не экранных кнопок Влево, Вправо, Вверх и Вниз.`,
    snakeButton: "Играть в Crazy Snake" ,
     prev: "Назад",
     next: "Далее",
     chessTitle: "Шахматная игра",
     chessDescription:
`Игра, сочетающая тактику, логику и стратегическое планирование. В ней доступны три уровня сложности, режим "Makhlouta" и игра один на один. Я также добавил свои собственные особенности, включая новые звуки и специальные правила в отдельном игровом режиме.
Искусственный интеллект играет против вас в соответствии с выбранным в начале игры уровнем сложности, а таймер ограничивает время хода каждого игрока в зависимости от выбранного уровня.
Это третья веб-игра, которую я создал. Идея старая? Да. Но с некоторыми особенными деталями? Отлично!`,
chessButton: "Играть в шахматы"
},

ar: {
    title: "ألعابي",
    ticTitle: "لعبة إكس أو الذكية",
    ticDescription:
`لعبة كلاسيكية يعرفها الجميع. كانت تُلعب قديمًا باستخدام الورقة والقلم، أما الآن فيمكنك تحدي الذكاء الاصطناعي بثلاثة مستويات صعوبة: سهل، عادي، وصعب. كما يمكنك اللعب يدويًا مع أحد أصدقائك في نمط لاعبين. تدعم اللعبة عدة لغات، وتتيح لك كتم الأصوات. احذر من مستوى الصعوبة "الصعب"، إذ لم يتمكن أحد حتى الآن من هزيمته. فهل ستكون أول من ينجح في ذلك؟ جرّب بنفسك!`,
    ticButton: "العب إكس أو الذكية",
    snakeTitle: "لعبة الثعبان المجنون",
    snakeDescription:
`في كل مرة تأكل فيها تفاحة، يزداد طول الثعبان. وبعد تناول ست تفاحات، تظهر ليمونة لفترة مؤقتة، وعند أكلها تحصل على نقاط إضافية. لكن انتبه! بعد كل خمس تفاحات تظهر قنبلة مؤقتة، وإذا اصطدمت بها تخسر اللعبة. تتضمن اللعبة عدة سرعات لحركة الثعبان، وإمكانية تغيير اللغة، بالإضافة إلى متجر يمكنك من خلاله تخصيص لون وشكل الثعبان بعد الوصول إلى نتائج مرتفعة معينة. ولأفضل تجربة على الكمبيوتر، يُنصح بالتحكم بالثعبان باستخدام أسهم لوحة المفاتيح بدلًا من أزرار اليسار واليمين والأعلى والأسفل الظاهرة على الشاشة.`,
    snakeButton: "العب الثعبان المجنون" , 
    prev: "السابق",
    next: "التالي",
    chessTitle: "لعبة الشطرنج",
chessDescription:
`لعبة تجمع بين التكتيك، والتفكير، والتخطيط الاستراتيجي. تتضمن ثلاثة مستويات من الصعوبة، ونمط "مخلوطة"، بالإضافة إلى اللعب واحد ضد واحد. كما أضفت إليها لمساتي الخاصة، بما في ذلك أصوات جديدة وقواعد مخصصة في نمط لعب خاص.
يلعب الذكاء الاصطناعي ضدك وفقًا لمستوى الصعوبة الذي تختاره في بداية اللعبة، بينما يحدد المؤقت الوقت المتاح لدور كل لاعب بحسب مستوى الصعوبة المختار.
هذه هي ثالث لعبة ويب أقوم بإنشائها. هل الفكرة قديمة؟ نعم. ولكن مع بعض اللمسات الخاصة؟ رائع!`,
chessButton: "العب الشطرنج"
}  

};
return (
    <div className="page">
        {page === 1 && (
            <>
                <div className="game-card">
                    <h2 className="game-title">{gamesText[language].ticTitle}</h2>
                    <p className="game-description"> {gamesText[language].ticDescription} </p>
                    <a href="https://tictaktoegamebyjawadjammoul49739.pages.dev/" target="_blank" rel="noopener noreferrer" >
                        <button className="game-button" onClick={() => { stopMusic(); playClick(); }} > {gamesText[language].ticButton} </button>
                    </a>
                </div>
                <div className="game-card">
                    <h2 className="game-title"> {gamesText[language].snakeTitle} </h2>
                    <p className="game-description"> {gamesText[language].snakeDescription} </p>
                    <a href="https://crazysnackgame98437.pages.dev" target="_blank" rel="noopener noreferrer" >
                        <button className="game-button" onClick={() => { stopMusic(); playClick(); }} > {gamesText[language].snakeButton} </button>
                    </a>
                </div>
            </>
        )}
        {page === 2 && (
            <div className="game-card">
                <h2 className="game-title">{gamesText[language].chessTitle}</h2>
                <p className="game-description">{gamesText[language].chessDescription}</p>
                <a href="chess94393byjavad.jammoul26se.workers.dev" target="_blank" rel="noopener noreferrer"><button className="game-button" onClick={() => { stopMusic(); playClick(); }}>{gamesText[language].chessButton}</button></a>
            </div>
        )}
        <div className="games-navigation">
            <button className="page-button" disabled={page === 1} onClick={() => { playMusic(); playClick(); setPage(1);} }> {gamesText[language].prev} </button>
            <button className="page-button" disabled={page === 2} onClick={() => { playMusic(); playClick(); setPage(2);} }> {gamesText[language].next}</button>
        </div>
    </div>
 );
}
export default Games;