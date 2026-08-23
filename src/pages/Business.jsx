import "../styles/Business.css";
import { playClick } from "../util/playClick";
import { useState } from "react";

function Business({language , playMusic , stopMusic}) {
    const [page , setPage] = useState(1);
    const booksText = {
    en: {
    title: "My University's Books",
    description: `You can purchase programming books that are taught at universities. Each book combines multiple trusted sources into one organized and easy-to-understand guide. The content is shorter, clearer, and better structured, making it easier to study and review. You can place your order, and the books will be delivered anywhere in Lebanon. The prices are carefully calculated based on the production cost, delivery fees, intermediary costs, and fair personal profit. Order your books today and start learning more efficiently.`,
    button: "Order My Books",
    advancedTitle: "Advanced University Programming Books",
    advancedDescription: `These materials are typically offered as electives, are widely used in the job market, or represent a specialized journey to learn new, more challenging, or longer aspects of programming. You can order these books by clicking the button below. They will be delivered to you wherever you are in Lebanon at the best prices and in the best way to continue learning.`,
    advancedButton: "Order My Books",
    prev: "Prev",
    next: "Next"
    },
        fr: {
    title: "Mes Livres Universitaires",
    description: `Vous pouvez acheter des livres de programmation enseignés dans les universités. Chaque livre rassemble plusieurs sources fiables dans un seul guide clair, organisé et facile à comprendre. Le contenu est plus court, plus clair et mieux structuré, ce qui facilite l'étude et les révisions. Vous pouvez passer votre commande, et les livres seront livrés partout au Liban. Les prix sont soigneusement calculés en tenant compte du coût de production, de la livraison, des intermédiaires et d'un bénéfice personnel raisonnable. Commandez vos livres dès aujourd'hui et apprenez plus efficacement.`,
    button: "Commander mes livres",
    advancedTitle: "Mes Livres Universitaires Avancés de Programmation",
    advancedDescription: `Ces matières sont généralement proposées comme des cours optionnels, sont largement utilisées sur le marché du travail ou représentent un parcours spécialisé pour apprendre de nouveaux aspects de la programmation, plus complexes ou plus approfondis. Vous pouvez commander ces livres en cliquant sur le bouton ci-dessous. Ils vous seront livrés où que vous soyez au Liban, aux meilleurs prix et dans les meilleures conditions pour poursuivre votre apprentissage.`,
    advancedButton: "Commander mes livres",
    prev: "Précédent",
    next: "Suivant"
},
        es: {
    title: "Mis Libros Universitarios",
    description: `Puedes comprar libros de programación que se enseñan en las universidades. Cada libro reúne varias fuentes confiables en una sola guía organizada y fácil de entender. El contenido es más corto, más claro y está mejor estructurado, lo que facilita el estudio y el repaso. Puedes realizar tu pedido y los libros se entregarán en cualquier lugar del Líbano. Los precios se calculan cuidadosamente teniendo en cuenta el costo de producción, el envío, los intermediarios y un beneficio personal justo. Pide tus libros hoy y aprende de una manera más eficiente.`,
    button: "Pedir mis libros",
    advancedTitle: "Mis Libros Universitarios Avanzados de Programación",
    advancedDescription: `Estas materias suelen ofrecerse como asignaturas optativas, son ampliamente utilizadas en el mercado laboral o representan un camino especializado para aprender nuevos aspectos de la programación que son más desafiantes o avanzados. Puedes pedir estos libros haciendo clic en el botón de abajo. Se entregarán dondequiera que estés en el Líbano, a los mejores precios y de la mejor manera para continuar aprendiendo.`,
    advancedButton: "Pedir mis libros",
    prev: "Anterior",
    next: "Siguiente"
},
  ru: {
    title: "Мои Университетские Книги",
    description: `Вы можете приобрести книги по программированию, которые преподаются в университетах. Каждая книга объединяет несколько надежных источников в одном понятном и хорошо организованном руководстве. Материал короче, понятнее и лучше структурирован, что делает обучение и повторение более эффективными. Вы можете оформить заказ, и книги будут доставлены в любую точку Ливана. Цены тщательно рассчитаны с учетом стоимости производства, доставки, услуг посредников и справедливой личной прибыли. Закажите книги уже сегодня и начните учиться эффективнее.`,
    button: "Заказать книги",
    advancedTitle: "Мои Продвинутые Университетские Книги по Программированию",
    advancedDescription: `Эти дисциплины обычно предлагаются как факультативные курсы, широко используются на рынке труда или представляют собой специализированный путь для изучения новых, более сложных и углублённых аспектов программирования. Вы можете заказать эти книги, нажав на кнопку ниже. Они будут доставлены в любое место Ливана по лучшим ценам и помогут вам продолжить обучение наиболее эффективным способом.`,
    advancedButton: "Заказать книги",
    prev: "Назад",
    next: "Далее"
},
    ar: {
    title: "كتبي الجامعية",
    description: `يمكنك شراء كتب البرمجة التي تُدرَّس في الجامعات. يجمع كل كتاب عدة مصادر موثوقة في كتاب واحد منظم وسهل الفهم. المحتوى أقصر، أوضح، وأكثر ترتيبًا، مما يجعل الدراسة والمراجعة أسهل بكثير. يمكنك طلب الكتب وستصل إليك أينما كنت في لبنان. الأسعار مدروسة بعناية اعتمادًا على تكلفة الإنتاج، ورسوم التوصيل، والوسيط، مع ربح شخصي عادل. اطلب كتبك اليوم وابدأ بالتعلّم بطريقة أكثر كفاءة.`,
    button: "اطلب كتبي",
    advancedTitle: "كتبي الجامعية المتقدمة في البرمجة",
    advancedDescription: `هذه المواد تُقدَّم عادةً كمواد اختيارية في الجامعات، أو تُستخدم على نطاق واسع في سوق العمل، أو تمثل مسارًا متخصصًا لتعلّم جوانب جديدة وأكثر تحديًا وتعمقًا في البرمجة. يمكنك طلب هذه الكتب من خلال الضغط على الزر أدناه. سيتم توصيلها إليك أينما كنت في لبنان، وبأفضل الأسعار وبأفضل طريقة تساعدك على مواصلة تعلّمك.`,
    advancedButton: "اطلب كتبي",
    prev: "السابق",
    next: "التالي"
  }
};
   return (
    <div className="page12">
        {page === 1 && (
            <div className="page">
                <h1 className="section-title1">{booksText[language].title}</h1>
                <p className="game-description1">{booksText[language].description}</p>
                <button className="books-button" onClick={() => { stopMusic(); playClick();
                        setTimeout(() => {
                            window.open(
                                "https://universitysbachelorbooks6432.jammoul26se.workers.dev/",
                                "_blank"
                            );
                        }, 150);
                    }}
                >
                    {booksText[language].button}
                </button>
            <div className="business-card">
                <h1 className="section-title1">{booksText[language].advancedTitle}</h1>
                <p className="game-description1">{booksText[language].advancedDescription}</p>
                <button className="books-button" onClick={() => {
                stopMusic(); playClick(); setTimeout(() => { window.open("https://www.google.com" , "_blank"); } , 150);
                }}>{booksText[language].advancedButton}</button>
                    </div>
                </div>
        )}
        {page === 2 && (
            <div className="page">
                {/*Page 2*/}
            </div>
        )}
        <div className="games-navigation">
            <button className="page-button" onClick={() => { playMusic(); playClick(); setPage(page - 1);} }disabled={page === 1}>{booksText[language].prev}</button>
            <button className="page-button" onClick={() => { playMusic(); playClick(); setPage(page + 1);} }disabled={page === 2}>{booksText[language].next}</button>
        </div>
    </div>
);
}

export default Business;