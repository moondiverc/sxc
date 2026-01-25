import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LeafletMap = ({ onError }: { onError?: () => void }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Siap untuk ambil CSS leaflet
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      link.onerror = () => {
        console.error("Failed to load Leaflet CSS");
        onError?.();
      };
      document.head.appendChild(link);
    }

    // Siap untuk ambil script leaflet
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.async = true;

    script.onload = () => {
      try {
        if (mapContainerRef.current && !mapInstanceRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const L = (window as any).L;

          // Koordinat Monas, Jakarta
          const monasLat = -6.1753924;
          const monasLng = 106.8271528;

          // Inisialisasi map
          const map = L.map(mapContainerRef.current, {
            center: [monasLat, monasLng],
            zoom: 15,
            scrollWheelZoom: false,
            zoomControl: true,
          });
          //   Mengakses endpoint api dari OpenStreetMap yang open source
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          })
            .addTo(map)
            .on("tileerror", () => {
              console.error("Failed to load map tiles");
              onError?.();
            });

          const customIcon = L.divIcon({
            className: "custom-marker",
            html: `
              <div style="
                background: #ef4444;
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              ">
                <div style="
                  transform: rotate(45deg);
                  margin-top: 3px;
                  margin-left: 7px;
                ">📍</div>
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
          });

          const marker = L.marker([monasLat, monasLng], {
            icon: customIcon,
          }).addTo(map);

          marker.bindPopup(`
            <div style="font-family: system-ui; padding: 4px;">
              <strong style="font-size: 14px;">Students x CEOs</strong><br/>
              <span style="color: #666; font-size: 12px;">📍 Jakarta, Indonesia</span>
            </div>
          `);

          marker.openPopup();

          mapInstanceRef.current = map;
          setIsMapLoaded(true);

          setTimeout(() => {
            map.invalidateSize();
          }, 100);
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        onError?.();
      }
    };

    script.onerror = () => {
      console.error("Failed to load Leaflet script");
      onError?.();
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [onError]);

  return (
    <div className="relative h-48 rounded-xl overflow-hidden">
      {!isMapLoaded && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse" />
            <p className="text-muted-foreground text-sm">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

export default LeafletMap;