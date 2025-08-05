export default function SearchBox() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Search crochet items..."
        style={{
          padding: "10px 15px",
          width: "300px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}
