import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isManualEntry, setIsManualEntry] = useState(false);
  const fileInputRef = useRef(null);
  const [jobDescription, setJobDescription] = useState('');
  const [manualEntry, setManualEntry] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    currentRole: '',
    skills: '',
    additionalInfo: ''
  });
  const [showValidation, setShowValidation] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (file) => {
    if (file?.type !== 'text/csv') {
      alert('Please upload a CSV file');
      return;
    }
    setFile(file);
  };

  const handleManualEntryChange = (e) => {
    setManualEntry({
      ...manualEntry,
      [e.target.name]: e.target.value
    });
  };

  const handleUpload = async () => {
    if ((!file && !isManualEntry) || !jobDescription.trim() || 
        (isManualEntry && Object.values(manualEntry).some(field => !field.trim()))) {
      setShowValidation(true);
      return;
    }

    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Job Description:', jobDescription);
    console.log('Candidate Data:', isManualEntry ? manualEntry : 'CSV file');
    setIsUploading(false);
    setFile(null);
    setShowValidation(false);
  };

  const handleEntryMethodChange = (isManual) => {
    setIsManualEntry(isManual);
    setShowValidation(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/logo.png" alt="HireBettr" className="h-8 mr-2" />
            HireBettr
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center w-full mb-6">
                Add Candidates
              </h2>

              <div className="tabs tabs-boxed mb-6">
                <a 
                  className={`tab ${!isManualEntry && 'tab-active'}`}
                  onClick={() => handleEntryMethodChange(false)}
                >
                  CSV Upload
                </a>
                <a 
                  className={`tab ${isManualEntry && 'tab-active'}`}
                  onClick={() => handleEntryMethodChange(true)}
                >
                  Manual Entry
                </a>
              </div>

              {!isManualEntry ? (
                <div className="mb-8">
                  <div className="bg-base-200 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">CSV File Format</h3>
                    <p className="text-sm text-base-content/70 mb-2">Your CSV file must include the following columns in this order:</p>
                    <div className="bg-base-100 p-3 rounded-md font-mono text-sm">
                      Full Name, Email, Phone Number, Current Role, Years of Experience, Skills
                    </div>
                    <p className="text-sm text-base-content/70 mt-2">
                      Note: Skills should be separated by semicolons (e.g., "JavaScript; React; Node.js")
                    </p>
                  </div>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                      ${isDragging ? 'border-primary bg-primary/10' : 'border-base-300'}
                      ${file ? 'bg-success/10' : 'hover:bg-base-200'}
                      ${showValidation && !file ? 'border-error' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      className="hidden"
                      accept=".csv"
                      ref={fileInputRef}
                      onChange={handleFileInput}
                    />
                    <div className="space-y-2">
                      {!file ? (
                        <>
                          <div className="text-3xl">📄</div>
                          <h3 className="font-semibold">Drop your CSV file here</h3>
                          <p className="text-sm text-base-content/60">or click to browse</p>
                        </>
                      ) : (
                        <>
                          <div className="text-3xl">✅</div>
                          <h3 className="font-semibold text-success">{file.name}</h3>
                          <p className="text-sm text-base-content/60">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                        </>
                      )}
                    </div>
                    {showValidation && !file && (
                      <div className="text-error text-sm mt-2">Please upload a CSV file</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 mb-8">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Full Name</span>
                      {showValidation && !manualEntry.name && (
                        <span className="label-text-alt text-error">Required</span>
                      )}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`input input-bordered w-full ${showValidation && !manualEntry.name ? 'input-error' : ''}`}
                      placeholder="John Doe"
                      value={manualEntry.name}
                      onChange={handleManualEntryChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Email</span>
                        {showValidation && !manualEntry.email && (
                          <span className="label-text-alt text-error">Required</span>
                        )}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`input input-bordered w-full ${showValidation && !manualEntry.email ? 'input-error' : ''}`}
                        placeholder="john.doe@example.com"
                        value={manualEntry.email}
                        onChange={handleManualEntryChange}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Phone Number</span>
                        {showValidation && !manualEntry.phone && (
                          <span className="label-text-alt text-error">Required</span>
                        )}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className={`input input-bordered w-full ${showValidation && !manualEntry.phone ? 'input-error' : ''}`}
                        placeholder="(123) 456-7890"
                        value={manualEntry.phone}
                        onChange={handleManualEntryChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Current Role</span>
                        {showValidation && !manualEntry.currentRole && (
                          <span className="label-text-alt text-error">Required</span>
                        )}
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        className={`input input-bordered w-full ${showValidation && !manualEntry.currentRole ? 'input-error' : ''}`}
                        placeholder="Software Engineer"
                        value={manualEntry.currentRole}
                        onChange={handleManualEntryChange}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Years of Experience</span>
                        {showValidation && !manualEntry.experience && (
                          <span className="label-text-alt text-error">Required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        name="experience"
                        className={`input input-bordered w-full ${showValidation && !manualEntry.experience ? 'input-error' : ''}`}
                        placeholder="5"
                        min="0"
                        value={manualEntry.experience}
                        onChange={handleManualEntryChange}
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Skills</span>
                      {showValidation && !manualEntry.skills && (
                        <span className="label-text-alt text-error">Required</span>
                      )}
                    </label>
                    <textarea
                      name="skills"
                      className={`textarea textarea-bordered h-24 ${showValidation && !manualEntry.skills ? 'textarea-error' : ''}`}
                      placeholder="List the candidate's skills, separated by semicolons (e.g., JavaScript; React; Node.js; Project Management)"
                      value={manualEntry.skills}
                      onChange={handleManualEntryChange}
                    ></textarea>
                  </div>
                </div>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Job Description & Requirements</span>
                  {showValidation && !jobDescription && (
                    <span className="label-text-alt text-error">Required</span>
                  )}
                </label>
                <textarea
                  className={`textarea textarea-bordered h-32 ${showValidation && !jobDescription ? 'textarea-error' : ''}`}
                  placeholder="Describe the job requirements, qualifications, and any specific preferences..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>

              {isUploading && (
                <div className="mt-6">
                  <progress 
                    className="progress progress-primary w-full" 
                    value="100"
                    max="100"
                  ></progress>
                </div>
              )}

              <div className="card-actions justify-end mt-6">
                <button 
                  className={`btn btn-primary ${isUploading ? 'loading' : ''}`}
                  onClick={handleUpload}
                  disabled={isUploading}
                >
                  {isUploading ? 'Processing...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;