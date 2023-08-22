const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];
const necessaryKeys = ["author", "name", "price"];


function filterBooks(booksArr, keys) {
  try {
    if (booksArr.length === 0) {
      throw new SyntaxError("Порожній масив");
    }

    booksArr = booksArr
      .filter((objBook) =>
        keys.every((key) => {
          if (key in objBook) {
            return true;
          } else {
            console.log(`В обєкті відсутній ключ "${key}"`)
            return false;
          }
        })
      )
      .map((elem) => {
        return `"${elem.name}" - книга від ${elem.author} за ціною ${elem.price} грн.`;
      });

      createElem(booksArr);
  } catch (e) {
    if (e.name == "SyntaxError") {
      console.log("Error: " + e.message);
    }
  }
}

filterBooks(books, necessaryKeys);

function createElem(booksArr) {
  const rootElement = document.getElementById('root');
  const ulElement = document.createElement("ul");
  for (const bookInfo of booksArr) {
    const liElement = document.createElement("li");
    liElement.className = 'textItem';
    liElement.textContent = bookInfo;
    ulElement.append(liElement);
  }
  rootElement.append(ulElement);
}
