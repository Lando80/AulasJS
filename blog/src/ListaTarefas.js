import React from "react";

const ListaTarefas = () => {

    const tarefas = [
        "Passear com o cachorro",
        "Fazer compras",
        "Limpar a casa",
        "Estudar",
        "Observar as estrelas",
        "Assistir o jogo"
    ]

    return (
        <div>
            <ul>
                {
                    tarefas.map((tarefa) => (
                        <li>{ tarefa }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListaTarefas