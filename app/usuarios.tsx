import axios from "axios";
import React from "react";
import { Text, View } from "react-native";

interface IUsuarios {
    createdAt: string
    name: string
    avatar: string
    id: string
}

const Usuarios = () => {
    const [alunos, setAlunos] = React.useState<IUsuarios[]>([])
    
    const getUsers = async () => {
        const { data } = await axios.get("https://682c5ffdd29df7a95be6bfcc.mockapi.io/api/alunos");
        setAlunos(data)
    }

    const listUsers = () => {
        return alunos.map(aluno => {
            const date = new Date(aluno.createdAt)

            return (
                <View style={{marginTop: 10}} key={aluno.id}>
                    <Text>{aluno.name}</Text>
                    <Text>Data de Criação: {date.toLocaleDateString()} {date.toLocaleTimeString()}</Text>
                </View>
            )
        })
    }

    React.useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {listUsers()}
        </>
    )
}

export default Usuarios;