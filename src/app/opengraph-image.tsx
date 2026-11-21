import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c0e11",
          color: "#e8eaee",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#9aa1ad" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#3ddc84" }} />
          <div style={{ display: "flex" }}>{profile.availability}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{profile.tagline}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#f5b301" }}>{`${profile.name} · ${profile.role}`}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#9aa1ad" }}>
          {["MES & WMS", "SAP Business One", "HRIS", "SSO", "AI", "Infrastructure"].map((t) => (
            <div key={t} style={{ border: "1px solid #262b33", padding: "8px 16px", borderRadius: 4 }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
