import "../styles/Articles.css";
import { useState } from "react";
function Articles( {language}) {
    const [page , setPage] = useState(1);
  const articlesText = {
    en: {
        title: "Articles", description: "Coming Soon" , prev: "Prev" , next: "Next" 
    },
    fr: {
        title: "Articles", description: "Bientôt disponible" , prev: "Précédent", next: "Suivant"
    },
    es: {
        title: "Artículos", description: "Próximamente" , prev: "Anterior", next: "Siguiente"
    },
    ru: {
        title: "Статьи", description: "Скоро" , prev: "Назад", next: "Далее"
    },
    ar: {
        title: "المقالات", description: "قريبًا" ,  prev: "السابق", next: "التالي"
    }
};
    return (
      <div className="page">
        {page === 1 && (
            <>
             <h2 className="section-title">{articlesText[language].title}</h2>
             <p className="articles-description">{articlesText[language].description}</p>
            </>
        )}
        <div className="games-navigation">
            <button className="page-button" disabled={page === 1} onClick= { () => setPage(page - 1)}>{articleText[language].prev}</button>
            <button className="page-button" disabled={page === 2} onClick= { () => setPage(page + 1)}>{articleText[language].next}</button>
            </div>      
      </div>
    );
}
export default Articles;