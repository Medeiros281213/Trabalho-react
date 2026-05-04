import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebase";
import {useNavigate} from "react-router-dom";
export default function Login(){
const [email,setEmail]=useState("");
const [senha,setSenha]=useState("");
const navigate=useNavigate();
const logar=async()=>{
try{await signInWithEmailAndPassword(auth,email,senha);
navigate("/principal");
}catch{alert("Erro no login");}};
return(<div>
<h2>Login</h2>
<input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
<input type="password" placeholder="Senha" onChange={e=>setSenha(e.target.value)}/>
<button onClick={logar}>Entrar</button>
</div>);
}