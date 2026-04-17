import { useEffect, useRef, useState } from "react";
import "./Results.css";

const stats = [
  { value: 32, label: "Partners and clients", suffix: "" },
  { value: 670, label: "Projects Delivered", suffix: "" },
  { value: 98, label: "Clients Satisfied", suffix: "%" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (ts) => {
      if (!startTime) startTime = ts;

      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function Stat({ value, label, suffix, started }) {
  const count = useCountUp(value, 1800, started);

  return (
    <div className="results__stat">
      <p className="results__more">More Than</p>
      <p className="results__number">
        {count}
        <span className="results__suffix">{suffix}</span>
      </p>
      <p className="results__label">{label}</p>
    </div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (<>
    <h2 className="section-title">Results</h2>
    <section
      className="results"
      id="results"
      ref={ref}
      style={{
          backgroundImage: "url('/results.JPEG')",
      }}
    >

      <div className="results__grid">
        {stats.map((s) => (
          <Stat key={s.label} {...s} started={started} />
        ))}
      </div>
    </section><br/><br/><br/>
  </>);
}