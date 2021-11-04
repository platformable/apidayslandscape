export default async function handler(req, res) {
  await main();
 if (req.method === "GET") {
  res.status(200).json({apidays:"yes"})
   
 }

}