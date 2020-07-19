import handler from '../../../handler';
import { openDB } from '../../../openDB';

export default handler.get(async (req, res) => {

  console.log("<< id route >>")
  const db = await openDB();
  const { id } = req.query

  const champions = await db.all(`
    SELECT * 
    FROM Driver 
    WHERE id = ${id}
  `);
  res.status(200).json(champions);
}).post((req, res) => {
  throw new Error('Ups something happened! Sorry!');
});
