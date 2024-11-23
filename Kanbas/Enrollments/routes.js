import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const courses = dao.findAllEnrollments();
    res.send(courses);
  });
}
