import "../styles/Home.css";
function Articles( {language}) {
  const articlesText = {
    en: {
        title: "Articles", description: "Coming Soon"
    },
    fr: {
        title: "Articles", description: "Bientôt disponible"
    },
    es: {
        title: "Artículos", description: "Próximamente"
    },
    ru: {
        title: "Статьи", description: "Скоро"
    },
    ar: {
        title: "المقالات", description: "قريبًا"
    }
};
    return (
      <>
        <h2 className="section-title">{articlesText[language].title}</h2>
        <p className="game-description">{articlesText[language].description}</p>
      </>
    );
}

export default Articles;