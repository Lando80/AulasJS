import React from 'react'

const ListaImagens = () => {

    const imagens = [
        "https://www.jornaloflorense.com.br/images/noticias/1584649265-0.jpg",
        "https://www.petz.com.br/blog/wp-content/uploads/2020/02/raca-de-cachorro-medio3-1280x720.jpg",
        "https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg",
        "https://static1.patasdacasa.com.br/articles/2/11/72/@/5439-saiba-quais-sao-as-racas-de-cachorro-mai-articles_media_mobile-2.jpg",
        "https://static1.patasdacasa.com.br/articles/2/11/72/@/5439-saiba-quais-sao-as-racas-de-cachorro-mai-articles_media_mobile-2.jpg"
    ]

    const size = "100px";

  return (
    <div>
        {
            imagens.map((imagem, index) => (
                <img src={imagem} width={size} key={index}/>
            ))
        }
    </div>
  )
}

export default ListaImagens