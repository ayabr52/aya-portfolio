import ProjectCard from "./ProjectCard";
import homeworkImg from "../assets/homework-manager.png";
import orderImg from "../assets/order-management.png";
import awnakImg from "../assets/awnak.jpg";

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        title="Homework Manager"
        description="A modern and visually immersive homework management dashboard with animated starfield background and elegant UI."
        features={[
          "Dark / Light Mode",
          "Animated starfield background",
          "Add, edit, delete tasks",
          "Track task status",
          "Responsive sidebar",
          "Toast notifications",
        ]}
        tech={[
          "Laravel 11",
          "Blade",
          "TailwindCSS",
          "JavaScript",
        ]}
        
        github="https://github.com/ayabr52/homework-manager"
        image={homeworkImg}
      />

      <ProjectCard
        title="Order Management System"
        description="A simple yet structured PHP-based order management system built using OOP principles and design patterns to ensure clean, maintainable, and extendable code."
        features={[
          "Display all customer orders",
          "Show products for each order",
          "Calculate total price with VAT & shipping",
          "Order status tracking",
          "Extendable architecture (future CRUD, APIs, forms)",
        ]}
        tech={["PHP (OOP)", "Design Patterns", "HTML", "CSS", "Vanilla JS"]}
        
        github="https://github.com/ayabr52/order-management-system"
        image={orderImg}
      />

      <ProjectCard
        title="Awnak – Volunteer Management System"
        description="A modular Laravel system for managing volunteers, organizations, opportunities, applications, tasks, and evaluations with full RBAC and audit logging."
        features={[
          "Modular Laravel Architecture",
          "RBAC with Spatie Permissions",
          "Activity Logging & Audit Trail",
          "Service Layer + Policies",
        ]}
        tech={[
          "Laravel",
          "Sanctum",
          "Spatie Permissions",
          "Modular Architecture",
          
        ]}
        
        github="https://github.com/Yamankassem/Awnak-backend"
        image={awnakImg}
      />
    </div>
  );
};

export default Projects;
