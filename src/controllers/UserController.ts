import { Router, Request, Response } from 'express';
import esUserService from '../services/EsUserService';

const controller = Router();

// use get for easier testing. actual one change to post
controller.get('/index', async (req: Request, res: Response) => {
  try {
    await esUserService.index();
    res.json('ok');
  } catch (err) {
    console.error(err);
    res.json('Something is wrong');
  }
});

controller.get('/search', async (req: Request, res: Response) => {
  try {
    res.json({ data: await esUserService.search() });
  } catch (err) {
    console.error(err);
    res.json('Something is wrong');
  }
});

export default controller;
