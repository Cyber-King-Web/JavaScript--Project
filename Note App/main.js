const addBtn = document.querySelector("#btn");
const main = document.querySelector("#container")


const saveNote = () => {
    const notes = document.querySelectorAll(".main textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))

    }
};


addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("main")
    note.innerHTML = `<div class="head">
                <i class="save fa-solid fa-floppy-disk" id="save">s</i>
                <i class="trash fa-solid fa-trash-can" id="trash">d</i>
            </div> 
            <textarea id = "text">${text}</textarea>`;


    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
        }
    )
    note.querySelector(".save").addEventListener("click",
        function() {
            saveNote()
        })

    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNote()
        }
    )

    main.appendChild(note);
    saveNote()


};



(
    function() {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            addNote()
        } else {
            lsnotes.forEach(
                (lsnote) => {
                    addNote(lsnote)
                }
            )
        }
    }
)();