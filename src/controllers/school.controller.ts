import { Request, Response } from "express";
import pool from "../lib/connectDB";

export const addSchool = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      res.status(400).json({
        message: "All fields are required.(Name,Address,Latitude,Longitude)",
      });
      return;
    }

    const query =
      "INSERT INTO school_table (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      message: "School added successfully",
      school: result,
    });
    return;
  } catch (error) {
    console.error("Error adding school:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const listSchool = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { latitude, longitude } = req.query;

    console.log({ latitude, longitude });

    if (!latitude || !longitude) {
      res.status(400).json({ message: "Please provide latitude & longitude" });
    }

    // Use ChatGPT to find the formula for calculating the nearest school.

    const query =
      "SELECT id, name, address, latitude, longitude, (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance FROM school_table ORDER BY distance ASC;";

    const [result] = await pool.query(query, [latitude, longitude, latitude]);

    res.status(200).json(result);
    return;
  } catch (error) {
    console.error("Error listing school:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
