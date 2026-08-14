import { createServerFn } from "@tanstack/react-start";

const counterKey = "site-visits";

async function incrementVisitCounter(): Promise<number> {
  const url = process.env["UPSTASH_REDIS_REST_URL"];
  const token = process.env["UPSTASH_REDIS_REST_TOKEN"];

  if (!url || !token) {
    throw new Error("Site visit counter is not configured.");
  }

  const response = await fetch(`${url.replace(/\/$/, "")}/incr/${counterKey}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Unable to increment the site visit counter: ${response.status}`);
  }

  const payload = (await response.json()) as { result?: unknown };
  if (typeof payload.result !== "number") {
    throw new Error("Site visit counter returned an invalid response.");
  }

  return payload.result;
}

export const incrementSiteVisit = createServerFn({ method: "POST" }).handler(incrementVisitCounter);
