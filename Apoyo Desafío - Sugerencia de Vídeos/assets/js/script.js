
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

//pintarEnelDOM.funcionpublica("https://www.youtube.com/watch?v=XUoXE3bmDJY", "musica")
//pintarEnelDOM.funcionpublica("https://www.youtube.com/watch?v=vauuezITlNA", "peliculas")
//pintarEnelDOM.funcionpublica("https://www.youtube.com/watch?v=ga1m0wjzscU", "series")


// console.log(accordionExample)
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
        pintarEnelDOM.funcionpublica(this.url, this._id) //  esto seria el pintar el don de la libreta

    }
    setinInicio(tiempoInicial) {
        // Calculamos el tiempo inicial en segundos
        const tiempoInicialSegundos = tiempoInicial * 60;
        // Construimos la URL con el tiempo inicial
        const urlConTiempoInicial = this.url + `?start=${tiempoInicialSegundos}`;
        // Llamamos a la función para pintar en el DOM con la URL modificada
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
