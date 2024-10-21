import { useState } from "react";
function FormularioControlado() {
    // Estado inicial para armazenar o valor do input
    const [nome, setNome] = useState("");

    // Função para lidar com mudanças no input
    const handleInputChange = (event) => {
        setNome(event.target.value); // Atualiza o estado com o valor do input
    };
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento de recarregar a página
        alert(`Nome enviado: ${nome}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={nome} onChange={handleInputChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default FormularioControlado;