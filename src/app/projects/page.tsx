import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            Welcome to the Projects page. Here you can view and manage your
            projects.
          </p>
          {/* Project list will go here */}
          <div className="mt-8">
            <div className="text-center text-gray-400">No projects found.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
