import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js";

export function findAllCourses() {
  return model.find();
}

export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

// Also deletes enrollments!!
export async function deleteCourse(courseId) {
  // console.log(">>>deleteCourse", courseId);
  let blah = await enrollmentsModel.deleteMany({ course: courseId });
  // console.log(">>>blah", blah);
  return await model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  // return model.updateOne({ _id: courseId }, courseUpdates);
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
