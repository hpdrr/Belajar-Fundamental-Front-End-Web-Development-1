class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      this.style.backgroundColor = newValue;
    }
  }

  set note(note) {
    this.innerHTML = `
      <div class="note-item">
        <h2>${note.title}</h2>
        <p>${note.body}</p>
        <small>${new Date(note.createdAt).toLocaleString()}</small>
        <button class="delete-button" data-id="${note.id}">Delete</button>
        <button class="archive-button" data-id="${note.id}">${
      note.archived ? "Unarchive" : "Archive"
    }</button>
      </div>
    `;

    this.querySelector(".delete-button").addEventListener("click", () => {
      this.remove();
    });

    /**
     * Testing purposes only
     * This should be replaced with a proper archive functionality
     * that updates the note's archived status in the data source.
     */
    this.querySelector(".archive-button").addEventListener("click", () => {
      note.archived = !note.archived;
      this.querySelector(".archive-button").textContent = note.archived
        ? "Unarchive"
        : "Archive";
      // note.archived = archived;
    });
  }
}

customElements.define("note-item", NoteItem);
