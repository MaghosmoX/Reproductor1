const respuesta = axios.get("https://leonardoapi.onrender.com/songs")
         .then((res)=>{
            res.data.songs.map( (song) => {
              
                let div = document.createElement('div')
                div.classList.add('songs')

                div.innerHTML = `
                <img src="${song.path.front}" alt="">
                <div>
                <span>${song.title}</span>
                <p>${song.author}</p>
                </div>`

                div.addEventListener('click', () => {

                    document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                })

                document.getElementById('track-list').appendChild(div)
            })
         })