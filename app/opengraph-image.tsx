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
          background: "#0B1F3A",
          color: "#F7F5F0",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "1px solid #A8863B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9AE74",
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
                color: "rgba(247,245,240,0.5)",
                textTransform: "uppercase",
              }}
            >
              Property finance brokers
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 1, background: "#A8863B", marginBottom: 28 }} />
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: -1.5,
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
            color: "rgba(247,245,240,0.6)",
            borderTop: "1px solid rgba(247,245,240,0.15)",
            paddingTop: 24,
          }}
        >
          <span>Bridging · Development · Commercial · Foreign national BTL</span>
          <span>£100k – £20m · Manchester &amp; London</span>
        </div>
      </div>
    ),
    size
  );
}
