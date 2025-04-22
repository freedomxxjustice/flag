import { sql } from "../config/db.js";

export const getAllFlags = async (req, res) => {
  try {
    const flags = await sql`
            SELECT * FROM flags
            ORDER BY created_at DESC
        `;
    res.status(200).json({ success: true, data: flags });
    console.log(flags);
  } catch (error) {
    console.log("Error in getAllFlags", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getFlag = async (req, res) => {
  const { id } = req.params;

  try {
    const flag = sql`
        SELECT * FROM flags WHERE id=${id}
        `;

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Error in getFlag", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createFlag = async (req, res) => {
  const { name, description, difficulty, image } = req.body;

  if (!name || !description || !difficulty || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newFlag = await sql`
    INSERT INTO flags (name, description, difficulty, image) VALUES(${name}, ${description}, ${difficulty}, ${image})
    RETURNING *`;

    console.log("New flag added:", newFlag);
    res.status(201).json({ success: true, data: newFlag[0] });
  } catch (error) {
    console.log("Error in createFlag", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateFlag = async (req, res) => {
  const { id } = req.params;
  const { name, description, difficulty, image } = req.body;

  try {
    const updateFlag = await sql`
            UPDATE flags SET name=${name}, description=${description}, difficulty=${difficulty}, image=${image} WHERE id=${id}
            RETURNING *
            `;
    if (updateFlag.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updateFlag[0] });
  } catch (error) {
    console.log("Error in updateFlag", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteFlag = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteFlag = await sql`
            DELETE FROM flags WHERE id=${id}
            RETURNING *
            `;
    if (deleteFlag.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: deleteFlag[0] });
  } catch (error) {
    console.log("Error in deleteFlag", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
