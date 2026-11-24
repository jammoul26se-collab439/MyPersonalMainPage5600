import "../styles/Articles.css";
import { useState } from "react";

function Articles({ language }) {
  const [page, setPage] = useState(1);

  const articlesText = {
    en: {
      title: "Health Known Application",
      description:
        "Your personal health companion. Calculate your BMI, daily calories, ideal weight, and nutritional needs, including protein, carbohydrates, fats, and water intake. Get useful insights to help you maintain a healthier lifestyle.",
      install: "Install Health Known App",
      prev: "Prev",
      next: "Next"
    },
    fr: {
      title: "Application Health Known",
      description:
        "Votre compagnon santé personnel. Calculez votre IMC, vos calories quotidiennes, votre poids idéal et vos besoins nutritionnels, notamment en protéines, glucides, lipides et eau. Découvrez des informations utiles pour adopter un mode de vie plus sain.",
      install: "Installer Health Known",
      prev: "Précédent",
      next: "Suivant"
    },
    es: {
      title: "Aplicación Health Known",
      description:
        "Tu compañero personal de salud. Calcula tu IMC, las calorías diarias, el peso ideal y tus necesidades nutricionales, incluyendo proteínas, carbohidratos, grasas y consumo de agua. Obtén información útil para mantener un estilo de vida más saludable.",
      install: "Instalar Health Known",
      prev: "Anterior",
      next: "Siguiente"
    },
    ru: {
      title: "Приложение Health Known",
      description:
        "Ваш персональный помощник по здоровью. Рассчитывайте ИМТ, суточную норму калорий, идеальный вес и потребности в питательных веществах, включая белки, углеводы, жиры и воду. Получайте полезную информацию для поддержания здорового образа жизни.",
      install: "Установить Health Known",
      prev: "Назад",
      next: "Далее"
    },
    ar: {
      title: "تطبيق Health Known",
      description:
        "رفيقك الصحي الشخصي. احسب مؤشر كتلة الجسم، والسعرات الحرارية اليومية، والوزن المثالي، واحتياجاتك الغذائية من البروتين والكربوهيدرات والدهون والماء. احصل على معلومات مفيدة تساعدك في الحفاظ على نمط حياة صحي.",
      install: "تثبيت تطبيق Health Known",
      prev: "السابق",
      next: "التالي"
    }
  };

  const text = articlesText[language] || articlesText.en;

  return (
    <div className="page">
      {page === 1 && (
        <>
          <h2 className="game-title">{text.title}</h2>

          <p className="game-description">
            {text.description}
          </p>

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="game-button"
            style = { {textDecoration : "none"} }
          >
            {text.install}
          </a>
        </>
      )}

      <div className="games-navigation">
        <button
          className="page-button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          {text.prev}
        </button>

        <button
          className="page-button"
          disabled={page === 2}
          onClick={() => setPage(page + 1)}
        >
          {text.next}
        </button>
      </div>
    </div>
  );
}

export default Articles;