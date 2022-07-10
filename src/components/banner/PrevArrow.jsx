export default function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="mt-1024:opacity-0 group-hover:opacity-100 absolute top-1/2 z-10 transform -translate-y-1/2 left-2 w-10 h-10 flex items-center justify-center rounded-full group cursor-pointer hover:opacity-70 duration-300"
    >
      <svg width="150" height="150" viewBox="0 0 24 24" style={{ fill: '#d1d5db' }}>
        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
      </svg>
    </div>
  );
}
