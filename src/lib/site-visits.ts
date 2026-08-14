import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/start-server-core";

const sessionCookieName = "site-visit-session";
const sessions = new Map<string, number>();

export const incrementSiteVisit = createServerFn({ method: "POST" }).handler(() => {
  let sessionId = getCookie(sessionCookieName);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    setCookie(sessionCookieName, sessionId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
      secure: process.env["NODE_ENV"] === "production",
    });
  }

  const nextVisitCount = (sessions.get(sessionId) ?? 0) + 1;
  sessions.set(sessionId, nextVisitCount);
  return nextVisitCount;
});