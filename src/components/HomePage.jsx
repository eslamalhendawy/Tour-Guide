import Header from "./Header";
import background from "../assets/aa2d612a943836be941475cc46f1ed9f.jfif";

function HomePage() {
  return (
    <div className="bg-center bg-cover h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="container mx-auto homeHight flex justify-center items-center">
        <div className="text-center px-4 mb-60">
          <h1 className="main-header text-white font-bold text-4xl sm:text-5xl lg:text-7xl mb-6">Egytraveler your best way</h1>
          <p className="font-bold text-accent text-lg">Your best way to have good time in Egypt</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
