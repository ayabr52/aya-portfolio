import { useState, useEffect } from "react";

export default function Typing() {
  const words = ["Backend Developer", "Frontend Developer" ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[index];

      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex - 1 === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <span className="inline-block min-w-[220px] md:min-w-[300px] whitespace-nowrap text-3xl md:text-4xl font-semibold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">
  {text}
  <span className="animate-pulse">|</span>
</span>
  );
}
