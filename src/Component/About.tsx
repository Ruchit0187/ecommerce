export default function About() {
  return (
    <div className="">
      <div className=" p-6 md:p-10 md-5 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Overview of an eCommerce Website
        </h2>
        <p className="text-gray-600 mb-6">
          An eCommerce website is an online platform that allows businesses and
          individuals to buy and sell goods or services over the internet. It
          includes product listings, a shopping cart, secure payments, and order
          management systems.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Core Sections
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>
            <span className="font-medium text-gray-800">Home Page:</span>{" "}
            Highlights promotions, featured products, and categories.
          </li>
          <li>
            <span className="font-medium text-gray-800">Shopping Cart:</span>{" "}
            Shows selected items and total cost before checkout.
          </li>
          <li>
            <span className="font-medium text-gray-800">Checkout:</span>{" "}
            Collects shipping, billing, and payment information.
          </li>
          <li>
            <span className="font-medium text-gray-800">User Form:</span> Lets
            customers track orders and manage profile details.
          </li>
        </ul>

        <p className="text-gray-600 mb-6">
          The backend manages product data, inventory, orders, and users. A
          database stores all essential information such as products, orders,
          and customer details.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Key Features
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>Product management and categorization</li>
          <li>Search and filter functionality</li>
          <li>Secure payments and checkout</li>
          <li>Admin dashboard for analytics and reports</li>
          <li>Customer authentication and order tracking</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Typical Technologies
        </h3>
        <p className="text-gray-600 md-10">
          Common technologies include <span className="font-medium">HTML</span>,{" "}
          <span className="font-medium">CSS</span>, and{" "}
          <span className="font-medium">JavaScript</span> on the frontend;
          <span className="font-medium">Node.js</span>,{" "}
        </p>
      </div>
    </div>
  );
}
