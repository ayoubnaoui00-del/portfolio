import { ImageResponse } from "next/og";

export const alt = "Ayoub Ennaoui — Junior Full Stack Developer · Mobile, AI & AR";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0B14",
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(124, 58, 237, 0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(34, 211, 238, 0.28), transparent 45%)",
          color: "#F5F5FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "56px",
            borderRadius: "28px",
            backgroundColor: "rgba(26, 26, 46, 0.85)",
            border: "2px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#22D3EE",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Developer Portfolio
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#F5F5FA",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Ayoub Ennaoui
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#A1A1B5",
              marginBottom: "32px",
            }}
          >
            Junior Full Stack Developer · Mobile, AI &amp; AR
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: 22,
              color: "#22D3EE",
            }}
          >
            <span>Flutter</span>
            <span>·</span>
            <span>React Native</span>
            <span>·</span>
            <span>Node.js</span>
            <span>·</span>
            <span>PostgreSQL</span>
            <span>·</span>
            <span>Next.js</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

