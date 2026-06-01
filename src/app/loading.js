export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-[#0f1f42]">
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-white/25 border-t-white"
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}
