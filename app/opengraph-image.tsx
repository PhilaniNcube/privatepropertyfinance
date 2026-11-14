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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <rect width="64" height="64" rx="6" fill="#002420" />
            <rect
              x="1"
              y="1"
              width="62"
              height="62"
              rx="5"
              stroke="#A7D7CE"
              strokeOpacity="0.35"
              strokeWidth="1.2"
            />
            <path
              d="M12 52V22.5L32 9.5L52 22.5V52"
              stroke="#A7D7CE"
              strokeWidth="2.4"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <path
              d="M24.5 19.5L32 14.6L39.5 19.5"
              stroke="#A7D7CE"
              strokeOpacity="0.65"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 52H55"
              stroke="#A7D7CE"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.5 21H35C40.8 21 44.5 24.4 44.5 29.5C44.5 34.6 40.8 38 35 38H28.5V44.8C28.5 45.6 29.1 46 30.3 46H32.5V48.5H19.5V46H21.3C22.3 46 22.8 45.6 22.8 44.8V24.2C22.8 23.4 22.3 23 21.3 23H19.5V21ZM28.5 24.8V34.2H34.2C37.2 34.2 38.8 32.4 38.8 29.5C38.8 26.6 37.2 24.8 34.2 24.8H28.5Z"
              fill="#F7F6F2"
            />
          </svg>
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
