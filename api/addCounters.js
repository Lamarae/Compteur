export default function handler(req, res) {
    const { name } = req.body;
    if (name === 'anne' || name === 'hugo') {
        counters[name] += 3;
        res.status(200).json({ message: `Compteur ${name} mis à jour`, count: counters[name] });
    } else {
        res.status(400).json({ error: "Nom de compteur invalide" });
    }
}
