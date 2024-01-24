import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrado from "pages/NaoEncontrado";
import { useEffect, useState } from "react";

function Player(){
    const [video, setVideo] = useState();
    const parametros = useParams();

    //renderiza depois faz
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Brunofell/CineTag-API/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    /// sem a mock api
    // const video = videos.find((video)=>{
    //     return video.id === Number(parametros.id);
    // })

    if(!video){
        return <NaoEncontrado />
    } 
    
    return(
        <>
        <Banner imagem="player"></Banner>
        <Titulo>
            <h1>{video.titulo}</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </section>
        </>
    )
}

export default Player