import { Request, Response } from 'express';
import { users_tb } from '../models/users.model.ts';

interface ErrorSample extends Error {
  message: string;
}

//** */ Read Methods 

//~~ for route /api/users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await users_tb.findAll()
    res.send(users)
  } catch (error: ErrorSample | any) {
    res.send({ message: error.message, })
  }
}

//~~ for route /api/user
export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const user = await users_tb.findByPk(id)
    if (!user) {
      throw new Error('User not found')
    }
    res.send(user)
  } catch (error: ErrorSample | any) {
    res.send({ message: error.message, })
  }
}


//** */ Create Methods 

//~~ for route /api/user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await users_tb.create(req.body);
    console.log('Created user:', user.toJSON());
    res.send(user.toJSON());
  } catch (error: ErrorSample | any) {
    console.error('Error creating user:', error);
    res.status(500).send({ message: error.message });
  }
}

//** */ Update Methods 

//~~ for route /api/users/:id
export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newInfo = { ...req.body };
    const selectedUser = await users_tb.findByPk(id);

    if (selectedUser) {
      await selectedUser.update(newInfo);
      res.status(200).send({ message: `El usuario con ID ${id} ha sido actualizado correctamente` });
    } else {
      res.status(404).send({ message: `El usuario con ID ${id} no se encontró` });
    }
  } catch (error: ErrorSample | any) {
    res.status(500).send({ message: error.message });
  }
}

//** */ Delete Methods 

//~~ for route /api/users/:id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await users_tb.destroy({ where: { id } })
    res.sendStatus(204)
  } catch (error: ErrorSample | any) {
    res.sendStatus(500)
    res.send({ message: error.message, })
  }
}