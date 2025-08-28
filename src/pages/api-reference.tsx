// import React from "react";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

const apiEndpoints = [
  {
    name: "Get Users",
    method: "GET",
    route: "/api/users",
    description: "Retrieve a list of all users in the system.",
    requestExample: `fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));`,
    responseExample: `[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]`,
    image: "https://images.unsplash.com/photo-1581091012184-0b5d2b6b7c11?auto=format&fit=crop&w=600&q=80",
    imageDescription: "Illustration representing user retrieval process"
  },
  {
    name: "Create User",
    method: "POST",
    route: "/api/users",
    description: "Add a new user to the system.",
    requestExample: `fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' })
});`,
    responseExample: `{ "id": 3, "name": "Alice", "email": "alice@example.com" }`,
    image: "https://images.unsplash.com/photo-1559028012-481c0aedd51c?auto=format&fit=crop&w=600&q=80",
    imageDescription: "Illustration representing user creation"
  },
  {
    name: "Get User Details",
    method: "GET",
    route: "/api/users/:id",
    description: "Retrieve detailed info about a specific user by ID.",
    requestExample: `fetch('/api/users/1')
  .then(res => res.json())
  .then(data => console.log(data));`,
    responseExample: `{ "id": 1, "name": "John Doe", "email": "john@example.com" }`,
    image: "https://images.unsplash.com/photo-1581093588401-7b4cba93f48c?auto=format&fit=crop&w=600&q=80",
    imageDescription: "Illustration showing retrieval of user details"
  },
  {
    name: "Update User",
    method: "PUT",
    route: "/api/users/:id",
    description: "Update the information of an existing user.",
    requestExample: `fetch('/api/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Updated', email: 'john.updated@example.com' })
});`,
    responseExample: `{ "id": 1, "name": "John Updated", "email": "john.updated@example.com" }`,
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
    imageDescription: "Illustration showing updating user data"
  },
  {
    name: "Delete User",
    method: "DELETE",
    route: "/api/users/:id",
    description: "Remove a user from the system permanently.",
    requestExample: `fetch('/api/users/1', { method: 'DELETE' });`,
    responseExample: `{ "message": "User deleted successfully." }`,
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
    imageDescription: "Illustration showing user deletion process"
  },
];

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          API Reference
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
        >
          Explore all CRUD endpoints, request examples, response structures, and illustrations to integrate with your applications seamlessly.
        </motion.p>
      </section>

      {/* What is an API Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">What is an API?</h2>
            <p className="text-gray-700 mb-4">
              An <strong>API (Application Programming Interface)</strong> allows your application to communicate with our system programmatically.
              It provides endpoints for retrieving, creating, updating, and deleting data securely and efficiently.
            </p>
            <p className="text-gray-700">
              With our RESTful API, developers can integrate user management, data retrieval, and other functionality directly into their own apps.
            </p>
          </div>
          <img
            src="https://media.istockphoto.com/id/2200761931/photo/futuristic-api-concept-with-robotic-hand-and-digital-holographic-elements-3d-rendering.jpg?s=612x612&w=0&k=20&c=aCIZNj05dAkL1qa-ut0K9kgry7VqrwSr5QN0_N2YchE="
            alt="API Illustration"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* How API Works Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900"
        >
          How the API Works
        </motion.h2>
        <img
          src="https://media.istockphoto.com/id/2218990885/photo/application-programming-interface-api-enables-seamless-integration-between-software.jpg?s=612x612&w=0&k=20&c=X51GpFHcnJ56vOY42yu8mPJiqWjnqNvR2vZnHz4qtk8="
          alt="API Workflow Diagram"
          className="w-full rounded-xl shadow-md"
        />
        <p className="text-gray-700 mt-6">
          Clients send requests to our server endpoints. The server processes requests, interacts with the database, and returns a structured response.
        </p>
      </section>

      {/* Endpoints Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        {apiEndpoints.map((endpoint, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg mb-12"
          >
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="font-semibold text-lg">{endpoint.name}</h3>
              <span className={`ml-auto font-mono text-sm px-2 py-1 rounded ${
                endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {endpoint.method}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{endpoint.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-1">Route</h4>
              <p className="font-mono bg-gray-100 p-2 rounded">{endpoint.route}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold mb-1">Request Example</h4>
                <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                  <code>{endpoint.requestExample}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Response Example</h4>
                <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                  <code>{endpoint.responseExample}</code>
                </pre>
              </div>
            </div>

            {/* Endpoint Image */}
            {endpoint.image && (
              <div className="mt-4">
                <img src={endpoint.image} alt={endpoint.name} className="w-full rounded-xl shadow-md" />
                {endpoint.imageDescription && <p className="text-gray-500 text-sm mt-2">{endpoint.imageDescription}</p>}
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
}
