import PageBanner from "../Components/PageBanner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Wishlist = () => {
  return (
    <div className=" w-full mx-auto mt-12">
      <Navbar />

      {/* Banner Section */}
      <PageBanner title="Wish List" />

      {/* Wishlist Section */}
      <div className="bg-white m-auto mt-10 max-w-4xl rounded shadow-md overflow-hidden mb-5">
        {/* For small screens */}
        <div className="md:hidden flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-4 bg-white border-b last:border-0 hover:bg-gray-50 transition p-4 rounded">
            <div className="w-24">
              <img
                src="/ggg-600x720.jpg"
                alt="Rozana nightstand"
                className="w-full object-cover rounded"
              />
            </div>
            <div className="flex-grow">
              <span className="font-medium text-gray-700 ">
                Rozana nightstand
              </span>
              <div className="text-sm text-gray-600 mt-1">Price: 7,900EGP</div>
              <div className="text-sm text-gray-600 mt-1">
                Stock Status: In stock
              </div>
              <div className="mt-2">
                <button className="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800">
                  Add to cart
                </button>
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-500 transition">
              &#10005;
            </button>
          </div>
        </div>

        {/* For medium screens and above */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white border-collapse text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="w-12 py-4 text-gray-600"></th>
                <th className="w-18 py-4 text-gray-600"></th>
                <th className="py-4 text-gray-600  font-semibold text-left">
                  Product
                </th>
                <th className="py-4 text-gray-600 font-semibold text-center">
                  Price
                </th>
                <th className="py-4 text-gray-600 font-semibold text-center">
                  Stock Status
                </th>
                <th className="py-4 text-gray-600 font-semibold text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0 hover:bg-gray-50 transition">
                <td className="text-center py-4">
                  <button className="text-gray-600 hover:text-red-500 transition">
                    &#10005;
                  </button>
                </td>
                <td className="py-4">
                  <img
                    src="/ggg-600x720.jpg"
                    alt="Rozana nightstand"
                    className="w-16 object-cover rounded"
                  />
                </td>
                <td className="py-4">
                  <span className="font-medium text-gray-700">
                    Rozana nightstand
                  </span>
                </td>
                <td className="text-center text-gray-600">7,900EGP</td>
                <td className="text-center text-gray-600">In stock</td>
                <td className="text-center">
                  <button className="bg-black text-white py-2 px-4 rounded shadow  hover:bg-[#B48E61]">
                    Add to cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
