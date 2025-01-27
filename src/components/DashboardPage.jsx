import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import callApi from "../CallApi"
const DashboardPage = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({})

  useEffect(() => {
    setLoading(true);

    callApi("/getUser", "GET").then((res) => {
      if (res.code === "ok") {
        console.log(res.message.user)
        console.log(res.message.campaigns)
        setUser(res.message.user);
        setCampaigns(res.message.campaigns);
        setLoading(false);
      } else {
        window.location.replace("/login");
      }
    })



  },[])

  const [campaigns, setCampaigns] = useState([
    {
      jobListing: "Senior Cashier",
      applicants: [{
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1234567890",
        role: "Senior Frontend Developer",
        experience: "5 years",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
        compatibilityScore: 92,
        status: "new"
      }],
      numberOfApplications: 1,
    }
  ]);

  const [sendButton, setSendButton] = useState(false)


  const [candidates,setCandidates] = useState([])
  useEffect(() => {

    if (selectedCampaign !== null) {
      console.log(campaigns[selectedCampaign].applicants)
      setCandidates(campaigns[selectedCampaign].applicants);
    }
    


  },[selectedCampaign])
  

 

  // const candidates = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     email: "sarah.j@email.com",
  //     phone: "+1234567890",
  //     role: "Senior Frontend Developer",
  //     experience: "5 years",
  //     skills: ["React", "TypeScript", "Node.js", "AWS"],
  //     compatibilityScore: 92,
  //     status: "new"
  //   },
  //   // ... more candidates
  // ];

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
    <>
     {!loading ? <>
      <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {/* <img src="/logo.png" alt="HiCruit" className="h-8 mr-2" /> */}
            HiCruit
          </Link>
        </div>
        
        <div className="navbar-end gap-2">
        
            <>
              <Link 
                to="/dashboard" 
                className="btn btn-ghost btn-sm hover:bg-base-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
                  />
                </svg>
                Dashboard
              </Link>
              <Link 
                to="/upload" 
                className="btn btn-outline btn-sm hover:bg-base-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                  />
                </svg>
                Upload Candidates
              </Link>
             
            </>
          
        </div>
      </div>


      {/* Main Content */}

      <div className='flex flex-row gap-3'>

        <div className='sticky top-0 left-0 bg-base-300 w-80 flex min-h-[90vh] flex-col items-center justify-items-center'>
   
          <div className='bg-base-100 p-4 m-1 rounded-box w-full'>
          <div className='flex sm:flex-row flex-col gap-2 items-center'>
            <div className='avatar avatar-placeholder'>
              <div className='w-12 rounded-full bg-base-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>


              </div>

            </div>

            <p className='font-1 font-semibold'>{user.name.split(" ")[0].substring(0,1).toUpperCase() + user.name.split(" ")[0].substring(1)}</p>
           
          </div>


          <button className='btn mx-auto w-full mt-2 btn-outline font-1 btn-base-100'>
            <p>Settings</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
  <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clipRule="evenodd" />
</svg>


          </button>
          </div>

          <div className='bg-base-100 m-1 p-4 w-full '>
            <div className='flex flex-col items-center gap-1 max-h-[40vh]'>
              <p className='font-1 font-semibold mb-1'>Active Listings</p>

{campaigns.map((val,i) => (
  <div onClick={() => {setSelectedCampaign(i)}} key={i} className='rounded-sm p-2 bg-base-300 w-full cursor-pointer select-none hover:border hover:bg-base-100 transition-150'>
    <p className='font-1 font-bold'>{val.jobListing}</p>
    <p className='flex flex-row gap-1 items-center justify-items-center font-1'>Applicants: <div className='badge badge-neutral font-1'>{val.numberOfApplicants}</div></p>
  

  </div>
))}
            </div>
            <div className='mt-2 border-t mx-auto'>
              <a href="/upload" className='btn btn-primary w-full mt-2'>
                <p className='font-1'>Create New Listing</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>

              </a>
            </div>
            

          </div>
          
        </div>


        






      <div className="container mx-auto px-4 py-8 relative">
        {/* Dashboard Header */}

        {selectedCampaign!== null ?<><div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
          <h4 className='text-2xl font-semibold'>{campaigns[selectedCampaign].jobListing}</h4>
          <p className="text-base-content/60">Manage and track your candidates</p>
          {!sendButton ? 
          <button className='btn btn-secondary mt-2 font-1' onClick={() => {
            setSendButton(true)
            callApi("/sendCalls", "POST", {
              campaignId: campaigns[selectedCampaign].id
            })
          }}>Send Interview Calls</button> :<button className='btn btn-disabled n-secondary mt-2 font-1'>Calls sent</button>
          }
          
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
            {/* <button type="submit" className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button> */}
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
                  <td>{candidate.experience} years</td>
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
                      {candidate.compatibilityScore ? 
                      <div 
                      className={`radial-progress ${
                        candidate.compatibilityScore >= 85 ? 'text-success' :
                        candidate.compatibilityScore >= 70 ? 'text-warning' :
                        'text-error'
                      }`}
                      style={{"--value": candidate.compatibilityScore}}
                    >
                      {candidate.compatibilityScore}%
                    </div> : <p className='font-2 text-error'>Not Called Yet</p>}
                      
                    </div>
                  </td>
                  <td>
                    <select 
                      className="select select-bordered select-sm w-full max-w-xs" disabled
                      value={candidate.status}
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

      <div className="flex justify-center mt-6">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">»</button>
        </div>
      </div></> : <div>
      <div className="font-1 w-full text-center absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-fit mx-auto rounded">
                            <p className="font-2 text-3xl font-bold">No Listing Selected</p>
                            <p className="flex flex-row gap-2 items-center mt-4">Select <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg> a job listing or <a href="/upload" className="btn font-1 btn-outline text-lg">create</a> a new one</p>
                        </div>
                        
                    </div>
        </div>}
        
        
      </div>

      </div>
      
    </div>
      </> : 
      
      <>
       <div className='fixed z-10 bg-base-300 opacity-60 w-screen h-screen'>
        


        </div>

        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
      </>
     
      
      }
    
    </>
   
  );
};

export default DashboardPage;
