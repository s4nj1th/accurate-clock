import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-16 py-4 bg-[#1d1d1d] text-sm text-center text-[#cecece] border-t border-[#202020] w-full">
      <p className="flex gap-2.5 justify-center">
        <span>
          Made with 💔 by{" "}
          <a
            href="https://github.com/s4nj1th/"
            className="text-[#ededed] hover:underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanjith
          </a>
        </span>
        ·
        <a
          href="https://github.com/s4nj1th/accurate-clock"
          className="text-[#ededed] hover:underline hover:text-white gap-1 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
          <span>Source</span>
        </a>
      </p>
    </footer>
  );
}
