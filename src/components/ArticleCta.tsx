import React from "react";

export default function ArticleCta({ label, url }: { label: string; url: string }) {
    return React.createElement(
          "div",
      { className: "mt-8 rounded-2xl border border-border bg-surface px-6 py-8 text-center" },
          React.createElement(
                  "a",
            {
                      href: url,
                      target: "_blank",
                      rel: "noopener noreferrer sponsored",
                      className: "inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark",
            },
                  label,
                  React.createElement("span", { "aria-hidden": "true" }, "→")
                )
        );
}
