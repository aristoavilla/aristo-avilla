import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface LazySectionProps {
  id: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function LazySection({
  id,
  children,
  minHeight = "50vh",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isNear = useInView(ref, { once: false, margin: "400px" });
  const [hasBeenNear, setHasBeenNear] = useState(false);

  useEffect(() => {
    if (isNear) {
      setHasBeenNear(true);
    }
  }, [isNear]);

  return (
    <div ref={ref} id={id} style={{ minHeight: hasBeenNear ? undefined : minHeight }}>
      {hasBeenNear ? children : null}
    </div>
  );
}
