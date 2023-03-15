console.log(`hello world`)

const message = document.querySelector("#message")

// document.querySelector("form").addEventListener("submit", addMovie);



const addMovie = (event) => {

    event.preventDefault();

    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = `x`
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")
    list.appendChild(movie)

    inputField.value=''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `Movie Deleted`
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}


document.querySelector('form').addEventListener('submit',addMovie);


//fuck you guys for making these instructions so damn confusing

