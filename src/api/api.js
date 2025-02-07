import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const callApi = {
    getTasks(userId) {
        return instance.get(userId + '/tasks')
    },
    getGoals(userId) {
        return instance.get(userId + '/goals')
    },
    getPlans(userId) {
        return instance.get(userId + '/plans')
    },

    postTask(userId, title, content, date) {
        return instance.post(userId + '/tasks', {title, content, date});
    },
    postGoal(userId, title, content, date) {
        return instance.post(userId + '/goals', {title, content, date});
    },
    postPlan(userId, title, content, date) {
        return instance.post(userId + '/plans', {title, content, date});
    },

    deleteTask(userId, id) {
        return instance.delete(userId + `/tasks/${id}`);
    },
    deletePlan(userId, id) {
        return instance.delete(userId + `/plans/${id}`);
    },
    deleteGoal(userId, id) {
        return instance.delete(userId + `/goals/${id}`);
    },

    signupProfile(username, password) {
        return instance.post('/', {username, password});
    },
    async loginProfile(username, password) {
        try {
            const response = await instance.get('/');
            const users = response.data;

            const foundUser = users.find(user => user.username === username && user.password === password);

            if (foundUser) {
                debugger
                return { success: true, user: foundUser };
            } else {
                return { success: false, message: "Неверный логин или пароль" };
            }
        } catch (error) {
            console.error("Ошибка при выполнении логина:", error);
            return { success: false, message: "Произошла ошибка. Повторите попытку позже." };
        }
    }
}