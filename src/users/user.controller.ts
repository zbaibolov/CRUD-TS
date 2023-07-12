import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { UserService } from './user.service';
import { User } from './types/user.type';

class UserController {
  private userService: UserService = new UserService();

  constructor() {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    let newUser: User = req.body;
    const validationErrors = await validate(newUser);

    if (validationErrors.length > 0) {
      res.status(400).send(validationErrors);
    } else {
      try {
        const user = await this.userService.create(newUser);
        res.status(201).send(user);
      } catch (e) {
        next(e);
      }
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.findAll();
      res.send(users);
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = await this.userService.update(req.params.id, req.body);
      if (updatedUser) {
        res.send(updatedUser);
      } else {
        res.status(404).send({ message: "User not found!" });
      }
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.userService.delete(req.params.id);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "User not found!" });
      }
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
