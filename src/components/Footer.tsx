export default function Footer() {
  return (
    <footer className="footer flex bg-slate-200 dark:bg-slate-900 dark:text-white w-screen">
      <div className="container flex items-center justify-center w-full h-14">
        <span className="text-muted">
          <a
            href="https://www.kylethornton.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-semibold"
          >
            Kyle Thornton
          </a>{" "}
          | 2024
        </span>
      </div>
    </footer>
  );
}
