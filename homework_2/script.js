// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, 
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
// Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в 
// зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что 
// предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];
    constructor(arg) {
        this.#books = arg;
    }

    get books() {
        return this.#books;
    }

    addBook(title) {
        let flag = true;
        for (const book of this.#books) {
            if (book === title) {
                flag = false;
                break;
            } else if (book !== title){
                flag = true;
            }
        }

        if (flag) {
            this.#books.push(title);
        } else {
            console.log(`Книга под названием ${title} уже имеется в библиотеке`);
        }
    }

    removeBook(title) {
        let flag = true;
        for (const book of this.#books) {
            if (book === title) {
                const temp = this.#books.indexOf(book);
                this.#books.splice(temp, 1);
                flag = true;
                break;
            } else {
                flag = false;
            } 
        } 

        if (!flag) {
            return console.log(`Книга под названием "${title}" отсутствует в библиотеке. Удаление невозможно.`);
        }
    }

    hasBook(title) {
        let flag = true;
        for (const book of this.#books) {
            if (book === title) {
                flag = true;
            } else {
                flag = false;
            }
        }

        if (flag) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

const library = new Library(['Мама я в Дубае', 'Про ежика', 'Два брата', 'Сверхъестественное']);

// library.addBook('Сверхъестественное');
// library.addBook('Сверхъестественное');
// library.addBook('Гарри Поттер');
// library.addBook('Самый богатый человек в Вавилоне');
// console.log(library.books);

// library.removeBook('Гарри Поттер');
// console.log(library.books);

// library.hasBook('Сверхъестественное');



// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять 
// отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, 
// вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и 
// контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если 
// длина введенного отзыва менее 50 или более 500 символов, 
// функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, 
// а не заменять их.

const inputEl = document.querySelector('.input');
const buttonSubmit = document.querySelector('.buttonSubmit');
const boxReviews = document.querySelector('.reviews');

function addReview() {
    const inputValue = inputEl.value;
    const newReview = document.createElement('h3');
    try {
        if (inputValue.length > 50 && inputValue.length < 500) {
            newReview.textContent = inputValue;
            boxReviews.append(newReview);
        } else {
            throw new Error("Длина строки менее 50 символом или более 500 символов. Укажите корректную длину отзыва!")
        }
    } catch (error) {
        alert(error.message);
    }
}

buttonSubmit.addEventListener('click', addReview);