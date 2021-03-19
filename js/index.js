class Note {
  constructor(text) {
    this.note = text;
    this.noteNumber = 0;
  }
  incrementNoteNumber() {
    this.noteNumber++;
  }
}

class UI {
  static displayNote() {
    const storedNote = [];

    storedNote.forEach((note) => UI.addNoteToCard(note));
  }

  static addNoteToCard(item) {
    const noteCard = document.querySelector('#cardContainer');
    let divCard = document.createElement('div');

    divCard.classList.add('card');
    divCard.classList.add('text-white');
    divCard.classList.add('bg-primary');
    divCard.classList.add('mb-3');

    if (item.note.length >= 250) {
      divCard.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">Note:</h4>
        <p class="card-text">
          ${item.note.split('').slice(0, 250).join('')}
        </p>
        <button type="button" class="btn btn-info readMore">Read More</button>
      </div>
    `;
    } else {
      divCard.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">Note:</h4>
        <p class="card-text">
          ${item.note}
        </p>
        <button type="button" class="btn btn-info readMore">Read More</button>
      </div>
    `;
    }
    noteCard.appendChild(divCard);
  }

  static clearText() {
    document.querySelector('#textArea').value = '';
  }
}

window.addEventListener('load', UI.displayNote());

document.querySelector('#submitNote').addEventListener('click', (e) => {
  e.preventDefault();

  function addNote() {
    const textNote = document.querySelector('#textArea').value;
    return new Note(textNote);
  }

  const newNote = addNote();

  UI.addNoteToCard(newNote);
  UI.clearText();
});

document.querySelector('#cardContainer').addEventListener('click', (e) => {
  console.log();
  if (e.target.classList.contains('readMore')) {
    readMore(e.target);

    function readMore(item) {
      const motto = document.querySelector('#mottoNote');
      const divMotto = document.createElement('div');
      divMotto.classList.add('motto');

      divMotto.innerHTML = `
          <p>${item.note}</p>
      `;

      motto.appendChild(divMotto);
    }
  }
});
