import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--background)",
      color: "var(--foreground)",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(3rem, 8vw, 6rem)",
        fontWeight: "800",
        color: "var(--accent)",
        letterSpacing: "-0.05em",
        marginBottom: "1rem"
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "1.5rem",
        marginBottom: "2rem"
      }}>
        System Route Not Found
      </h1>
      <p style={{
        color: "var(--secondary)",
        maxWidth: "400px",
        marginBottom: "3rem",
        lineHeight: "1.6"
      }}>
        The directory or logic you are trying to access does not exist in our current infrastructure.
      </p>
      <Link href="/" style={{
        display: "inline-block",
        padding: "0.8rem 2rem",
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
        textDecoration: "none",
        fontWeight: "600",
        borderRadius: "4px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontSize: "0.9rem",
        transition: "transform 0.2s ease"
      }}>
        Return to Core
      </Link>
    </main>
  );
}
