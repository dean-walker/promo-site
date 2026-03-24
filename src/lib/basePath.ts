/**
 * Prefix paths to files in `public/` when the app is served under a subpath
 * (e.g. GitHub Pages at `/<repo>`). `NEXT_PUBLIC_BASE_PATH` is set in `next.config.ts`.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path) {
    return base || "/";
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
