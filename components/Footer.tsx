export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-4 py-6 max-w-screen-lg mx-auto px-5 border-t border-neutral-100">
      <p className="text-sm text-neutral-500">Copyright © {new Date().getFullYear()} zuozizhen. All rights reserved.</p>
    </footer>
  );
}
