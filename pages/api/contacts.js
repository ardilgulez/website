import rateLimit from "../../lib/rate-limit";

const API_URL = process.env.API_URL;

const limiter = rateLimit({
    interval: 24 * 60 * 60 * 1000, // 24 hour
    uniqueTokenPerInterval: 200, // Max 500 users per second
});

export default async function handler(req, res) {
    try {
        console.log(req.connection.remoteAddress);
        await limiter.check(res, 5, req.connection.remoteAddress); // 5 requests per day
        const response = await fetch(API_URL, {
            body: JSON.stringify(req.body),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        res.status(200).json(response.body);
    } catch (ex) {
        res.status(429).json({ error: "Rate limit exceeded" });
    }
}
