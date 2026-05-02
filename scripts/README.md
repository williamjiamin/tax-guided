# Scripts

## sync-regulations

Fetches the latest regulation items from three sources:

- **IRS Internal Revenue Bulletin** (https://www.irs.gov/irb)
- **IRS News Releases** (https://www.irs.gov/newsroom)
- **China STA Policy Library** (https://fgk.chinatax.gov.cn)

### Usage

```sh
npm run sync:regulations
```

Or directly:

```sh
node scripts/sync-regulations.mjs
```

### What it does

1. Fetches the latest items from each source (up to 10 per source).
2. Merges results. If a source fails (network error, blocked, timeout), existing cached data for that source is preserved.
3. Writes `data/regulations.latest.json` (the canonical JSON feed).
4. Regenerates `src/lib/regulations/feed-data.ts` (inline TypeScript data used at build time).
5. Prints a summary: `Synced X items (Y US, Z CN)`.

### Recommended frequency

Run daily to keep regulation data current. No external dependencies are needed beyond Node.js 18+ (uses native `fetch`).

### Future automation

This will be automated via a Cloudflare cron trigger that runs the sync daily and commits updated data.

## validate-expansion-data

Validates the new expansion seed datasets in `data/expansion`.

### Usage

```sh
npm run validate:expansion
```

### What it checks

1. Each dataset file is a JSON array
2. Required top-level fields are present
3. IDs are unique within each dataset
4. Each record has at least one HTTPS source URL
5. Historical years and compliance due dates parse correctly
