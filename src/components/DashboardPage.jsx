import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API call
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1234567890",
      role: "Senior Frontend Developer",
      experience: "5 years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      compatibilityScore: 92,
      status: "new"
    },
    // ... more candidates
  ];

  // Filter and search logic
  const filteredCandidates = candidates.filter(candidate => {
    // First apply status filter
    const statusMatch = filterStatus === 'all' || candidate.status === filterStatus;

    // Then apply search query
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const searchMatch = searchTerms.every(term =>
      candidate.name.toLowerCase().includes(term) ||
      candidate.email.toLowerCase().includes(term) ||
      candidate.role.toLowerCase().includes(term) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(term))
    );

    return statusMatch && searchMatch;
  });

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/logo.png" alt="HireBettr" className="h-8 mr-2" />
            HireBettr
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link to="/upload" className="btn btn-primary">
            Add Candidates
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
            <p className="text-base-content/60">Manage and track your candidates</p>
          </div>
          
          {/* Stats Cards */}
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Total</div>
              <div className="stat-value">{filteredCandidates.length}</div>
              <div className="stat-desc">Candidates</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">New</div>
              <div className="stat-value text-primary">
                {filteredCandidates.filter(c => c.status === 'new').length}
              </div>
              <div className="stat-desc">This week</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">High Match</div>
              <div className="stat-value text-success">
                {filteredCandidates.filter(c => c.compatibilityScore >= 85).length}
              </div>
              <div className="stat-desc">≥85% compatibility</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <form onSubmit={handleSearchSubmit} className="form-control flex-1">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by name, email, role, or skills..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          <select 
            className="select select-bordered w-full md:w-auto"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all" selected>All Candidates</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="contacted">Contacted</option>
            <option value="interviewed">Interviewed</option>
          </select>
        </div>

        {/* Candidates Table */}
        <div className="bg-base-100 rounded-lg shadow-xl overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Experience</th>
                <th>Skills</th>
                <th>Compatibility</th>
                <th>Status</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map(candidate => (
                  <tr key={candidate.id}>
                    <td>
                      <div>
                        <div className="font-bold">{candidate.name}</div>
                        <div className="text-sm opacity-50">{candidate.email}</div>
                      </div>
                    </td>
                    <td>{candidate.role}</td>
                    <td>{candidate.experience}</td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <span key={index} className="badge badge-primary badge-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div 
                          className={`radial-progress ${
                            candidate.compatibilityScore >= 85 ? 'text-success' :
                            candidate.compatibilityScore >= 70 ? 'text-warning' :
                            'text-error'
                          }`}
                          style={{"--value": candidate.compatibilityScore}}
                        >
                          {candidate.compatibilityScore}%
                        </div>
                      </div>
                    </td>
                    <td>
                      <select 
                        className="select select-bordered select-sm w-full max-w-xs"
                        defaultValue={candidate.status}
                      >
                        <option value="new">New</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="contacted">Contacted</option>
                        <option value="interviewed">Interviewed</option>
                      </select>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${candidate.phone}`}
                          className="btn btn-ghost btn-sm tooltip" 
                          data-tip="Call"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-5 h-5"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" 
                            />
                          </svg>
                        </a>
                        <a 
                          href={`mailto:${candidate.email}`}
                          className="btn btn-ghost btn-sm tooltip" 
                          data-tip="Email"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-5 h-5"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <div className="text-base-content/60">
                      No candidates found matching your criteria
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
