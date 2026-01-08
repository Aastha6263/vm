export default function Registration() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />

        <button className="btn-primary mt-4">
          Register
        </button>
      </div>
    </div>
  );
}
