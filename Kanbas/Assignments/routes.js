import assignments from "../Database/assignments.js";
import Database from "../Database/index.js";

/*function AssignmentRoutes(app) {
    /*app.get("/api/assignments", (req, res) => {
        res.send(db.assignments);
    });
    
    app.post("/api/Courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex(
            (a) => a._id === aid);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });
}

export default AssignmentRoutes; */


export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:id", (req, res) => {
        const { id } = req.params;
        Database.assignments = Database.assignments.filter((a) => a._id !== id);
        res.sendStatus(204);
      });
    
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { id } = req.params;
        const assignment = { ...req.body,
            course: id,
          _id: new Date().getTime().toString() };
        Database.assignments.push(assignment);
        res.send(assignment);
      });
    
    app.get("/api/assignments", (req, res) => {
        const assignments = Database.assignments;
        res.send(assignments);


  });

  app.put("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    const assignment = req.body;
    Database.assignments = Database.assignments.map((a) =>
      a._id === id ? { ...a, ...assignment } : a
    );
    res.sendStatus(204);
  });

  app.put("/api/assignments/:aid", (req, res) => {
        const { id } = req.params;
        const assignmentIndex = db.assignments.findIndex(
            (a) => a._id === id);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

}
