import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main>
      <h2>404</h2>
      <p>Ops! Página não encontrada</p>
      <p>Parece que você se perdeu no mapa do jogo. A pagina que
        você esta procurando não existe ou foi removida</p>

      <Link to="/">Voltar para Home</Link>

    </main>
  )
}

export default Error
