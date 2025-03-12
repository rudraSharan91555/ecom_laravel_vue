import axiosClient from "../axios";

export function getUser({commit}, data) {
  return axiosClient.get('/user', data)
    .then(({data}) => {
      commit('setUser', data);
      return data;
    })
}

export function login({commit}, data) {
  return axiosClient.post('/login', data)
    .then(({data}) => {
      commit('setUser', data.user);
      commit('setToken', data.token)
      return data;
    })
}


export function logout({ commit }) {
  return axiosClient.post('/logout')
    .then(() => { 
      commit('setToken', null);
      commit('setUser', {}); 
    })
    .catch(error => {
      console.error("Logout Error:", error);
    });
}
