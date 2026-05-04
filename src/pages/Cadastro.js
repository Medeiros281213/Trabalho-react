import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");

  const navigate = useNavigate();

  const cadastrar = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, senha);

      await setDoc(doc(db, "usuarios", user.user.uid), {
        nome,
        sobrenome,
        nascimento,
        email,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>

      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input type="date" onChange={(e) => setNascimento(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />

      <button onClick={cadastrar}>Cadastrar</button>

      <p 
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer", color: "blue" }}
      >
        Já tem conta? Fazer login
      </p>
    </div>
  );
}