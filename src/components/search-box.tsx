"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { calculators } from "@/lib/calculators";

export function SearchBox({ big = false }: { big?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const term = q.trim().toLocaleLowerCase("tr");
    if (!term) return [];
    return calculators
      .filter((c) => {
        const hay = (c.title + " " + c.keywords.join(" ")).toLocaleLowerCase("tr");
        return hay.includes(term);
      })
      .slice(0, 6);
  }, [q]);

  function go(slug: string) {
    setOpen(false);
    setQ("");
    router.push(`/hesaplama/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full">
      <div className="relative">
        <Search
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-text-muted ${big ? "h-5 w-5" : "h-[18px] w-[18px]"}`}
        />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKeyDown}
          placeholder="Hesaplayıcı ara… (Örn: KDV, kredi, BMI)"
          className={`field ${big ? "!py-4 !text-lg !rounded-2xl" : ""}`}
          style={{ paddingLeft: big ? "3.25rem" : "2.75rem" }}
          aria-label="Hesaplayıcı ara"
        />
      </div>

      {open && results.length > 0 && (
        <ul className="card absolute z-20 mt-2 w-full overflow-hidden p-1.5">
          {results.map((c, i) => (
            <li key={c.slug}>
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go(c.slug)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  i === active ? "bg-surface-2" : ""
                }`}
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium text-text">{c.title}</span>
                  <span className="block truncate text-sm text-text-muted">{c.description}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
