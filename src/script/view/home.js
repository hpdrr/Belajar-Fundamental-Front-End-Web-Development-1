import notesData from "../data/local/data-notes.js";

const home = () => {
  const notesContainer = document.getElementById("notes-container");
  notesData.forEach((note) => {
    const noteItem = document.createElement("note-item");
    noteItem.setAttribute("color", "#0a192f");
    noteItem.note = note;
    notesContainer.appendChild(noteItem);
  });
  const noteForm = document.getElementById("note-form");
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("note-title").value.trim();
    const body = document.getElementById("note-body").value.trim();
    if (title === "" || body === "") {
      alert("Please fill in all fields.");
      return;
    }

    const note = {
      id: `note-${Date.now()}`,
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    const noteItem = document.createElement("note-item");
    noteItem.setAttribute("color", "#0a192f");
    noteItem.note = note;
    notesContainer.appendChild(noteItem);

    document.getElementById("note-form").reset();
  });
};

export default home;
