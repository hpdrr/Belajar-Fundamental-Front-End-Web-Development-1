class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="note-form">
        <input type="text" id="note-title" placeholder="Title" required />
        <small id=titleError>Title is required</small>
        <textarea id="note-body" placeholder="Body" required></textarea>
        <small id=bodyError>Body is required</small>
        <button type="submit">Add Note</button>
      </form>
    `;

    const titleInput = this.querySelector("#note-title");
    const bodyInput = this.querySelector("#note-body");
    const titleError = this.querySelector("#titleError");
    const bodyError = this.querySelector("#bodyError");

    titleInput.addEventListener("input", () => {
      if (titleInput.value.trim() === "") {
        titleError.style.display = "block";
      } else {
        titleError.style.display = "none";
      }
    });

    bodyInput.addEventListener("input", () => {
      if (bodyInput.value.trim() === "") {
        bodyError.style.display = "block";
      } else {
        bodyError.style.display = "none";
      }
    });
  }
}

customElements.define("note-form", NoteForm);
