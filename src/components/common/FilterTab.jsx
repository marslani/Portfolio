import './FilterTab.css';

export default function FilterTab({ active, label, onClick }) {
  return (
    <button
      type="button"
      className={`filter-tab ${active ? 'filter-tab--active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
