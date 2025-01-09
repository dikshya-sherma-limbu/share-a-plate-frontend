import Header from "../components/Header";
const Homepage = () => {
  return (
    <div className="bg-lightGreen flex flex-col  h-screen">
      <Header />
      <main className="flex flex-col items-center">
        <p className="text-darkGreen mb-4">
          Share your meals with the community.
        </p>
        <button className="mt-4 rounded-lg bg-darkGreen text-lightGreen p-2">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Homepage;
