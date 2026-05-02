import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const expansionDir = path.join(rootDir, "data", "expansion");

const collections = [
  {
    file: "forms.json",
    label: "forms",
    required: ["id", "slug", "country", "formNumber", "formName", "sources"],
  },
  {
    file: "states.json",
    label: "states",
    required: ["id", "country", "state", "code", "authority", "sources"],
  },
  {
    file: "historical-rates.json",
    label: "historical rates",
    required: ["id", "country", "taxType", "year", "brackets", "sources"],
  },
  {
    file: "glossary.json",
    label: "glossary terms",
    required: ["id", "term", "shortDefinition", "fullDefinition", "sources"],
  },
  {
    file: "compliance-calendar.json",
    label: "compliance deadlines",
    required: ["id", "country", "taxType", "dueDate", "sources"],
  },
  {
    file: "calculators.json",
    label: "calculators",
    required: ["id", "slug", "title", "summary", "sources"],
  },
  {
    file: "treaties.json",
    label: "treaties",
    required: ["id", "countryA", "countryB", "signedDate", "effectiveDate", "sources"],
  },
  {
    file: "statutes.json",
    label: "statute sections",
    required: ["id", "country", "statute", "section", "title", "fullText", "sources"],
  },
  {
    file: "case-law.json",
    label: "tax cases",
    required: ["id", "country", "court", "caseName", "decisionDate", "holding", "sources"],
  },
  {
    file: "industry-guides.json",
    label: "industry guides",
    required: ["id", "country", "industry", "title", "sections", "sources"],
  },
  {
    file: "directory-registries.json",
    label: "directory registries",
    required: ["id", "slug", "country", "name", "officialUrl", "sources"],
  },
];

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

let hasErrors = false;

for (const collection of collections) {
  const filePath = path.join(expansionDir, collection.file);
  const raw = await readFile(filePath, "utf8");
  const items = JSON.parse(raw);

  if (!Array.isArray(items)) {
    console.error(`${collection.file}: expected a JSON array`);
    hasErrors = true;
    continue;
  }

  const ids = new Set();

  for (const item of items) {
    for (const key of collection.required) {
      if (!(key in item)) {
        console.error(`${collection.file}: item missing required field "${key}"`);
        hasErrors = true;
      }
    }

    if (typeof item.id !== "string" || item.id.length === 0) {
      console.error(`${collection.file}: item has invalid id`);
      hasErrors = true;
      continue;
    }

    if (ids.has(item.id)) {
      console.error(`${collection.file}: duplicate id "${item.id}"`);
      hasErrors = true;
    }
    ids.add(item.id);

    if (!Array.isArray(item.sources) || item.sources.length === 0) {
      console.error(`${collection.file}: "${item.id}" must have at least one source`);
      hasErrors = true;
    } else {
      for (const source of item.sources) {
        if (!source?.label || !isValidUrl(source?.url)) {
          console.error(`${collection.file}: "${item.id}" has an invalid source entry`);
          hasErrors = true;
        }
      }
    }

    if (collection.file === "historical-rates.json" && Number.isNaN(Number(item.year))) {
      console.error(`${collection.file}: "${item.id}" has an invalid year`);
      hasErrors = true;
    }

    if (collection.file === "compliance-calendar.json") {
      const timestamp = Date.parse(`${item.dueDate}T00:00:00Z`);
      if (Number.isNaN(timestamp)) {
        console.error(`${collection.file}: "${item.id}" has an invalid dueDate`);
        hasErrors = true;
      }
    }

    if (collection.file === "case-law.json") {
      const timestamp = Date.parse(`${item.decisionDate}T00:00:00Z`);
      if (Number.isNaN(timestamp)) {
        console.error(`${collection.file}: "${item.id}" has an invalid decisionDate`);
        hasErrors = true;
      }
    }
  }

  console.log(`Validated ${items.length} ${collection.label} from ${collection.file}`);
}

if (hasErrors) {
  process.exitCode = 1;
} else {
  console.log("Expansion data validation passed.");
}
