import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Home,
  Mail,
} from "lucide-react";

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-950">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <CalendarCheck className="h-8 w-8" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Booking Scheduled
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Your call has been scheduled.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Thank you for choosing a call time with EmmaTech. Please check
                your email for the calendar invite, meeting details, and any
                reminders from Calendly.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Calendar invite sent",
                  "Meeting details included",
                  "Reminders handled by Calendly",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-slate-100 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-blue-100 bg-blue-50 p-5 lg:w-72">
              <Mail className="mb-4 h-7 w-7 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-950">
                What happens next?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                EmmaTech will review your request before the call so the
                conversation can focus on your goals and next steps.
              </p>
            </aside>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-700"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
