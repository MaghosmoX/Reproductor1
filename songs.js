const respuesta = axios.get("https://leonardoapi.onrender.com/songs")
         .then((res)=>{
            res.data.songs.map( (song) => {
              
                let div = document.createElement('div')
                div.classList.add('songs')

                div.innerHTML = `
                <div class="track-list" id="track-list">
                <div class="track-info">
                  <div class="songs">
                    <img src="${song.path.front}" alt="" />
                    <div class="main-song-info">
                      <span class="title">${song.title}</span>
                      <p class="author">${song.author}</p>
                    </div>
                  </div>
                  <div class="track-song-info">
                    <span>${song.album}</span>
                    <p>${song.duration}</p>
                  </div>
                </div>
              </div>`



                div.addEventListener('click', () => {

                    document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                    document.getElementById('current-song-img').setAttribute('src', song.path.front)
                    document.getElementById('current-song-title').innerHTML = song.title
                    document.getElementById('current-song-artist').innerHTML = song.author

                })
                document.getElementById('track-list').appendChild(div)
            })
         })