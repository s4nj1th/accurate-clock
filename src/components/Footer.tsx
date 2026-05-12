import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-16 py-4 bg-[#1d1d1d] text-sm text-center text-[#cecece] border-t border-[#202020] w-full">
      <p className="flex gap-2.5 justify-center">
        <span className="flex gap-1.5">
          Made with 💔 by{" "}
          <a
            href="https://github.com/s4nj1th/"
            className="text-[#ededed] hover:underline hover:text-white flex gap-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Sanjith</span>
            <FaExternalLinkAlt size={8} className="opacity-75" />
          </a>
        </span>
        ·
        <a
          href="https://github.com/s4nj1th/accurate-clock"
          className="text-[#ededed] hover:underline hover:text-white gap-0.5 flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="gap-1 flex items-center">
            <SiGithub />
            <span>Source</span>
          </span>
          <FaExternalLinkAlt size={8} className="opacity-75" />
        </a>
      </p>
    </footer>
  );
}
