const db = require('../db');

// Функция для создания нового пользователя
const createUser = async (username, email, password) => {
    try {
        const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        return result;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

// Функция для поиска пользователя по email
const getUserByEmail = async (email) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) return null;
        return rows[0];
    } catch (error) {
        throw new Error('Error finding user: ' + error.message);
    }
};

// Получение пользователя по I


module.exports = {
    createUser,
    
    getUserByEmail
};
