import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { apiRequest } from "../lib/api";

type LoginResponse = {
  token: string;
  admin: unknown;
};

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isForgotSubmitting, setIsForgotSubmitting] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!loginData.email.trim() || !loginData.password.trim()) {
      toast.error("Enter admin email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await apiRequest<LoginResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginData.email.trim(),
          password: loginData.password,
        }),
      });

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      toast.success("Admin access granted");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error("Enter the admin email address.");
      return;
    }

    setIsForgotSubmitting(true);

    try {
      await apiRequest("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email: forgotEmail.trim() }),
      });

      toast.success("Reset email sent", {
        description: "Check the admin inbox for the password reset link.",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Request failed");
    } finally {
      setIsForgotSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-8 lg:px-10">
        <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-2xl lg:min-h-[700px] lg:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-slate-950 p-6 text-white sm:p-10 lg:flex lg:p-12 xl:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_90%_70%,rgba(34,211,238,0.14),transparent_32%)]" />

            <div className="relative flex h-full flex-col justify-between gap-12">
              <div>
                <div className="mb-10 flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt="EmmaTech"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">EmmaTech Admin</h1>
                    <p className="text-sm text-blue-100">Secure operations</p>
                  </div>
                </div>

                <span className="inline-flex bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                  Built for EmmaTech workflow
                </span>
                <h2 className="mt-7 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                  Keep every client request clear, organized, and ready.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
                  Review messages, quotes, bookings, support needs, and files
                  from one calm workspace built for daily operations.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {["Protected access", "Client records", "Team visibility"].map(
                  (item) => (
                    <div key={item} className="bg-white/8 p-4 backdrop-blur">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-blue-300" />
                      <p className="text-sm font-semibold">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleLogin}
            className="flex w-full flex-col justify-center bg-slate-50 p-6 text-slate-950 sm:p-10 lg:p-12 xl:p-16"
          >
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Admin Login
                  </span>
                  <h2 className="mt-2 text-3xl font-bold text-slate-950">
                    Welcome back
                  </h2>
                  <p className="mt-3 text-slate-600">
                    Sign in to manage EmmaTech operations.
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="admin-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="admin-email"
                    type="email"
                    value={loginData.email}
                    onChange={(event) =>
                      setLoginData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="admin@emmatech.com"
                    className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="admin-password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="admin-password"
                    type="password"
                    value={loginData.password}
                    onChange={(event) =>
                      setLoginData((current) => ({
                        ...current,
                        password: event.target.value,
                      }))
                    }
                    placeholder="Enter password"
                    className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowForgotPassword((current) => !current)}
                className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                {showForgotPassword ? "Back to sign in" : "Forgot password?"}
              </button>

              {showForgotPassword && (
                <form
                  onSubmit={handleForgotPassword}
                  className="mt-5 border border-slate-200 bg-white p-4"
                >
                  <label
                    htmlFor="forgot-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Admin email
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    value={forgotEmail}
                    onChange={(event) => setForgotEmail(event.target.value)}
                    placeholder="admin@emmatech.com"
                    className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                  />
                  <button
                    type="submit"
                    disabled={isForgotSubmitting}
                    className="mt-3 w-full bg-slate-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-60 disabled:hover:bg-slate-950"
                  >
                    {isForgotSubmitting ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>
              )}

              <div className="mt-6 flex gap-3 border border-blue-100 bg-blue-50 p-4">
                <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <p className="text-sm leading-relaxed text-slate-700">
                  Use your seeded admin account to access protected dashboard
                  data.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
