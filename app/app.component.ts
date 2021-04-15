import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses: any[] = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
  ];
  frameworks: any[] = [
    { id: 1, name: "angular" },
    { id: 2, name: "react" },
    { id: 3, name: "vue" }
  ];
  counter: number = 10;

  loadFrameworks() {
    this.frameworks = [
      { id: 1, name: "angular" },
      { id: 2, name: "react" },
      { id: 3, name: "vue" }
    ];
    this.frameworks.push({ id: this.counter, name: "framwork" + this.counter });
  }
  loadCourses() {
    this.courses;
  }

  addCource() {
    this.counter += 1;
    this.courses.push({ id: this.counter, name: "course" + this.counter });
  }
  addFramework() {
    this.counter += 1;
    this.frameworks.push({ id: this.counter, name: "framwork" + this.counter });
  }
  trackByFramwork(index, framework) {
    return framework ? framework.id : undefined;
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
