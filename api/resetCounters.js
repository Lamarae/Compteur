export default function handler(req, res) {
    counters = { anne: 0, hugo: 0 };
    res.status(200).json({ message: "Compteurs réinitialisés" });
}
