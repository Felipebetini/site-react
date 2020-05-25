export default {
  //Tentativa de Login
  login: ({ username }) => {
    localStorage.setItem("username", username);
    //aceita todos as combinacoes de usernames/senhas
    return Promise.resolve();
  },
  //Chamado quando o cliente clica em logOut
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  //erro da API
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  //chamado quando o usuario navega para uma nova localizacao, pra checar a autenticacao
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  //chamado quando o usuario navega para outro local para checar as permissoes
  getPermissions: () => Promise.resolve(),
};
