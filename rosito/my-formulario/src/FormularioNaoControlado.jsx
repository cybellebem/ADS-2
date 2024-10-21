import { useRef } from "react";
function FormuarioNaoControlado() {
    // Criando uma referência para o input
    const nomeInputRef = useRef(null);
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Acessa diretamente o valor do input através da ref
        const nome = nomeInputRef.current.value;
        alert(`Nome enviado: ${nome}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" ref={nomeInputRef} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default FormuarioNaoControlado;