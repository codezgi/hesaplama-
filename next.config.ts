import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Ana dizindeki başka bir lockfile yüzünden yanlış kök seçilmesini engelle
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
