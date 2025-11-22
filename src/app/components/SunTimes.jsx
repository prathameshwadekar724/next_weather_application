export default function SunTimes({ sys }) {
  if (!sys) return null;

  const format = (t) =>
    new Date(t * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="flex justify-between mt-6 bg-white/50 backdrop-blur-xl border border-white/30 p-4 rounded-2xl w-[90%] max-w-lg mx-auto text-center text-white">
      <p>🌅 Sunrise: <span className="font-semibold">{format(sys.sunrise)}</span></p>
      <p>🌇 Sunset: <span className="font-semibold">{format(sys.sunset)}</span></p>
    </div>
  );
}
