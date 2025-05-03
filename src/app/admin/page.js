export default function AdminDashboard() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Active Sessions</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>
    </div>
  )
} 