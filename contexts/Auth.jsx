import React,{useState,createContext} from "react";
export const AuthContext = createContext({})


function AuthProvider({children}){

    const [login,setLogin] = useState('')
    const [funcao,setFuncao] = useState('')
    const [email,setEmail] = useState('')
    const [setor,setSetor] = useState('')
    // Valores prontos para serem usados (funcao,email,setor)
    function fillLogin(usuario,funcao,email,setor){
        setLogin(usuario)
        setFuncao(funcao)
        setEmail(email)
        setSetor(setor)
    }
    
    return(
        <AuthContext.Provider value={{'login':login,fillLogin,funcao,email,setor}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;