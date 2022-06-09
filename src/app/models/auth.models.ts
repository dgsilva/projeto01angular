//modelo de dados da autenticação
export interface Auth {
 
    statusCode: number,
    mensagem: string,
    accessToken: string,
    nomeUsuario: string,
    emailUsuario: string
}
