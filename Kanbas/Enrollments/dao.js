import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  let alreadyEnrolled = enrollments.some((enrolled) => enrolled.user === userId && enrolled.course === courseId);
  if (!alreadyEnrolled) {
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  }
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
  );
}

export function findAllEnrollments() {
  return Database.enrollments;
}
