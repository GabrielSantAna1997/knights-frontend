import axios from 'axios';

const backendUrl = 'http://localhost:3000'

const ApiService = {
    async getUsers(filter = '') {
        try {
            const url = filter ? `${backendUrl}/knights?filter=${filter}` : `${backendUrl}/knights`;

            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar usuários');
        }
    },
    async createUser(userData) {
        try {
            const response = await axios.post(`${backendUrl}/knights`, userData);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }
    },
    async updateUser(userId, newNickname) {
        try {
            const userData = {
                nickname: newNickname
              };
          const response = await axios.put(`${backendUrl}/knights/${userId}`, userData);
          return response.data;
        } catch (error) {
          throw new Error('Erro ao atualizar usuário');
        }
      },
      async getById(userId) {
        try {
            const url = `${backendUrl}/knights/${userId}`;

            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar dados do usuário');
        }
    },
    async deleteById(userId) {
        try {
            const url = `${backendUrl}/knights/${userId}`;

            const response = await axios.delete(url);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao tentar deletar o usuário');
        }
    },
      
};

export default ApiService;
