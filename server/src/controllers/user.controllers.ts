import User from '../models/user.model.js';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: 'user with given id not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const user = new User(data);

    const saveduser = await user.save();

    res.status(201).json(saveduser);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, data);

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User with given id not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'User with given id not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
