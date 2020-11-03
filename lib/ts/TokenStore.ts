class TokenStore {
  static setToken(tokenName, token) {
    localStorage.setItem(tokenName, token);
  }

  static getToken(tokenName) {
    return localStorage.getItem(tokenName);
  }

  static clearToken(tokenName) {
    localStorage.removeItem(tokenName);
  }
}

export default TokenStore;