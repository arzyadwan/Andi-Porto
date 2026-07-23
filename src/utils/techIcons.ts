/**
 * Utility to map tech stack names to tech-stack-icons names
 */
export const mapTechToIconName = (name: string): string | null => {
  const n = name.toLowerCase().trim();
  if (n.includes("next.js") || n.includes("nextjs") || n === "next") return "nextjs";
  if (n.includes("react")) return "react";
  if (n.includes("typescript") || n === "ts") return "typescript";
  if (n.includes("tailwindcss") || n.includes("tailwind")) return "tailwindcss";
  if (n.includes("html5") || n === "html") return "html5";
  if (n.includes("css3") || n === "css") return "css3";
  if (n.includes("javascript") || n === "js") return "js";
  if (n.includes("zustand")) return "zustand";
  if (n.includes("redux")) return "redux";
  if (n.includes("node.js") || n.includes("nodejs") || n === "node") return "nodejs";
  if (n.includes("express")) return "expressjs";
  if (n.includes("postgresql") || n.includes("postgres")) return "postgresql";
  if (n.includes("mongodb") || n.includes("mongo")) return "mongodb";
  if (n.includes("graphql")) return "graphql";
  if (n.includes("git") && !n.includes("github")) return "git";
  if (n.includes("github")) return "github";
  if (n.includes("docker")) return "docker";
  if (n.includes("vercel")) return "vercel";
  if (n.includes("netlify")) return "netlify";
  if (n.includes("figma")) return "figma";
  if (n.includes("solidity")) return "solidity";
  if (n.includes("ethers") || n.includes("web3")) return "web3js";
  if (n.includes("nestjs") || n.includes("nest")) return "nestjs";
  if (n.includes("prisma")) return "prisma";
  if (n.includes("sanity")) return "sanity";
  if (n.includes("vite")) return "vitejs";
  if (n.includes("python")) return "python";
  if (n.includes("storybook")) return "storybook";
  if (n.includes("chart.js") || n.includes("chartjs")) return "chartjs";
  if (n.includes("api") || n.includes("restful") || n.includes("rest api") || n === "rest") return "openapi";
  if (n.includes("bootstrap")) return "bootstrap5";
  if (n.includes("sass") || n.includes("scss")) return "sass";
  if (n.includes("component-driven")) return "storybook";
  return null;
};

export const getTechIconNames = (name: string): string[] => {
  const clean = name.replace(/[()]/g, " ");
  const parts = clean.split(/\s*(?:\/|&|and|,|\+)\s*/i);
  const matched: string[] = [];
  for (const part of parts) {
    const icon = mapTechToIconName(part);
    if (icon && !matched.includes(icon)) {
      matched.push(icon);
    }
  }
  return matched;
};
