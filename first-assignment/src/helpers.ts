export function fetchUsers() {
  return new Promise<string[]>((resolve) => {
    window.setTimeout(() => resolve(["User 1", "User 2"]), 1000);
  });
}
export function fetchProjects() {
  return new Promise<string[]>((resolve) => {
    window.setTimeout(
      () => resolve(["Project 1", "Project 2", "Project 3"]),
      2300
    );
  });
}
