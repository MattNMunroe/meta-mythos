const db = require("../db/dbConfig")

const getAllDeities = async () => {
    try {
        const allDeities = await db.any("SELECT * FROM myths");
        return allDeities
    } catch (error) {
        return error;
    }
};