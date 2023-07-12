import { Router, Request, Response } from "express";

const router: Router = Router();

interface User {
  id: string;
  name: string;
  email: string;
}

let users: User[] = [];  // This will act as a data store

// Read all users
router.get("/", (_req: Request, res: Response) => {
  res.send(users);
});

// Create a user
router.post("/", (req: Request, res: Response) => {
  const user: User = req.body;
  users.push(user);
  res.send(user);
});

// Update a user
router.put("/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedUser: User = req.body;
  users = users.map(user => user.id === id ? updatedUser : user);
  res.send(updatedUser);
});

// Delete a user
router.delete("/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  users = users.filter(user => user.id !== id);
  res.send({ message: "User deleted successfully!" });
});

export default router;
