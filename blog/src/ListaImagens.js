import React from 'react'

const ListaImagens = () => {

    const imagens = [
        "https://qualusar.files.wordpress.com/2018/03/18.jpg",
        "https://clickpetroleoegas.com.br/wp-content/uploads/2023/03/Trabalhe-de-qualquer-lugar-do-mundo-Mais-de-120-vagas-internacionais-em-home-office-com-salarios-de-ate-U-9.000-830x450.jpg",
        "https://i.ytimg.com/vi/JhMjZQtAzek/maxresdefault.jpg"
    ]

  return (
    <div>
        {
            imagens.map((imagem, index) => (
                <div><img src={ imagem } width="300px" key={index}/></div>
            ))
        }
        
    </div>
  )
}

export default ListaImagens