import type { NextConfig } from "next";

/**
 * GitHub Pages serves the site under `/<repo>`. Set `basePath` only when building in Actions
 * so local dev stays at `/` and `next/image` + router use the correct prefix in production.
 *
 * Override anytime: `BASE_PATH=/my-repo next build`
 */
function getBasePath(): string {
  if (process.env.BASE_PATH !== undefined) {
    return process.env.BASE_PATH.replace(/\/$/, "") || "";
  }
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_ACTIONS === "true" && repo) {
    return `/${repo}`;
  }
  return "";
}

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
