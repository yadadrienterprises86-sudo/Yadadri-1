export interface GalleryItem {
  id: string;
  title: string;
  category: "construction" | "mining" | "machinery" | "worksites" | "team" | "drone";
  image: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Excavator on Site",
    category: "machinery",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    description: "Tata Hitachi EX200 excavator active in quarry loading operations."
  },
  {
    id: "gal-2",
    title: "Mountain Highway Clearing",
    category: "construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    description: "Rocky terrain clearing for highway infrastructure alignment."
  },
  {
    id: "gal-3",
    title: "Open Pit Bench Layout",
    category: "drone",
    image: "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=800&q=80",
    description: "Aerial drone capture displaying multiple active quarry benches."
  },
  {
    id: "gal-4",
    title: "Safety Briefing Session",
    category: "team",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "Our core engineering team during the daily site safety and tool-box talk."
  },
  {
    id: "gal-5",
    title: "High-Capacity Wheel Loader",
    category: "machinery",
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    description: "Heavy CAT wheel loader managing rock stockpiles."
  },
  {
    id: "gal-6",
    title: "Active Quarry Operations",
    category: "worksites",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=800&q=80",
    description: "General view of Karimnagar granite extraction site during peak shift."
  },
  {
    id: "gal-7",
    title: "Hydraulic Crawler Drill Rig",
    category: "machinery",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Sandvik hydraulic rig finishing blast holes alignment."
  },
  {
    id: "gal-8",
    title: "Civil Concrete Foundations",
    category: "construction",
    image: "https://images.unsplash.com/photo-1579847285160-c3093c834a36?auto=format&fit=crop&w=800&q=80",
    description: "Reinforced concrete foundations prepared for industrial plant."
  },
  {
    id: "gal-9",
    title: "Tipper Truck Fleet",
    category: "machinery",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    description: "Line-up of BharatBenz heavy tippers at the dispatch terminal."
  },
  {
    id: "gal-10",
    title: "Aerial View of Crusher Site",
    category: "drone",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Drone snapshot of the crushing and sorting plant operations."
  },
  {
    id: "gal-11",
    title: "Drilling Specialists",
    category: "team",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    description: "Experienced drilling rig operators checking drill steel threads."
  },
  {
    id: "gal-12",
    title: "Deep Bench Blasting Area",
    category: "worksites",
    category2: "mining",
    image: "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=800&q=80",
    description: "Post-blast rock pile ready for excavator loading."
  }
] as unknown as GalleryItem[];
