export const normalizar = (nombre) => {
  if (nombre === "C++") return "cpp";
  if (nombre === "TypeScript") return "typescript";
  if (nombre === "HTML") return "html";
  if (nombre === "CSS") return "css";
  if (nombre === "Python") return "python";
  if (nombre === "JavaScript") return "javascript";
  if (nombre === "Git") return "git";
  if (nombre === "Bootstrap") return "bootstrap";
  if (nombre === "Django") return "django";
  if (nombre === "PHP") return "php";
  if (nombre === "MySQL") return "mysql";
  return nombre.toLowerCase().replace(/\s+/g, "-");
};
