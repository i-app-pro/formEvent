import LoginForm from "./pages/LoginForm";
import AccountRegisterForm from "./components/organisms/AccountRegisterForm";
import EventRegistrationForm from "./components/organisms/EventRegistrationForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#991b1b] text-center mb-12">
          Invofest Portal
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom 1: Login */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#991b1b]">
            <h2 className="text-xl font-bold mb-6 text-[#991b1b]">Masuk</h2>
            <LoginForm />
          </div>

          {/* Kolom 2: Registrasi Akun */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#991b1b]">
            <h2 className="text-xl font-bold mb-6 text-[#991b1b]">Daftar Akun Baru</h2>
            <AccountRegisterForm />
          </div>

          {/* Kolom 3: Registrasi Event */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#991b1b]">
            <h2 className="text-xl font-bold mb-6 text-[#991b1b]">Pendaftaran Event</h2>
            <EventRegistrationForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;