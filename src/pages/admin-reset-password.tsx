import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Lock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { apiRequest } from "../lib/api";

export default function AdminResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = useMemo(() => searchParams.get("token") || "", [searchParams]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!token.trim()) {
      toast.error("Reset token is missing.");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      toast.success("Password reset successful", {
        description: "You can now sign in with the new password.",
      });
      navigate("/admin/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Reset failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <form
          onSubmit={handleResetPassword}
          className="w-full border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Admin Security
              </span>
              <h1 className="mt-2 text-3xl font-bold">Reset password</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Enter a new password for your EmmaTech admin account.
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>

          {!token && (
            <div className="mb-5 border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-800">
              This reset link is missing a token. Request a new reset link from
              the login page.
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label
                htmlFor="new-password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                New password
              </label>
              <input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                placeholder="New strong password"
                className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm new password"
                className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !token}
              className="flex w-full items-center justify-center gap-2 bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600"
            >
              <Lock className="h-5 w-5" />
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </div>

          <Link
            to="/admin/login"
            className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Back to admin login
          </Link>
        </form>
      </section>
    </main>
  );
}
