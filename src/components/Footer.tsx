// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="mt-16 py-4 bg-[#1d1d1d] text-sm text-center text-[#cecece] border-t border-[#202020]">
      <p>
        Made with 💔 by{" "}
        <a
          href="https://github.com/s4nj1th/"
          className="text-[#dedede] hover:underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sanjith
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/s4nj1th/accurate-clock"
          className="text-[#dedede] hover:underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>{" "}
        · MIT License
      </p>
    </footer>
  );
}
