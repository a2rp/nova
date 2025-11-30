// src/pages/accounts/workEducation/index.jsx
import { useState } from "react";
import { Styled } from "./styled";

const initialState = {
    company: "Nova Metrics Labs",
    jobTitle: "Full-Stack Engineer",
    department: "Product Engineering",
    employmentType: "fullTime",
    startedAt: "2021-06",
    workSummary:
        "Building internal dashboards, analytics tools and automation pipelines.",
    skills: "React, Node.js, TypeScript, MongoDB, GraphQL",

    school: "Core Systems Institute",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    graduationYear: "2016",
    educationSummary:
        "Focused on distributed systems, data structures and web technologies.",
};

const WorkEducation = () => {
    const [form, setForm] = useState(initialState);
    const [saving, setSaving] = useState(false);

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
        }, 700);
    };

    const handleReset = () => {
        setForm(initialState);
    };

    return (
        <Styled.Wrap>
            {/* WORK BLOCK */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Work</h3>
                        <p>
                            Update your current role and team so colleagues see the
                            right information.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">Company</div>
                        <input
                            type="text"
                            value={form.company}
                            onChange={handleChange("company")}
                            placeholder="Company name"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Job Title</div>
                        <input
                            type="text"
                            value={form.jobTitle}
                            onChange={handleChange("jobTitle")}
                            placeholder="Job title"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Department</div>
                        <input
                            type="text"
                            value={form.department}
                            onChange={handleChange("department")}
                            placeholder="Department / Team"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Employment Type</div>
                        <select
                            value={form.employmentType}
                            onChange={handleChange("employmentType")}
                        >
                            <option value="fullTime">Full-time</option>
                            <option value="partTime">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="freelance">Freelance</option>
                            <option value="intern">Internship</option>
                        </select>
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Started</div>
                        <input
                            type="month"
                            value={form.startedAt}
                            onChange={handleChange("startedAt")}
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Key Skills</div>
                        <input
                            type="text"
                            value={form.skills}
                            onChange={handleChange("skills")}
                            placeholder="Comma-separated skills"
                        />
                    </div>
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Work Summary</div>
                        <textarea
                            rows={3}
                            value={form.workSummary}
                            onChange={handleChange("workSummary")}
                            placeholder="Short description of what you work on."
                        />
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* EDUCATION BLOCK */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Education</h3>
                        <p>Share where you studied and what you specialised in.</p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">School / University</div>
                        <input
                            type="text"
                            value={form.school}
                            onChange={handleChange("school")}
                            placeholder="Institute name"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Degree</div>
                        <input
                            type="text"
                            value={form.degree}
                            onChange={handleChange("degree")}
                            placeholder="Degree (e.g. B.Tech, MSc)"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Field of Study</div>
                        <input
                            type="text"
                            value={form.field}
                            onChange={handleChange("field")}
                            placeholder="Field of study"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Graduation Year</div>
                        <input
                            type="text"
                            value={form.graduationYear}
                            onChange={handleChange("graduationYear")}
                            placeholder="YYYY"
                        />
                    </div>
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Education Summary</div>
                        <textarea
                            rows={3}
                            value={form.educationSummary}
                            onChange={handleChange("educationSummary")}
                            placeholder="Highlights of your education or projects."
                        />
                    </div>
                </div>
            </section>

            <div className="sectionActions">
                <button type="button" onClick={handleReset} disabled={saving}>
                    Reset
                </button>
                <button
                    type="button"
                    className="primary"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving ? "Saving…" : "Save changes"}
                </button>
            </div>
        </Styled.Wrap>
    );
};

export default WorkEducation;
