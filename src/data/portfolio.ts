export const profile = {
  nombre: "Lider Salinas",
  rol: "Desarrollador Fullstack - React/Next.js y Python/FastAPI",
  resumen:
    "Construyo aplicaciones completas: frontend moderno (React/Next.js) y APIs robustas (Python/FastAPI). Enfoque en rendimiento, UI limpia y buenas practicas.",
  email: "rubensalinas05@gmail.com",
  linkedin: "https://www.linkedin.com/in/lider-salinas", // reemplaza luego en VS Code si queres tu URL exacta
  ubicacion: "Paraguay (Remoto)",
};

export const skills = [
  "React.js","Next.js","JavaScript (ES6+)","HTML5","CSS3","Bootstrap",
  "Python","FastAPI","Node.js","PostgreSQL","REST APIs",
  "Git/GitHub","Docker","Testing","CI/CD"
];

export const projects = [
  {
    titulo: "CRUDApp",
    descripcion: "CRUD de tareas en JavaScript puro (sin frameworks). ABM y persistencia simple.",
    stack: ["JavaScript","HTML","CSS"],
    repoUrl: "https://github.com/LiderSalinas/crudapp",
    demoUrl: "https://lidersalinas.github.io/crudapp/",
    cover: "/projects/crud.svg"
  },
  {
    titulo: "Vue + Node + MySQL",
    descripcion: "App fullstack con Vue en el frontend y API Node conectada a MySQL.",
    stack: ["Vue","Node.js","MySQL"],
    repoUrl: "https://github.com/LiderSalinas/vue-node-mysql",
    demoUrl: "#",
    cover: "/projects/landing.svg"
  },
  {
    titulo: "API Gym (Node)",
    descripcion: "Backend para gestion de gimnasio: clientes, cuotas y pagos. Endpoints REST.",
    stack: ["Node.js","Express"],
    repoUrl: "https://github.com/LiderSalinas/gym-system-backend",
    demoUrl: "#",
    cover: "/projects/dashboard.svg"
  },
  {
    titulo: "Prueba Aguila",
    descripcion: "Proyecto de practica en JavaScript, enfocado en logica y DOM.",
    stack: ["JavaScript","HTML","CSS"],
    repoUrl: "https://github.com/LiderSalinas/prueba-aguila",
    demoUrl: "https://lidersalinas.github.io/prueba-aguila/",
    cover: "/projects/landing.svg"
  }
];
