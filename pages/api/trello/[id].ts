import axios from "axios"
import { Trello } from '@/interfaces/Trello/index';
import { useRouter } from 'next/router';

export default async function (req: any, res: any) {
  const { id } = req.query;
  // const { data } = await axios.get(`https://trello.com/b/${id}.json`);
  const data = require('../../../sample_data/worktask_response.json');
  res.status(200).json(data);
}