export default function ErrorBox({message}) {
  return (
    <div className="text-center mt-6 bg-red-500/30 border border-red-400 text-white px-6 py-3 rounded-xl backdrop-blur-md">
      {message}
    </div>
  )
}
