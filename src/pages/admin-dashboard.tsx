import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Inbox,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  UploadCloud,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { API_URL, apiRequest } from "../lib/api";

type AdminView =
  | "overview"
  | "contacts"
  | "quotes"
  | "bookings"
  | "support"
  | "files"
  | "settings";

type AdminRecord = {
  id: string;
  type: string;
  name: string;
  email: string;
  subject: string;
  service?: string;
  date: string;
  status: string;
  source: string;
  attachment?: string;
  fileUrl?: string;
  raw: AdminApiItem;
};

type AdminApiItem = Record<string, unknown>;
type AdminApiResponse = Record<string, unknown>;
type DashboardStats = Record<string, unknown>;

const navigation = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "contacts", label: "Contacts", icon: MessageSquare },
  { id: "quotes", label: "Quotes", icon: FileText },
  { id: "bookings", label: "Bookings", icon: CalendarDays },
  { id: "support", label: "Support", icon: Inbox },
  { id: "files", label: "Files", icon: UploadCloud },
  { id: "settings", label: "Settings", icon: Settings },
] satisfies Array<{ id: AdminView; label: string; icon: typeof LayoutDashboard }>;

const statusStyles: Record<string, string> = {
  new: "border-blue-200 bg-blue-50 text-blue-700",
  reviewed: "border-amber-200 bg-amber-50 text-amber-700",
  contacted: "border-violet-200 bg-violet-50 text-violet-700",
  confirmed: "border-violet-200 bg-violet-50 text-violet-700",
  in_progress: "border-amber-200 bg-amber-50 text-amber-700",
  resolved: "border-emerald-200 bg-emerald-50 text-emerald-700",
  completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  closed: "border-slate-200 bg-slate-50 text-slate-700",
  archived: "border-slate-200 bg-slate-50 text-slate-700",
  cancelled: "border-red-200 bg-red-50 text-red-700",
  rescheduled: "border-cyan-200 bg-cyan-50 text-cyan-700",
};

const endpointByView: Partial<Record<AdminView, string>> = {
  contacts: "/api/admin/contacts",
  quotes: "/api/admin/quotes",
  bookings: "/api/admin/bookings",
  support: "/api/admin/support",
  files: "/api/admin/quotes",
};

const listKeys = [
  "contacts",
  "quotes",
  "bookings",
  "support",
  "tickets",
  "requests",
  "recent",
  "items",
  "data",
];

const statusOptionsByType: Record<string, string[]> = {
  Contact: ["new", "reviewed", "contacted", "completed", "archived"],
  Quote: ["new", "reviewed", "contacted", "completed", "archived"],
  Booking: ["new", "confirmed", "rescheduled", "completed", "cancelled"],
  Support: ["new", "in_progress", "resolved", "closed"],
};

const getString = (item: AdminApiItem, keys: string[], fallback = "") => {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === "string" && value.trim()) return value;
    if (typeof value === "number") return String(value);
  }

  return fallback;
};

const formatStatusLabel = (status: string) =>
  status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const extractItems = (data: AdminApiResponse, keys: string[]) => {
  for (const key of keys) {
    const value = data[key];
    if (Array.isArray(value)) return value as AdminApiItem[];
  }

  return [];
};

const normalizeRecord = (item: AdminApiItem, type: string): AdminRecord => {
  const id = getString(item, ["_id", "id"]);
  const file = item.file;
  const attachment =
    getString(item, ["fileName", "filename", "attachment"]) ||
    (typeof file === "object" && file !== null
      ? getString(file as AdminApiItem, ["originalName", "filename", "name"])
      : "");

  return {
    id,
    type,
    name: getString(item, ["name", "fullName"], "Unknown"),
    email: getString(item, ["email"]),
    subject: getString(
      item,
      ["subject", "projectDescription", "message", "service", "category"],
      "Request",
    ),
    service: getString(item, ["service", "category"]),
    date: getString(item, ["createdAt", "preferredDate", "date", "updatedAt"]),
  status: getString(item, ["status"], "new"),
    source: `${type} API`,
    attachment: attachment || undefined,
    fileUrl: type === "Quote" && id ? `${API_URL}/api/admin/quotes/${id}/file` : undefined,
    raw: item,
  };
};

const countByType = (records: AdminRecord[], type: string) =>
  records.filter((record) => record.type === type).length;

const escapeCsvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;

const exportRecords = (records: AdminRecord[], title: string) => {
  if (records.length === 0) {
    toast.error("There are no records to export.");
    return;
  }

  const rows = [
    ["ID", "Type", "Name", "Email", "Subject", "Service", "Status", "Date", "Attachment"],
    ...records.map((record) => [
      record.id,
      record.type,
      record.name,
      record.email,
      record.subject,
      record.service || "",
      formatStatusLabel(record.status),
      record.date,
      record.attachment || "",
    ]),
  ];
  const csv = rows
    .map((row) => row.map((cell) => escapeCsvCell(String(cell))).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${title.toLowerCase().replace(/\s+/g, "-")}-export.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast.success("Export downloaded");
};

const filterRecords = (view: AdminView, query: string, records: AdminRecord[]) => {
  const byView = records.filter((record) => {
    if (view === "contacts") return record.type === "Contact";
    if (view === "quotes") return record.type === "Quote";
    if (view === "bookings") return record.type === "Booking";
    if (view === "support") return record.type === "Support";
    if (view === "files") return Boolean(record.attachment);
    return true;
  });

  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return byView;

  return byView.filter((record) =>
    [
      record.id,
      record.type,
      record.name,
      record.email,
      record.subject,
      record.service || "",
      record.source,
      record.status,
      record.attachment || "",
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery),
  );
};

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<AdminView>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState<AdminRecord[]>([]);
  const [statsData, setStatsData] = useState<DashboardStats>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState<AdminRecord | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin/login", { replace: true });
      return;
    }

    apiRequest("/api/auth/me").catch(() => {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
      navigate("/admin/login", { replace: true });
    });
  }, [navigate]);

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) return;
    if (activeView === "settings") return;

    const loadDashboardData = async () => {
      setIsLoading(true);

      try {
        if (activeView === "overview") {
          const [
            statsResponse,
            contactsResponse,
            quotesResponse,
            bookingsResponse,
            supportResponse,
          ] = await Promise.all([
            apiRequest<AdminApiResponse>("/api/admin/dashboard/stats"),
            apiRequest<AdminApiResponse>("/api/admin/contacts"),
            apiRequest<AdminApiResponse>("/api/admin/quotes"),
            apiRequest<AdminApiResponse>("/api/admin/bookings"),
            apiRequest<AdminApiResponse>("/api/admin/support"),
          ]);
          const allRecords = [
            ...extractItems(contactsResponse, listKeys).map((item) =>
              normalizeRecord(item, "Contact"),
            ),
            ...extractItems(quotesResponse, listKeys).map((item) =>
              normalizeRecord(item, "Quote"),
            ),
            ...extractItems(bookingsResponse, listKeys).map((item) =>
              normalizeRecord(item, "Booking"),
            ),
            ...extractItems(supportResponse, listKeys).map((item) =>
              normalizeRecord(item, "Support"),
            ),
          ];

          setStatsData(statsResponse);
          setRecords(allRecords);
          return;
        }

        const endpoint = endpointByView[activeView];
        if (!endpoint) return;

        const response = await apiRequest<AdminApiResponse>(endpoint);
        const type =
          activeView === "contacts"
            ? "Contact"
            : activeView === "quotes" || activeView === "files"
              ? "Quote"
              : activeView === "bookings"
                ? "Booking"
                : activeView === "support"
                  ? "Support"
                  : "Request";
        const items = extractItems(response, [activeView, ...listKeys]);

        setRecords(items.map((item) => normalizeRecord(item, type)));
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to load admin data");
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, [activeView]);

  const activeTitle =
    navigation.find((item) => item.id === activeView)?.label || "Overview";

  const visibleRecords = useMemo(
    () => filterRecords(activeView, query, records),
    [activeView, query, records],
  );

  const notificationRecords = useMemo(
    () =>
      records
        .filter((record) => record.status === "new")
        .sort((first, second) => second.date.localeCompare(first.date)),
    [records],
  );

  const getStatValue = (keys: string[], fallback: number) => {
    for (const key of keys) {
      const value = statsData[key];
      if (typeof value === "number") return value;
      if (typeof value === "string" && !Number.isNaN(Number(value))) {
        return Number(value);
      }
    }

    return fallback;
  };

  const stats = [
    {
      label: "Contacts",
      value: getStatValue(
        ["contacts", "totalContacts"],
        countByType(records, "Contact"),
      ),
      note: "General messages",
      icon: MessageSquare,
      view: "contacts" as AdminView,
    },
    {
      label: "Quotes",
      value: getStatValue(
        ["quotes", "quoteLeads", "totalQuotes"],
        countByType(records, "Quote"),
      ),
      note: "Sales pipeline",
      icon: FileText,
      view: "quotes" as AdminView,
    },
    {
      label: "Bookings",
      value: getStatValue(
        ["bookings", "totalBookings"],
        countByType(records, "Booking"),
      ),
      note: "Call requests",
      icon: CalendarDays,
      view: "bookings" as AdminView,
    },
    {
      label: "Support",
      value: getStatValue(
        ["support", "tickets", "totalSupport"],
        countByType(records, "Support"),
      ),
      note: "Help tickets",
      icon: Inbox,
      view: "support" as AdminView,
    },
  ];

  const updateRecordStatus = async (record: AdminRecord, status: string) => {
    const endpoint =
      record.type === "Contact"
        ? `/api/admin/contacts/${record.id}/status`
        : record.type === "Quote"
          ? `/api/admin/quotes/${record.id}/status`
          : record.type === "Booking"
            ? `/api/admin/bookings/${record.id}/status`
            : record.type === "Support"
              ? `/api/admin/support/${record.id}/status`
              : "";

    if (!endpoint) return;

    try {
      await apiRequest(endpoint, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      setRecords((current) =>
        current.map((item) =>
          item.id === record.id && item.type === record.type
            ? { ...item, status }
            : item,
        ),
      );
      toast.success("Status updated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Status update failed");
    }
  };

  const downloadQuoteFile = async (record: AdminRecord) => {
    if (record.type !== "Quote" || !record.fileUrl) return;

    try {
      const response = await fetch(record.fileUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken") || ""}`,
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          typeof data.message === "string" ? data.message : "Download failed",
        );
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = record.attachment || "quote-file";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Download failed");
    }
  };

  const handleSignOutRequest = () => {
    toast("Sign out of admin?", {
      description: "Your admin token will be removed from this browser.",
      action: {
        label: "Sign out",
        onClick: () => {
          apiRequest("/api/auth/logout", { method: "POST" }).catch(() => undefined);
          localStorage.removeItem("adminToken");
          localStorage.removeItem("admin");
          toast.success("Signed out successfully");
          navigate("/admin/login");
        },
      },
    });
  };

  return (
    <main className="grid h-screen grid-cols-1 overflow-hidden bg-slate-100 text-slate-950 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center bg-slate-950 text-white shadow-xl lg:hidden"
        aria-label="Open admin navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {sidebarOpen && (
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
          aria-label="Close admin navigation overlay"
        />
      )}

      <AdminSidebar
        activeView={activeView}
        setActiveView={(view) => {
          setActiveView(view);
          setSidebarOpen(false);
        }}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSignOut={handleSignOutRequest}
      />

      <section className="min-w-0 overflow-y-auto">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="pl-12 lg:pl-0">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span>Admin</span>
                <ChevronRight className="h-4 w-4" />
                <span>{activeTitle}</span>
              </div>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                {activeTitle}
              </h1>
            </div>

            <div className="flex items-center gap-3 xl:w-auto">
              <div className="flex min-w-0 flex-1 items-center gap-3 border border-slate-200 bg-slate-50 px-4 py-3 xl:w-96">
                <Search className="h-5 w-5 flex-shrink-0 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search records"
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationsOpen((current) => !current)}
                  className="relative flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-slate-600 hover:text-blue-600"
                  aria-label="Open notifications"
                >
                  <Bell className="h-5 w-5" />
                  {notificationRecords.length > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center bg-red-600 px-1 text-[11px] font-bold text-white">
                      {notificationRecords.length}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 top-14 z-50 w-[min(20rem,calc(100vw-2rem))] border border-slate-200 bg-white shadow-2xl">
                    <div className="border-b border-slate-100 p-4">
                      <p className="font-bold text-slate-950">Notifications</p>
                      <p className="mt-1 text-sm text-slate-500">
                        New client activity that needs attention.
                      </p>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {notificationRecords.length === 0 && (
                        <div className="p-4 text-sm text-slate-500">
                          No new notifications right now.
                        </div>
                      )}

                      {notificationRecords.map((record) => (
                        <button
                          key={`${record.type}-${record.id}`}
                          type="button"
                          onClick={() => {
                            setSelectedRecord(record);
                            setNotificationsOpen(false);
                          }}
                          className="block w-full border-b border-slate-100 p-4 text-left hover:bg-blue-50"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                              New {record.type}
                            </p>
                            <p className="text-xs text-slate-400">
                              {record.date || "No date"}
                            </p>
                          </div>
                          <p className="mt-1 truncate font-semibold text-slate-900">
                            {record.name}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                            {record.subject}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6 p-4 sm:p-6 lg:p-8">
          {activeView === "overview" && (
            <div className="space-y-6">
              <section className="grid gap-5 bg-slate-950 p-5 text-white shadow-sm lg:grid-cols-[1fr_320px] lg:p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Operations snapshot
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Manage requests before they slow the team down.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    Contacts, quotes, bookings, support, and files are arranged
                    in one backend-ready workspace.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Total records</p>
                    <p className="mt-2 text-3xl font-bold">
                      {getStatValue(["total", "totalRequests"], records.length)}
                    </p>
                  </div>
                  <div className="bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Open items</p>
                    <p className="mt-2 text-3xl font-bold">
                      {
                        records.filter((item) => item.status !== "completed")
                          .length
                      }
                    </p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <button
                      key={stat.label}
                      type="button"
                      onClick={() => setActiveView(stat.view)}
                      className="border border-slate-200 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-emerald-600">
                          Ready
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-500">{stat.note}</p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <RequestTable
                  records={visibleRecords}
                  title={activeTitle}
                  isLoading={isLoading}
                  onStatusChange={async (record, status) => {
                    await updateRecordStatus(record, status);
                  }}
                  onDownloadFile={downloadQuoteFile}
                  onOpenRecord={setSelectedRecord}
                  onExport={() => exportRecords(visibleRecords, activeTitle)}
                />
                <AdminNotes />
              </div>
            </div>
          )}

          {activeView !== "overview" && activeView !== "settings" && (
            <RequestTable
              records={visibleRecords}
              title={activeTitle}
              isLoading={isLoading}
              onStatusChange={async (record, status) => {
                await updateRecordStatus(record, status);
              }}
              onDownloadFile={downloadQuoteFile}
              onOpenRecord={setSelectedRecord}
              onExport={() => exportRecords(visibleRecords, activeTitle)}
            />
          )}

          {activeView === "settings" && <SettingsPanel />}
        </div>
      </section>
      {selectedRecord && (
        <RecordDetailsPanel
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
          onDownloadFile={downloadQuoteFile}
        />
      )}
    </main>
  );
}

type SidebarProps = {
  activeView: AdminView;
  setActiveView: (view: AdminView) => void;
  sidebarOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
};

const AdminSidebar = ({
  activeView,
  setActiveView,
  sidebarOpen,
  onClose,
  onSignOut,
}: SidebarProps) => {
  const content = (showClose: boolean) => (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="EmmaTech"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">EmmaTech</h2>
              <p className="text-xs text-slate-400">Admin Console</p>
            </div>
          </div>
          {showClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center bg-white/10"
              aria-label="Close admin navigation"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="mt-6 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Workspace
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Client Operations
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = activeView === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveView(item.id)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3 px-4 py-3 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden h-screen bg-slate-950 text-white lg:block">
        {content(false)}
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {content(true)}
      </aside>
    </>
  );
};

const RequestTable = ({
  records,
  title,
  isLoading,
  onStatusChange,
  onDownloadFile,
  onOpenRecord,
  onExport,
}: {
  records: AdminRecord[];
  title: string;
  isLoading: boolean;
  onStatusChange: (record: AdminRecord, status: string) => Promise<void>;
  onDownloadFile: (record: AdminRecord) => Promise<void>;
  onOpenRecord: (record: AdminRecord) => void;
  onExport: () => void;
}) => (
  <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
    <div className="flex flex-col gap-4 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <h2 className="text-xl font-bold">{title} Inbox</h2>
        <p className="mt-1 text-sm text-slate-500">
          Backend-ready records for contacts, quotes, bookings, and support.
        </p>
      </div>
      <button
        type="button"
        onClick={onExport}
        className="inline-flex w-full items-center justify-center gap-2 bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 sm:w-auto"
      >
        <Download className="h-4 w-4" />
        Export
      </button>
    </div>

    {isLoading && (
      <div className="p-6 text-center">
        <p className="font-semibold text-slate-800">Loading records...</p>
        <p className="mt-1 text-sm text-slate-500">
          Pulling the latest admin data from the backend.
        </p>
      </div>
    )}

    {!isLoading && records.length === 0 && (
      <div className="p-6 text-center">
        <p className="font-semibold text-slate-800">No records found</p>
        <p className="mt-1 text-sm text-slate-500">
          Try another search term or check a different admin section.
        </p>
      </div>
    )}

    {!isLoading && records.length > 0 && (
      <div className="space-y-4 p-4 md:hidden">
        {records.map((record) => (
          <article
            key={record.id}
            className="border border-slate-200 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <button
                type="button"
                onClick={() => onOpenRecord(record)}
                className="min-w-0 text-left"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {record.id}
                </p>
                <h3 className="mt-1 truncate text-base font-bold text-slate-950">
                  {record.name}
                </h3>
                <p className="truncate text-sm text-slate-500">
                  {record.email}
                </p>
              </button>
              <span
                className={`flex-shrink-0 border px-3 py-1 text-xs font-semibold ${
                  statusStyles[record.status] ||
                  "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                {formatStatusLabel(record.status)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onOpenRecord(record)}
              className="mt-4 block w-full space-y-3 text-left text-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Subject
                </p>
                <p className="mt-1 font-medium text-slate-800">
                  {record.subject}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Source
                  </p>
                  <p className="mt-1 text-slate-700">{record.source}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Date
                  </p>
                  <p className="mt-1 text-slate-700">{record.date}</p>
                </div>
              </div>
            </button>

              {record.attachment && (
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Attachment
                  </p>
                  <p className="mt-1 break-words font-medium text-blue-600">
                    {record.fileUrl ? (
                      <button
                        type="button"
                        onClick={() => onDownloadFile(record)}
                        className="hover:underline"
                      >
                        {record.attachment}
                      </button>
                    ) : (
                      record.attachment
                    )}
                  </p>
                </div>
              )}
              {statusOptionsByType[record.type] && (
                <select
                  value={record.status}
                  onChange={(event) =>
                    onStatusChange(record, event.target.value)
                  }
                  className="w-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {statusOptionsByType[record.type].map((status) => (
                    <option key={status} value={status}>
                      {formatStatusLabel(status)}
                    </option>
                  ))}
                </select>
              )}
          </article>
        ))}
      </div>
    )}

    {!isLoading && records.length > 0 && (
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Client</th>
              <th className="px-6 py-4 font-semibold">Subject</th>
              <th className="px-6 py-4 font-semibold">Source</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-blue-50/40">
                <td className="px-6 py-5 font-semibold">
                  <button
                    type="button"
                    onClick={() => onOpenRecord(record)}
                    className="text-left hover:text-blue-600"
                  >
                    {record.id}
                  </button>
                </td>
                <td className="px-6 py-5">
                  <button
                    type="button"
                    onClick={() => onOpenRecord(record)}
                    className="text-left"
                  >
                    <p className="font-semibold hover:text-blue-600">{record.name}</p>
                    <p className="text-sm text-slate-500">{record.email}</p>
                  </button>
                </td>
                <td className="px-6 py-5">
                  <button
                    type="button"
                    onClick={() => onOpenRecord(record)}
                    className="text-left"
                  >
                    <p className="font-medium hover:text-blue-600">{record.subject}</p>
                  </button>
                  {record.attachment && (
                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {record.fileUrl ? (
                        <button
                          type="button"
                          onClick={() => onDownloadFile(record)}
                          className="hover:underline"
                        >
                          {record.attachment}
                        </button>
                      ) : (
                        record.attachment
                      )}
                    </p>
                  )}
                </td>
                <td className="px-6 py-5 text-slate-600">{record.source}</td>
                <td className="px-6 py-5">
                  {statusOptionsByType[record.type] ? (
                    <select
                      value={record.status}
                      onChange={(event) =>
                        onStatusChange(record, event.target.value)
                      }
                      className={`border px-3 py-1 text-xs font-semibold ${
                        statusStyles[record.status] ||
                        "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {statusOptionsByType[record.type].map((status) => (
                        <option key={status} value={status}>
                          {formatStatusLabel(status)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      className={`border px-3 py-1 text-xs font-semibold ${
                        statusStyles[record.status] ||
                        "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {formatStatusLabel(record.status)}
                    </span>
                  )}
                </td>
                <td className="px-6 py-5 text-slate-600">{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

const formatDetailValue = (value: unknown) => {
  if (value === null || value === undefined || value === "") return "Not provided";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return JSON.stringify(value, null, 2);
};

const RecordDetailsPanel = ({
  record,
  onClose,
  onDownloadFile,
}: {
  record: AdminRecord;
  onClose: () => void;
  onDownloadFile: (record: AdminRecord) => Promise<void>;
}) => {
  const detailEntries = Object.entries(record.raw).filter(
    ([, value]) => value !== undefined && value !== null && value !== "",
  );

  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-slate-950/45">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close details"
      />
      <aside className="relative z-[91] flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl">
        <header className="border-b border-slate-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {record.type} Details
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                {record.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{record.email}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 hover:text-blue-600"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          <section className="grid gap-3 sm:grid-cols-2">
            {[
              ["ID", record.id],
              ["Status", formatStatusLabel(record.status)],
              ["Service", record.service || "Not provided"],
              ["Date", record.date || "Not provided"],
              ["Source", record.source],
              ["Attachment", record.attachment || "No attachment"],
            ].map(([label, value]) => (
              <div key={label} className="border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {label}
                </p>
                <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                  {value}
                </p>
              </div>
            ))}
          </section>

          <section className="border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Subject / Message
            </p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
              {record.subject}
            </p>
          </section>

          {record.fileUrl && (
            <button
              type="button"
              onClick={() => onDownloadFile(record)}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download Attachment
            </button>
          )}

          <section>
            <h3 className="mb-3 text-lg font-bold text-slate-950">
              Full submitted details
            </h3>
            <div className="divide-y divide-slate-100 border border-slate-200">
              {detailEntries.length === 0 && (
                <p className="p-4 text-sm text-slate-500">
                  No extra details were returned by the backend.
                </p>
              )}
              {detailEntries.map(([key, value]) => (
                <div key={key} className="grid gap-2 p-4 sm:grid-cols-[180px_1fr]">
                  <p className="break-words text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {key}
                  </p>
                  <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-slate-800">
                    {formatDetailValue(value)}
                  </pre>
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
};

const AdminNotes = () => (
  <aside className="border border-slate-200 bg-white p-6 shadow-sm">
    <ShieldCheck className="mb-5 h-8 w-8 text-blue-600" />
    <h2 className="text-xl font-bold">Backend connection plan</h2>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">
      This admin UI is ready for API data, authentication, file storage, and
      email notifications.
    </p>
    <div className="mt-6 space-y-3">
      {[
        "JWT or Supabase Auth",
        "Contacts and quote API",
        "Booking request API",
        "File download permissions",
        "Request status updates",
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 border border-slate-100 bg-slate-50 p-3"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
          <span className="text-sm text-slate-700">{item}</span>
        </div>
      ))}
    </div>
  </aside>
);

const SettingsPanel = () => (
  <section className="space-y-6">
    <div className="border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Admin Settings
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Console configuration
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Frontend settings that help admins understand the current connected
            system.
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white">
          <Settings className="h-6 w-6" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <article className="border border-slate-200 bg-white p-6 shadow-sm">
        <ShieldCheck className="mb-5 h-8 w-8 text-blue-600" />
        <h3 className="text-xl font-bold">Authentication</h3>
        <div className="mt-5 space-y-3 text-sm">
          <SettingRow label="Auth method" value="JWT Bearer token" />
          <SettingRow label="Token storage" value="localStorage adminToken" />
          <SettingRow label="Current status" value="Protected admin routes" />
        </div>
      </article>

      <ChangePasswordCard />

      <article className="border border-slate-200 bg-white p-6 shadow-sm">
        <Mail className="mb-5 h-8 w-8 text-blue-600" />
        <h3 className="text-xl font-bold">Request Channels</h3>
        <div className="mt-5 space-y-3 text-sm">
          <SettingRow label="Contact" value="/api/admin/contacts" />
          <SettingRow label="Quotes" value="/api/admin/quotes" />
          <SettingRow label="Bookings" value="/api/admin/bookings" />
          <SettingRow label="Support" value="/api/admin/support" />
        </div>
      </article>

      <article className="border border-slate-200 bg-white p-6 shadow-sm">
        <UploadCloud className="mb-5 h-8 w-8 text-blue-600" />
        <h3 className="text-xl font-bold">Quote Files</h3>
        <div className="mt-5 space-y-3 text-sm">
          <SettingRow label="Allowed uploads" value="pdf, doc, docx, png, jpg, jpeg, zip" />
          <SettingRow label="Max file size" value="10MB" />
          <SettingRow label="Download auth" value="Admin JWT required" />
        </div>
      </article>

      <article className="border border-slate-200 bg-white p-6 shadow-sm">
        <Users className="mb-5 h-8 w-8 text-blue-600" />
        <h3 className="text-xl font-bold">Admin Workflow</h3>
        <div className="mt-5 space-y-3 text-sm">
          <SettingRow label="Notifications" value="New records appear in the bell menu" />
          <SettingRow label="Exports" value="CSV download per active section" />
          <SettingRow label="Details" value="Click any record to inspect full data" />
        </div>
      </article>
    </div>
  </section>
);

const ChangePasswordCard = () => {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordChange = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!passwordForm.currentPassword.trim() || !passwordForm.newPassword.trim()) {
      toast.error("Enter current password and new password.");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("/api/auth/password", {
        method: "PATCH",
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      toast.success("Password updated", {
        description: "Use the new password the next time you sign in.",
      });
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Password update failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handlePasswordChange}
      className="border border-slate-200 bg-white p-6 shadow-sm"
    >
      <Lock className="mb-5 h-8 w-8 text-blue-600" />
      <h3 className="text-xl font-bold">Change Password</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Update the signed-in admin password without using an email reset link.
      </p>

      <div className="mt-5 space-y-4">
        <PasswordInput
          id="current-password"
          label="Current password"
          value={passwordForm.currentPassword}
          onChange={(value) =>
            setPasswordForm((current) => ({
              ...current,
              currentPassword: value,
            }))
          }
          placeholder="Old password"
        />
        <PasswordInput
          id="settings-new-password"
          label="New password"
          value={passwordForm.newPassword}
          onChange={(value) =>
            setPasswordForm((current) => ({
              ...current,
              newPassword: value,
            }))
          }
          placeholder="New strong password"
        />
        <PasswordInput
          id="settings-confirm-password"
          label="Confirm new password"
          value={passwordForm.confirmPassword}
          onChange={(value) =>
            setPasswordForm((current) => ({
              ...current,
              confirmPassword: value,
            }))
          }
          placeholder="Confirm new password"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600"
      >
        {isSubmitting ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
};

const PasswordInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <input
      id={id}
      type="password"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-colors focus:border-blue-600 focus:bg-white"
    />
  </div>
);

const SettingRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1 border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
    <span className="font-semibold text-slate-600">{label}</span>
    <span className="break-words text-slate-950 sm:text-right">{value}</span>
  </div>
);
