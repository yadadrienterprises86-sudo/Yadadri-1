import { servicesData, ServiceDetail } from "@/data/services";
import { machineryData, MachineDetail } from "@/data/machinery";
import { projectsData, ProjectDetail } from "@/data/projects";
import { galleryData, GalleryItem } from "@/data/gallery";

export type { ServiceDetail, MachineDetail, ProjectDetail, GalleryItem };

const SERVICES_KEY = "sriyadadri_services";
const MACHINERY_KEY = "sriyadadri_machinery";
const PROJECTS_KEY = "sriyadadri_projects";
const GALLERY_KEY = "sriyadadri_gallery";

// Helper to check if we are on client side
const isClient = typeof window !== "undefined";

export function initializeDatabase() {
  if (!isClient) return;

  if (!localStorage.getItem(SERVICES_KEY)) {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(servicesData));
  }
  if (!localStorage.getItem(MACHINERY_KEY)) {
    localStorage.setItem(MACHINERY_KEY, JSON.stringify(machineryData));
  }
  if (!localStorage.getItem(PROJECTS_KEY)) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectsData));
  }
  if (!localStorage.getItem(GALLERY_KEY)) {
    localStorage.setItem(GALLERY_KEY, JSON.stringify(galleryData));
  }
}

// SERVICES OPERATIONS
export function getServices(): ServiceDetail[] {
  if (!isClient) return servicesData;
  initializeDatabase();
  const data = localStorage.getItem(SERVICES_KEY);
  return data ? JSON.parse(data) : servicesData;
}

export function saveServices(services: ServiceDetail[]) {
  if (!isClient) return;
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
}

// MACHINERY OPERATIONS
export function getMachinery(): MachineDetail[] {
  if (!isClient) return machineryData;
  initializeDatabase();
  const data = localStorage.getItem(MACHINERY_KEY);
  return data ? JSON.parse(data) : machineryData;
}

export function saveMachinery(machinery: MachineDetail[]) {
  if (!isClient) return;
  localStorage.setItem(MACHINERY_KEY, JSON.stringify(machinery));
}

// PROJECTS OPERATIONS
export function getProjects(): ProjectDetail[] {
  if (!isClient) return projectsData;
  initializeDatabase();
  const data = localStorage.getItem(PROJECTS_KEY);
  return data ? JSON.parse(data) : projectsData;
}

export function saveProjects(projects: ProjectDetail[]) {
  if (!isClient) return;
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

// GALLERY OPERATIONS
export function getGallery(): GalleryItem[] {
  if (!isClient) return galleryData;
  initializeDatabase();
  const data = localStorage.getItem(GALLERY_KEY);
  return data ? JSON.parse(data) : galleryData;
}

export function saveGallery(gallery: GalleryItem[]) {
  if (!isClient) return;
  localStorage.setItem(GALLERY_KEY, JSON.stringify(gallery));
}
