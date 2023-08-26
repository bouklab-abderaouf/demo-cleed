import './App.css';

function App() {
  return (
    <div className="className=' w-full h-auto flex-col justify-start sm:justify-between flex-col-reverse sm:flex-row sm:mt-10 mt-10'> ">
    <h1 className="text-3xl font-bold text-center">embedded Test</h1>
      <div className="relative w-full h-[1000px] md:h-[1000px] ">
            <iframe
              src="https://bouklababdelraouf.bubbleapps.io/version-test"
              name="bubble-app"
              title="Bubble App"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            ></iframe>
          </div>
    </div>
  );
}

export default App;
