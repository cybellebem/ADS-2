import { useState } from "react";
function ComponenteControlado() {
    // Estado para armazenar os valores dos campos
    const [formData, setFormData] = useState({ nome: "", email: "", });
    // Estado para armazenar os erros de validação
    const [errors, setErrors] = useState({});
    // Função para lidar com mudanças nos inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Valida os campos
        const newErrors = {};
        if (!formData.nome) {
            newErrors.nome = "O campo Nome é obrigatório";
        }
        if (!formData.email) {
            newErrors.email = "O campo Email é obrigatório";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Por favor, insira um email válido";
        }
        // Se houver erros, atualize o estado e não submeta o formulário
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Se não houver erros, envie o formulário
            alert(`Nome: ${formData.nome}\nEmail: ${formData.email}`);
            setErrors({});
            setFormData({ nome: "", email: "" }); // Limpa o formulário após o envio
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </label>
                {errors.nome && <p style={{ color: "red" }}>{errors.nome}</p>}{" "}
                {/* Exibe erro se houver */}
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email}
                        onChange={handleChange} />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}{" "}
                {/* Exibe erro se houver */}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default ComponenteControlado;
