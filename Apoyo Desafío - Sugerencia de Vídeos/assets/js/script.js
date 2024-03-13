
const pintarEnelDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
     return {
            funcionpublica(url, id) {
                funcionPrivada(url, id)
            }
    }


})()


class Multimedia {
    #url;
    constructor(url) {
        this.#url = url
    }

    get url() {
        return this.#url
    }
    setinInicio() {
        return "Este metodo es para realizar cambio del video"

    }
}

class Reproductor extends Multimedia {
    _id;
    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        pintarEnelDOM.funcionpublica(this.url, this._id)
    }
    setinInicio(tiempoInicial) {
       
        const tiempoInicialSegundos = tiempoInicial * 60;
        const urlConTiempoInicial = this.url + `?start=${tiempoInicialSegundos}`;
        pintarEnelDOM.funcionpublica(urlConTiempoInicial, this._id);
    }
}



const musica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica"); 
const peliculas = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "series"); 

musica.playMultimedia()
musica.setinInicio(3) // cantidad de minitos en q empezara el video
peliculas.playMultimedia()
peliculas.setinInicio(1) 
series.playMultimedia()
series.setinInicio(2)
