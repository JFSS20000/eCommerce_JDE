"use client";

import { useEffect, useState } from "react";

type Props = {
  sourceUrl: string;
  fallback: string;
  alt: string;
  className?: string;
};

export function ProductImage({ sourceUrl, fallback, alt, className }: Props) {
  const [src, setSrc] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `tessa_remote_image_${sourceUrl}`;
    const cached = window.localStorage.getItem(cacheKey);

    if (cached) {
      setSrc(cached);
      return;
    }

    fetch(`/api/tessa-image?url=${encodeURIComponent(sourceUrl)}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { imageUrl?: string } | null) => {
        if (!cancelled && data?.imageUrl) {
          setSrc(data.imageUrl);
          window.localStorage.setItem(cacheKey, data.imageUrl);
        }
      })
      .catch(() => {
        if (!cancelled) setSrc(fallback);
      });

    return () => {
      cancelled = true;
    };
  }, [sourceUrl, fallback]);

  return <img src={src} alt={alt} className={className} onError={() => setSrc(fallback)} />;
}
