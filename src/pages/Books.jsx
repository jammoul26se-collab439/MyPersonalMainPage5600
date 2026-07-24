import "../styles/Books.css";
import { playClick } from "../util/playClick";

function Books({language , playMusic}) {
    const booksText = {
    en: {
        title: "My University's Books",
        description: `You can purchase programming books that are taught at universities. Each book combines multiple trusted sources into one organized and easy-to-understand guide. The content is shorter, clearer, and better structured, making it easier to study and review. You can place your order, and the books will be delivered anywhere in Lebanon. The prices are carefully calculated based on the production cost, delivery fees, intermediary costs, and fair personal profit. Order your books today and start learning more efficiently.`,
        button: "Order My Books"
    },
    fr: {
        title: "Mes Livres Universitaires",
        description: `Vous pouvez acheter des livres de programmation enseignés dans les universités. Chaque livre rassemble plusieurs sources fiables dans un seul guide clair, organisé et facile à comprendre. Le contenu est plus court, plus clair et mieux structuré, ce qui facilite l'étude et les révisions. Vous pouvez passer votre commande, et les livres seront livrés partout au Liban. Les prix sont soigneusement calculés en tenant compte du coût de production, de la livraison, des intermédiaires et d'un bénéfice personnel raisonnable. Commandez vos livres dès aujourd'hui et apprenez plus efficacement.`,
        button: "Commander mes livres"
    },
    es: {
        title: "Mis Libros Universitarios",
        description: `Puedes comprar libros de programación que se enseñan en las universidades. Cada libro reúne varias fuentes confiables en una sola guía organizada y fácil de entender. El contenido es más corto, más claro y está mejor estructurado, lo que facilita el estudio y el repaso. Puedes realizar tu pedido y los libros se entregarán en cualquier lugar del Líbano. Los precios se calculan cuidadosamente teniendo en cuenta el costo de producción, el envío, los intermediarios y un beneficio personal justo. Pide tus libros hoy y aprende de una manera más eficiente.`,
        button: "Pedir mis libros"
    },
    ru: {
        title: "Мои Университетские Книги",
        description: `Вы можете приобрести книги по программированию, которые преподаются в университетах. Каждая книга объединяет несколько надежных источников в одном понятном и хорошо организованном руководстве. Материал короче, понятнее и лучше структурирован, что делает обучение и повторение более эффективными. Вы можете оформить заказ, и книги будут доставлены в любую точку Ливана. Цены тщательно рассчитаны с учетом стоимости производства, доставки, услуг посредников и справедливой личной прибыли. Закажите книги уже сегодня и начните учиться эффективнее.`,
        button: "Заказать книги"
    },
    ar: {
        title: "كتبي الجامعية",
        description: `يمكنك شراء كتب البرمجة التي تُدرَّس في الجامعات. يجمع كل كتاب عدة مصادر موثوقة في كتاب واحد منظم وسهل الفهم. المحتوى أقصر، أوضح، وأكثر ترتيبًا، مما يجعل الدراسة والمراجعة أسهل بكثير. يمكنك طلب الكتب وستصل إليك أينما كنت في لبنان. الأسعار مدروسة بعناية اعتمادًا على تكلفة الإنتاج، ورسوم التوصيل، والوسيط، مع ربح شخصي عادل. اطلب كتبك اليوم وابدأ بالتعلّم بطريقة أكثر كفاءة.`,
        button: "اطلب كتبي"
    }
};
    return (
        <>
        <div className="page">
           <h1 className="section-title1">{booksText[language].title}</h1>
           <p className="game-description1">{booksText[language].description}</p>
        <a href="https://universitysbachelorbooks6432.jammoul26se.workers.dev/"><button className = "books-button" onClick={(e) => {
           e.preventDefault();
           playMusic();
           playClick();
           setTimeout( () => {
            window.location.href="https://universitysbachelorbooks6432.jammoul26se.workers.dev/";
           },150);
        }}>{booksText[language].button}</button></a>
        </div>
        </>
    );
}

export default Books;