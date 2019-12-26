// ## Теоретический вопрос
//
// 1. Опишите своими словами, как Вы понимаете, что такое обработчик событий.
//
//     ## Задание
//
// Создать поле для ввода цены с валидацией.
//
//     #### Технические требования:
//     - При загрузке страницы показать пользователю поле ввода (`input`) с надписью `Price`. Это поле будет служить для ввода числовых значений
// - Поведение поля должно быть следующим:
//     - При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.
// - Когда убран фокус с поля - его значение считывается, над полем создается `span`, в котором должен быть выведен текст: `Текущая цена: ${значение из поля ввода}`.
// Рядом с ним должна быть кнопка с крестиком (`X`). Значение внутри поля ввода окрашивается в зеленый цвет.
// - При нажатии на `Х` - `span` с текстом и кнопка `X` должны быть удалены. Значение, введенное в поле ввода, обнуляется.
// - Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - `Please enter correct price`.
// `span` со значением при этом не создается.
// - В папке `img` лежат примеры реализации поля ввода и создающегося `span`.


//Обработчик событий - функция, которая выполняется при наступлении события, передаётся вторым параметром в addEventListener.

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

let span = document.createElement('span');
span.classList.add('span');
span.innerText = `Price`;
wrapper.appendChild(span);

let form = document.createElement('form');
form.classList.add('form');
wrapper.appendChild(form);

let field = document.createElement('input');
field.setAttribute('type', 'text');
field.setAttribute('placeholder', 'Enter price...');
field.classList.add('field-inactive');
field.classList.add('field');
form.appendChild(field);

let errorMessage = document.createElement('span');

function fieldOnFocus() {
    field.classList.remove('field-error');
    field.classList.remove('field-inactive');
    field.classList.add('field-active');
    errorMessage.remove();
}

function fieldOnBlur() {
    if (+field.value < 0 || Number.isNaN(+field.value)) {
        field.classList.remove('field-active');
        field.classList.add('field-error');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = `Please enter correct price`;
        form.appendChild(errorMessage);

    } else {
        field.classList.remove('field-error');
        field.classList.remove('field-active');
        field.classList.add('field-inactive');

        if (field.value.trim().length > 0) {
            let value = field.value;
            let deleteButton = document.createElement('span');
            deleteButton.classList.add('delete');
            deleteButton.innerText = `X`;

            if (!document.querySelector('.price-wrapper')) {
                let priceWrapper = document.createElement('span');
                priceWrapper.innerText = `Current price: ${value}`;
                priceWrapper.classList.add('price-wrapper');
                priceWrapper.appendChild(deleteButton);
                form.prepend(priceWrapper);
                deleteButton.addEventListener('click', () => {
                    priceWrapper.remove();
                    field.value = '';
                });

            } else {
                let priceWrapper = document.querySelector('.price-wrapper');
                priceWrapper.innerText = `Current price: ${value}`;
                priceWrapper.appendChild(deleteButton);
                deleteButton.addEventListener('click', () => {
                    priceWrapper.remove();
                    field.value = '';
                });
            }
        }
    }
}

field.addEventListener('focus', fieldOnFocus);
field.addEventListener('blur', fieldOnBlur);