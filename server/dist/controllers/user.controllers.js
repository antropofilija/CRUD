var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../models/user.model.js';
export const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
export const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'user with given id not found' });
        }
        else {
            res.json(user);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
export const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = new User(data);
        const saveduser = yield user.save();
        res.status(201).json(saveduser);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
export const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    try {
        const updatedUser = yield User.findByIdAndUpdate(id, data);
        if (updatedUser) {
            res.json(updatedUser);
        }
        else {
            res.status(404).json({ message: 'User with given id not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedUser = yield User.findByIdAndDelete(id);
        if (deletedUser) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: 'User with given id not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
