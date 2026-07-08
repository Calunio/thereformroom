import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Projekt ist eigenständig — Root explizit setzen (verhindert Fehl-Erkennung
  // durch Lockfiles in übergeordneten Ordnern, solange es noch hier eingebettet liegt).
  turbopack: {
    root: path.join(__dirname),
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: "/kursplan", destination: "/#kurse", permanent: false },
      { source: "/preise", destination: "/#preise", permanent: false },
      { source: "/kontakt", destination: "/#kontakt", permanent: false },
      { source: "/ueber-mich", destination: "/#ueber-mich", permanent: false },
      { source: "/faq", destination: "/#faq", permanent: false },
    ];
  },
};

export default nextConfig;
