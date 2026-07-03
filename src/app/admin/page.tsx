"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Lock,
  Plus,
  Trash2,
  Edit,
  Save,
  Check,
  TrendingUp,
  Settings,
  HardHat,
  Briefcase,
  FileSpreadsheet,
  LogOut
} from "lucide-react";
import {
  getProjects,
  saveProjects,
  getMachinery,
  saveMachinery,
  getServices,
  saveServices,
  initializeDatabase,
  ProjectDetail,
  MachineDetail,
  ServiceDetail
} from "@/utils/db";

export default function AdminPage() {
  const router = useRouter();
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Tab State
  const [activeTab, setActiveTab] = useState<"projects" | "machinery" | "services">("projects");

  // Local lists
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [machinery, setMachinery] = useState<MachineDetail[]>([]);
  const [services, setServices] = useState<ServiceDetail[]>([]);

  // Project Editor states
  const [editingProject, setEditingProject] = useState<ProjectDetail | null>(null);
  const [newProject, setNewProject] = useState<Partial<ProjectDetail>>({
    title: "",
    category: "construction",
    location: "",
    client: "",
    description: "",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    stats: { "Metric Name": "Value" }
  });
  const [isAddingProject, setIsAddingProject] = useState(false);

  // Machinery Editor states
  const [editingMachine, setEditingMachine] = useState<MachineDetail | null>(null);
  const [newMachine, setNewMachine] = useState<Partial<MachineDetail>>({
    name: "",
    category: "drilling",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    usage: "",
    capacity: "",
    specifications: { "Parameter": "Value" },
    features: []
  });
  const [isAddingMachine, setIsAddingMachine] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState("");

  // Load database once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setProjects(getProjects());
      setMachinery(getMachinery());
      setServices(getServices());
    }
  }, [isAuthenticated]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "sriyadadriadmin") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // --- PROJECTS HANDLERS ---
  const handleSaveNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title) return;

    const projectToAdd: ProjectDetail = {
      id: newProject.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      title: newProject.title,
      category: newProject.category || "construction",
      location: newProject.location || "",
      client: newProject.client || "",
      description: newProject.description || "",
      image: newProject.image || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      stats: newProject.stats as Record<string, string> || {}
    };

    const updated = [projectToAdd, ...projects];
    setProjects(updated);
    saveProjects(updated);
    
    // Reset form
    setNewProject({
      title: "",
      category: "construction",
      location: "",
      client: "",
      description: "",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      stats: { "Metric Name": "Value" }
    });
    setIsAddingProject(false);
    showToast("Project added successfully!");
  };

  const handleUpdateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const updated = projects.map((p) => (p.id === editingProject.id ? editingProject : p));
    setProjects(updated);
    saveProjects(updated);
    setEditingProject(null);
    showToast("Project updated successfully!");
  };

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      saveProjects(updated);
      showToast("Project deleted.");
    }
  };

  // --- MACHINERY HANDLERS ---
  const handleSaveNewMachine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMachine.name) return;

    const machineToAdd: MachineDetail = {
      id: newMachine.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: newMachine.name,
      category: newMachine.category || "drilling",
      image: newMachine.image || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      usage: newMachine.usage || "",
      capacity: newMachine.capacity || "",
      specifications: newMachine.specifications as Record<string, string> || {},
      features: newMachine.features || []
    };

    const updated = [machineToAdd, ...machinery];
    setMachinery(updated);
    saveMachinery(updated);

    // Reset
    setNewMachine({
      name: "",
      category: "drilling",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      usage: "",
      capacity: "",
      specifications: { "Parameter": "Value" },
      features: []
    });
    setIsAddingMachine(false);
    showToast("Machine added successfully!");
  };

  const handleUpdateMachine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMachine) return;

    const updated = machinery.map((m) => (m.id === editingMachine.id ? editingMachine : m));
    setMachinery(updated);
    saveMachinery(updated);
    setEditingMachine(null);
    showToast("Machine specs updated successfully!");
  };

  const handleDeleteMachine = (id: string) => {
    if (confirm("Are you sure you want to delete this machine?")) {
      const updated = machinery.filter((m) => m.id !== id);
      setMachinery(updated);
      saveMachinery(updated);
      showToast("Machine deleted.");
    }
  };

  // --- SERVICES HANDLERS ---
  const handleUpdateService = (slug: string, fields: Partial<ServiceDetail>) => {
    const updated = services.map((s) => {
      if (s.slug === slug) {
        return { ...s, ...fields };
      }
      return s;
    });
    setServices(updated);
    saveServices(updated);
    showToast("Service details saved.");
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notifier */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-50 bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-bold shadow-xl border border-amber-300 flex items-center space-x-2">
            <Check className="h-5 w-5" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* LOGIN GATEWAY SCREEN */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-amber-400" />
              <div className="text-center space-y-4 mb-8">
                <div className="bg-slate-950 border border-slate-850 p-4 rounded-full w-fit mx-auto text-amber-400">
                  <Lock className="h-8 w-8" />
                </div>
                <h1 className="text-2xl font-black text-white">Yadadri Staff Portal</h1>
                <p className="text-slate-400 text-xs">
                  Provide credentials to modify active database records.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="e.g. admin"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {loginError && (
                  <p className="text-rose-450 text-xs font-bold text-center">{loginError}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-md text-sm"
                >
                  Verify Credentials
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          /* AUTHENTICATED DASHBOARD */
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-6">
              <div>
                <h1 className="text-3xl font-black text-white">Yadadri Site Database Admin</h1>
                <p className="text-slate-400 text-sm">
                  Modify the projects, fleet specs, and service lists displayed across the site.
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white font-bold px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all text-xs"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout Portal</span>
              </button>
            </div>

            {/* Dashboard Navigation Tabs */}
            <div className="flex space-x-2 border-b border-slate-900 pb-4">
              {[
                { id: "projects", name: "Manage Projects", icon: Briefcase },
                { id: "machinery", name: "Manage Machinery", icon: Settings },
                { id: "services", name: "Manage Services", icon: HardHat },
              ].map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                      isActive
                        ? "bg-amber-400 text-slate-950 shadow-md"
                        : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800/80"
                    }`}
                  >
                    <IconComp className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: PROJECTS */}
            {activeTab === "projects" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-amber-400">
                    Projects Directory
                  </h2>
                  <button
                    onClick={() => {
                      setIsAddingProject(true);
                      setEditingProject(null);
                    }}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl flex items-center space-x-2 text-xs"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add New Project</span>
                  </button>
                </div>

                {/* Add Project Form Drawer */}
                {isAddingProject && (
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-white mb-6">Add New Project Record</h3>
                    <form onSubmit={handleSaveNewProject} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Project Title</label>
                          <input
                            type="text"
                            required
                            value={newProject.title || ""}
                            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. Hyderabad Highway Section A"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                          <select
                            value={newProject.category || "construction"}
                            onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-350 text-sm"
                          >
                            <option value="construction">Civil & Roads</option>
                            <option value="quarry">Granite Quarries</option>
                            <option value="mining">Open Cast Mining</option>
                            <option value="drilling">Drilling Sites</option>
                            <option value="blasting">Controlled Blasts</option>
                            <option value="loading">Loading Works</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Location</label>
                          <input
                            type="text"
                            required
                            value={newProject.location || ""}
                            onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. Telangana, India"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Client</label>
                          <input
                            type="text"
                            required
                            value={newProject.client || ""}
                            onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. NHAI Contracting partner"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Description</label>
                        <textarea
                          rows={3}
                          required
                          value={newProject.description || ""}
                          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          placeholder="Describe the scope of excavators, drill depth, blast rounds..."
                        />
                      </div>

                      <div className="flex space-x-3 justify-end">
                        <button
                          type="button"
                          onClick={() => setIsAddingProject(false)}
                          className="px-5 py-2.5 bg-slate-950 border border-slate-850 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white text-xs"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                        >
                          Save Project
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Edit Project Form */}
                {editingProject && (
                  <div className="bg-slate-900 border border-amber-400/20 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-white mb-6">Modify Project: {editingProject.title}</h3>
                    <form onSubmit={handleUpdateProject} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Project Title</label>
                          <input
                            type="text"
                            required
                            value={editingProject.title}
                            onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                          <select
                            value={editingProject.category}
                            onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-350 text-sm"
                          >
                            <option value="construction">Civil & Roads</option>
                            <option value="quarry">Granite Quarries</option>
                            <option value="mining">Open Cast Mining</option>
                            <option value="drilling">Drilling Sites</option>
                            <option value="blasting">Controlled Blasts</option>
                            <option value="loading">Loading Works</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Location</label>
                          <input
                            type="text"
                            required
                            value={editingProject.location}
                            onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Client</label>
                          <input
                            type="text"
                            required
                            value={editingProject.client}
                            onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Description</label>
                        <textarea
                          rows={3}
                          required
                          value={editingProject.description}
                          onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                        />
                      </div>

                      <div className="flex space-x-3 justify-end">
                        <button
                          type="button"
                          onClick={() => setEditingProject(null)}
                          className="px-5 py-2.5 bg-slate-950 border border-slate-850 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white text-xs"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                        >
                          Update Specs
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Projects List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-amber-400 text-xxs font-extrabold uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {project.category}
                          </span>
                          <div className="flex space-x-1">
                            <button
                              onClick={() => {
                                setEditingProject(project);
                                setIsAddingProject(false);
                              }}
                              className="text-slate-400 hover:text-white p-1.5 hover:bg-slate-800 rounded transition-all"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className="text-rose-400 hover:text-rose-600 p-1.5 hover:bg-slate-850 rounded transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <h4 className="text-base font-bold text-white">{project.title}</h4>
                        <p className="text-slate-500 text-xs mt-1">Client: {project.client}</p>
                        <p className="text-slate-400 text-xs mt-2 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: MACHINERY */}
            {activeTab === "machinery" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-amber-400">
                    Fleet Catalog
                  </h2>
                  <button
                    onClick={() => {
                      setIsAddingMachine(true);
                      setEditingMachine(null);
                    }}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl flex items-center space-x-2 text-xs"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add New Fleet Unit</span>
                  </button>
                </div>

                {/* Add Machine Form */}
                {isAddingMachine && (
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-white mb-6">Add New Fleet Unit</h3>
                    <form onSubmit={handleSaveNewMachine} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Machine Name</label>
                          <input
                            type="text"
                            required
                            value={newMachine.name || ""}
                            onChange={(e) => setNewMachine({ ...newMachine, name: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. Tata Hitachi Zaxis 370"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                          <select
                            value={newMachine.category || "drilling"}
                            onChange={(e) => setNewMachine({ ...newMachine, category: e.target.value as any })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-350 text-sm"
                          >
                            <option value="drilling">Drilling Rigs</option>
                            <option value="earthmoving">Earthmovers & Loaders</option>
                            <option value="mining">Mining Attachments</option>
                            <option value="logistics">Logistics Tippers</option>
                            <option value="support">Site Support</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Capacity</label>
                          <input
                            type="text"
                            required
                            value={newMachine.capacity || ""}
                            onChange={(e) => setNewMachine({ ...newMachine, capacity: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. 30 Metric Tons"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Usage Description</label>
                          <input
                            type="text"
                            required
                            value={newMachine.usage || ""}
                            onChange={(e) => setNewMachine({ ...newMachine, usage: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                            placeholder="e.g. Bulk overburden loading at granite sites."
                          />
                        </div>
                      </div>

                      <div className="flex space-x-3 justify-end">
                        <button
                          type="button"
                          onClick={() => setIsAddingMachine(false)}
                          className="px-5 py-2.5 bg-slate-950 border border-slate-855 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white text-xs"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                        >
                          Save Machine
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Edit Machine Specs Form */}
                {editingMachine && (
                  <div className="bg-slate-900 border border-amber-400/20 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-white mb-6">Modify Machine: {editingMachine.name}</h3>
                    <form onSubmit={handleUpdateMachine} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Machine Name</label>
                          <input
                            type="text"
                            required
                            value={editingMachine.name}
                            onChange={(e) => setEditingMachine({ ...editingMachine, name: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                          <select
                            value={editingMachine.category}
                            onChange={(e) => setEditingMachine({ ...editingMachine, category: e.target.value as any })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-350 text-sm"
                          >
                            <option value="drilling">Drilling Rigs</option>
                            <option value="earthmoving">Earthmovers & Loaders</option>
                            <option value="mining">Mining Attachments</option>
                            <option value="logistics">Logistics Tippers</option>
                            <option value="support">Site Support</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Capacity</label>
                          <input
                            type="text"
                            required
                            value={editingMachine.capacity}
                            onChange={(e) => setEditingMachine({ ...editingMachine, capacity: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Usage Description</label>
                          <input
                            type="text"
                            required
                            value={editingMachine.usage}
                            onChange={(e) => setEditingMachine({ ...editingMachine, usage: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-3 justify-end">
                        <button
                          type="button"
                          onClick={() => setEditingMachine(null)}
                          className="px-5 py-2.5 bg-slate-950 border border-slate-855 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white text-xs"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                        >
                          Update Specs
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Machinery List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {machinery.map((machine) => (
                    <div
                      key={machine.id}
                      className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-amber-400 text-xxs font-extrabold uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {machine.category}
                          </span>
                          <div className="flex space-x-1">
                            <button
                              onClick={() => {
                                setEditingMachine(machine);
                                setIsAddingMachine(false);
                              }}
                              className="text-slate-400 hover:text-white p-1.5 hover:bg-slate-800 rounded transition-all"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteMachine(machine.id)}
                              className="text-rose-400 hover:text-rose-600 p-1.5 hover:bg-slate-850 rounded transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <h4 className="text-base font-bold text-white">{machine.name}</h4>
                        <p className="text-slate-450 text-xs mt-1">Usage: {machine.usage}</p>
                        <div className="flex justify-between text-xxs text-slate-500 mt-4 border-t border-slate-850 pt-2 font-bold uppercase">
                          <span>Payload Cap:</span>
                          <span className="text-amber-400">{machine.capacity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: SERVICES */}
            {activeTab === "services" && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-amber-400">
                  Service Descriptions
                </h2>

                <div className="space-y-6">
                  {services.map((service) => (
                    <div
                      key={service.slug}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4"
                    >
                      <div className="flex justify-between items-start border-b border-slate-850 pb-4">
                        <h3 className="text-lg font-black text-white">{service.title}</h3>
                        <span className="text-xs uppercase text-slate-500 font-extrabold tracking-wider">{service.slug}</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-slate-400 text-xxs font-bold uppercase tracking-wider mb-2">Short Summary Description</label>
                          <input
                            type="text"
                            value={service.shortDesc}
                            onChange={(e) => handleUpdateService(service.slug, { shortDesc: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-805 rounded-xl px-4 py-2.5 text-slate-200 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xxs font-bold uppercase tracking-wider mb-2">Long Page Description</label>
                          <textarea
                            rows={3}
                            value={service.longDesc}
                            onChange={(e) => handleUpdateService(service.slug, { longDesc: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-805 rounded-xl px-4 py-2.5 text-slate-200 text-xs resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
