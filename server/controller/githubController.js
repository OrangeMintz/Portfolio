import fetch from 'node-fetch';
import dotenv from 'dotenv'
import redis from "../utils/cache.js";

dotenv.config();

const getTopLanguages = async (req, res) => {
    const username = req.params.username;
    const cacheKey = `github:languages:${username}`;
    const EXCLUDED_LANGUAGES = ['Hack', 'Less'];

    const shouldBypassCache = req.query.refresh === 'true';

    if (!shouldBypassCache) {
        try {
            const cached = await redis.get(cacheKey);
            if (cached) {
                console.log("✅ Serving from cache");
                return res.json(cached);
            }
        } catch (error) {
            console.error("⚠️ Cache fetch error:", error);
        }
    } else {
        console.log("🔁 Refresh requested, bypassing cache");
    }

    try {
        const headers = {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        };

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
        const repos = await reposRes.json();

        if (!Array.isArray(repos)) {
            return res.status(500).json({ error: 'Invalid response from GitHub API' });
        }

        const languageTotals = {};

        for (const repo of repos) {
            const langRes = await fetch(repo.languages_url, { headers });
            const langs = await langRes.json();

            if (!langs || langs.message) {
                console.warn(`Skipped repo ${repo.name} due to rate limit or error`);
                continue;
            }

            for (const [lang, bytes] of Object.entries(langs)) {
                if (!EXCLUDED_LANGUAGES.includes(lang)) {
                    languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
                }
            }
        }

        const totalBytes = Object.values(languageTotals).reduce((a, b) => a + b, 0);
        const languagePercentages = Object.entries(languageTotals)
            .map(([lang, bytes]) => ({
                language: lang,
                percentage: ((bytes / totalBytes) * 100).toFixed(2),
            }))
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));

        await redis.set(cacheKey, languagePercentages, { ex: 60 * 60 });

        res.json(languagePercentages);

    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        res.status(500).json({ error: 'Failed to fetch data from GitHub' });
    }
};

export { getTopLanguages };
