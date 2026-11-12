import { ImageResponse } from "next/og";

export const alt = "Private Property Finance — UK property finance brokers";
export const size = {
  width: 1200,
  height: 630,
};
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
          background: "#00332E",
          color: "#F7F6F2",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "1.5px solid #A7D7CE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F7F6F2",
              fontSize: 32,
              fontFamily: "Georgia, serif",
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontFamily: "Georgia, serif" }}>
              Private Property Finance
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 4,
                color: "#A7D7CE",
                textTransform: "uppercase",
              }}
            >
              Specialist property finance across the UK
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 2, background: "#A7D7CE", marginBottom: 28 }} />
          <div
            style={{
              fontSize: 60,
              lineHeight: 1.08,
              letterSpacing: -1.2,
              maxWidth: 940,
              fontFamily: "Georgia, serif",
            }}
          >
            Property finance, arranged by people who&apos;ve sat on the
            lender&apos;s side.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "rgba(247,246,242,0.75)",
            borderTop: "1px solid rgba(167,215,206,0.25)",
            paddingTop: 24,
          }}
        >
          <span>Commercial · Bridging · Development · Foreign National BTL</span>
          <span>£100k – £20m · UK-Wide Coverage</span>
        </div>
      </div>
    ),
    size
  );
}
