export default function SizeBox({ onClick, label, isSelected }) {
  return (
    <div onClick={onClick} className={`box ${isSelected ? "selected" : ""}`}>
      {label}
    </div>
  );
}
