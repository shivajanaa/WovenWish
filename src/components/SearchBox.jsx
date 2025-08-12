export default function SearchBox() {
  return (
    <div className="w-full px-4 py-4 flex justify-center">
      <input
        type="text"
        placeholder="Search crochet items..."
        className="w-full max-w-md px-4 py-2 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
      />
    </div>
  );
}
