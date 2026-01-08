export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          className="w-full mb-3 px-3 py-2 border rounded"
          placeholder="Email"
        />

        <input
          className="w-full mb-3 px-3 py-2 border rounded"
          type="password"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}
