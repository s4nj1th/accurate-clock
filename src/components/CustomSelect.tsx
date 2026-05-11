import { useEffect, useRef, useState } from "react";

export type Option = { value: string; label: string };

export default function CustomSelect({
  value,
  onChange,
  options,
  className,
  forceClose,
}: {
  value: string;
  onChange: (val: string) => void;
  options: Option[];
  className?: string;
  forceClose?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (!open) setHighlight(-1);
  }, [open]);

  // close when parent requests it
  useEffect(() => {
    if (forceClose) setOpen(false);
  }, [forceClose]);

  function toggle() {
    setOpen((s) => !s);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      e.preventDefault();
      setOpen(true);
      setHighlight(0);
      return;
    }

    if (open) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((i) => Math.min(i + 1, options.length - 1));
        const itemsDown = listRef.current?.querySelectorAll("li");
        if (itemsDown) {
          const idx = Math.min(highlight + 1, options.length - 1);
          itemsDown[idx]?.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((i) => Math.max(i - 1, 0));
        const itemsUp = listRef.current?.querySelectorAll("li");
        if (itemsUp) {
          const idx = Math.max(highlight - 1, 0);
          itemsUp[idx]?.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlight >= 0) onChange(options[highlight].value);
        setOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    }
  }

  return (
    <div
      ref={rootRef}
      className={`relative cursor-pointer inline-block min-w-[180px] ${className || ""}`}
    >
      <button
        className={`bg-[#111] text-white border border-[#222] px-3 py-2 rounded-md inline-flex items-center cursor-pointer justify-between w-full`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span className="truncate">
          {options.find((o) => o.value === value)?.label || "Select"}
        </span>
        <span className="ml-2 text-sm opacity-80">▾</span>
      </button>

      <ul
        ref={listRef}
        role="listbox"
        aria-activedescendant={highlight >= 0 ? `opt-${highlight}` : undefined}
        className={`w-full absolute right-0 top-[calc(100%+6px)] bg-[#121212] text-white border border-[#222] rounded-lg shadow-lg p-1 mt-2 list-none max-h-64 overflow-auto z-50 ${open ? "block" : "hidden"}`}
        tabIndex={-1}
      >
        {options.map((opt, i) => (
          <li
            id={`opt-${i}`}
            key={opt.value}
            role="option"
            aria-selected={opt.value === value}
            className={`px-3 py-2 rounded-md cursor-pointer ${i === highlight ? "bg-[#202020]" : ""} ${opt.value === value ? "font-semibold" : ""}`}
            onMouseEnter={() => setHighlight(i)}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
