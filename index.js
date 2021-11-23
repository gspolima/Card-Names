displayCurrentYear();
main();

function main() {
    let cardsContainer = document.getElementsByClassName('container')[0];
    const newCardFormDiv = document.getElementById('newCardForm');
    const btnNew = document.getElementsByClassName('btn btn-new')[0];

    btnNew.addEventListener('click', function (event) {
        renderNewCardForm(newCardFormDiv);

        const btnAddNewCard = document.getElementById('addNewCard');
        btnAddNewCard.addEventListener('click', function (event) {
            const formTitle = document.getElementById('title');
            const formBody = document.getElementById('body');

            addNewCard(cardsContainer, formTitle, formBody);
            enableCardRemoval(cardsContainer);
            clearFormFields(formTitle, formBody);
            enableCardEditing();
        });
    });

    const btnRemoveAll = document.getElementsByClassName('btn btn-removeAll');
    btnRemoveAll[0].addEventListener('click', function (event) {
        removeAllCards(cardsContainer);
        hideNewCardForm(newCardFormDiv);
    });
}

/* ------------------------- */

function addNewCard(cardsContainer, formTitle, formBody) {
    if (formTitle.value === '' || formBody.value === '')
        return false;
    else {
        let newCard = document.createElement('div');
        newCard.setAttribute('class', 'card');
    
        let cardHeader = document.createElement('div');
        cardHeader.setAttribute('class', 'card-header');
        cardHeader.style.backgroundColor = selectCardHeaderColor();
    
        let cardTitle = document.createElement('div');
        cardTitle.setAttribute('class', 'card-title');
    
        let cardOptions = document.createElement('div');
        cardOptions.setAttribute('class', 'card-options');
    
        let cardOptionsEdit = document.createElement('button');
        cardOptionsEdit.setAttribute('class', 'btn btn-edit');
        cardOptionsEdit.innerHTML = '✏️';
    
        let cardOptionRemove = document.createElement('button');
        cardOptionRemove.setAttribute('class', 'btn btn-remove');
        cardOptionRemove.innerHTML = '❌';
    
        cardOptions.appendChild(cardOptionsEdit);
        cardOptions.appendChild(cardOptionRemove);
    
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardOptions);
    
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
    
        const card = new Card(formTitle.value, formBody.value);
        cardTitle.innerHTML = card.title;
        cardBody.innerHTML = card.body;
    
        newCard.appendChild(cardHeader);
        newCard.appendChild(cardBody);
    
        cardsContainer.appendChild(newCard);
    }
    
}

function removeAllCards(cardsContainer) {
    cardsContainer.innerHTML = '';
}

function hideNewCardForm(formDiv) {
    formDiv.innerHTML = '';
}

function renderNewCardForm(formDiv) {
    formDiv.innerHTML = `
        <div class="form-control">
            <div>
                <label for="title">Título</label>
            </div>
            <div>
                <textarea id="title" rows=1></textarea>
            </div>
        </div>
        <div class="form-control">
            <div>
                <label for="body">Conteúdo</label>
            </div>
            <div>
                <textarea id="body" rows=5></textarea>
            </div>
        </div>
        <button id="addNewCard" class="btn btn-create">Adicionar</button>`;
}

function clearFormFields(titleField, bodyField) {
    titleField.value = '';
    bodyField.value = '';
}

function displayCurrentYear() {
    document.getElementById('copyright').innerHTML = `&copy; Gustavo Sampaio<br> Matrícula: 201902509722`;
}

class Card {
 
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    title;
    body;
}

function enableCardRemoval(cardsContainer) {
    if (cardsContainer.childElementCount > 0)
    {
        const removeButtons = document.getElementsByClassName('btn-remove');
        for (let i = 0; i < removeButtons.length; i++) {
            const btnRemove = removeButtons[i];

            btnRemove.addEventListener('click', function (event) {
                const clickedButton = event.target;
                const cardOptions = clickedButton.parentElement;
                const cardHeader = cardOptions.parentElement;
                const card = cardHeader.parentElement;

                cardsContainer.removeChild(card);
            });
        }
    }
}

function enableCardEditing() {
    const editButtons = document.getElementsByClassName('btn-edit');
    for (let i = 0; i < editButtons.length; i++) {
        const btnEdit = editButtons[i];

        btnEdit.addEventListener('click' , function (event) {
            const cardOptions = btnEdit.parentElement;
            const cardHeader = cardOptions.parentElement;
            const cardTitle = cardHeader.children[0];

            cardTitle.setAttribute('contenteditable', '');
            cardTitle.focus();

            cardTitle.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    cardTitle.removeAttribute('contenteditable');
                    cardTitle.blur();

                    const card = cardHeader.parentElement;
                    const cardBody = card.children[1];

                    cardBody.setAttribute('contenteditable', '');
                    cardBody.focus();

                    cardBody.addEventListener('keydown', function (event) {
                        if (event.keyCode === 27) {
                            cardBody.removeAttribute('contenteditable');
                            cardBody.blur();
                        }
                    })
                }
            })
        })
    }
}

function selectCardHeaderColor() {
    const colors = [
        '9FFCDF', 'DB9D47', 'F1E4F3', 'C4D6B0',
        'CCC9DC', 'BFCDE0', 'F1DAC4', 'FFAA5A',
        '8DAA9D', '87F5FB', 'E0B0D5', 'CBF3D2',
        'C4A381', 'AED9E0', '29E7CD', 'EFBC9B',
        'EAF4F4', 'A5BE00', '9FCC2E', '30F2F2',
        'F6D8AE', 'FFFFFF', 'D2CBCB', '98D2EB'];
    
    const chosenColor = Math.floor((Math.random() * colors.length));
    return `#${colors[chosenColor]}`;
}