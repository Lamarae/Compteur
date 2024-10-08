let counters = { anne: 0, hugo: 0 };

export default function handler(req, res) {
    res.status(200).json(counters);
}
