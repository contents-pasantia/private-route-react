export function LoadSpinner(){
  return(
    <div className="w-screen flex items-center justify-center space-x-2 animate-bounce">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
      <div className="w-8 h-8 bg-black rounded-full"></div>
    </div>
  )
}