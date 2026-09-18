import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only self-authored placeholder SVGs live under /public — safe to allow.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
