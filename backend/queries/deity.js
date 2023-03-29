const db = require("../db/dbConfig");

const getAllDeities = async () => {
  try {
    const allDeities = await db.any("SELECT * FROM myths");
    return allDeities;
  } catch (error) {
    return error;
  }
};

const getDeity = async (id) => {
  try {
    const oneDeity = await db.one("SELECT * FROM myths WHERE id=$1", id);
    return oneDeity;
  } catch (error) {
    return error;
  }
};

const deleteDeity = async (id) => {
  try {
    const oneDeity = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return oneDeity;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createDeity = async ({ name, description, tradition, reference }) => {
  try {
    const newDeity = await db.one(
      "INSERT INTO myths (name, description, tradition, reference) VALUES ($1, $2. $3, $4) RETURNING *",
      [name, description, tradition, reference]
    );
    return newDeity;
  } catch (error) {
    return error;
  }
};

const updateDeity = async (id, { name, description, tradition, reference }) => {
  try {
    const updateDeity = await db.one(
      "UPDATE myths SET name=$1, description=$2, tradition=$3, reference=$4 where id=$5 RETURNING *",
      [name, description, tradition, reference]
    );
    return updateDeity;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllDeities,
  getDeity,
  deleteDeity,
  createDeity,
  updateDeity,
};
