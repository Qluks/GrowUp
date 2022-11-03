import { React ,useState } from 'react';

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [contato, setContato] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

        <label>Email
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>

        <label>CPF
        <input
          type="text" 
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          />
          </label>

          <label>Contato
        <input
          type="text" 
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          />
          </label>
      <button>Enviar</button>
    </form>
  )
}

export default Cadastro();