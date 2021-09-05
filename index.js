displayCurrentYear();
main();

function main() {
    const btnAdd = document.getElementsByClassName('btn btn-add');
    btnAdd[0].addEventListener('click', function (event) {

        renderNewCardForm();

        const btnAddNewCard = document.getElementById('addNewCard');
        btnAddNewCard.addEventListener('click', function (event) {
            addNewCard();
            clearFormFields();
        });
    });
}

function addNewCard() {
    let newCard = document.createElement('div');
    newCard.setAttribute('class', 'card');

    let cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'card-title');
    const title = document.getElementById('title').value;

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    const body = document.getElementById('body').value;

    const card = new Card(title, body);
    cardHeader.innerHTML = card.title;
    cardBody.innerHTML = card.body;

    newCard.appendChild(cardHeader);
    newCard.appendChild(cardBody);

    let cardsContainer = document.getElementsByClassName('container');
    cardsContainer[0].appendChild(newCard);
}

function renderNewCardForm() {
    const formDiv = document.getElementById('newCardForm');
    formDiv.innerHTML = `
        <div class="form-control">
            <div>
                <label for="title">Title</label>
            </div>
            <div>
                <input id="title" type="text">
            </div>
        </div>
        <div class="form-control">
            <div>
                <label for="body">Body</label>
            </div>
            <div>
                <textarea id="body" rows=5></textarea>
            </div>
        </div>
        <button id="addNewCard" class="btn btn-create">Add</button>`;
}

function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}

function displayCurrentYear() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    document.getElementById('copyright').innerHTML = `&copy; ${year} Gustavo S.`;
}

class Card {
 
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    title;
    body;
}