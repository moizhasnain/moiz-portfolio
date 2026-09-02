export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Moiz Hasnain. All rights reserved.</span>
        <span>SEO Executive · Lahore, Pakistan</span>
      </div>
    </footer>
  );
}
