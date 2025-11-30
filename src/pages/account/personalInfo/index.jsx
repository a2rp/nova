// src/pages/accounts/personalInfo/index.jsx
import { useState } from "react";
import { Styled } from "./styled";

const initialState = {
    firstName: "Luke",
    lastName: "Skywalker",
    userName: "LukeSkywalker212",
    country: "United States",
    state: "Pennsylvania",
    city: "Essington",
    street: "500 Powhatan Ave",
    zip: "19029",
    addressVisibility: "followers",
    phoneNumber: "+1 (830) 179-544-8106",
    phoneVisibility: "everyone",
};

const PersonalInfo = () => {
    const [form, setForm] = useState(initialState);
    const [saving, setSaving] = useState(false);

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleRadioChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleReset = () => {
        setForm(initialState);
    };

    const handleSave = () => {
        setSaving(true);
        // fake async save
        setTimeout(() => {
            setSaving(false);
            // here you could show toast later
        }, 700);
    };

    return (
        <Styled.Wrap>
            {/* NAME BLOCK */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Name</h3>
                        <p>
                            Edit your name or username. These details may be visible
                            on public pages.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">First Name</div>
                        <input
                            type="text"
                            value={form.firstName}
                            onChange={handleChange("firstName")}
                            placeholder="First name"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Last Name</div>
                        <input
                            type="text"
                            value={form.lastName}
                            onChange={handleChange("lastName")}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">User Name</div>
                        <input
                            type="text"
                            value={form.userName}
                            onChange={handleChange("userName")}
                            placeholder="Username shown to others"
                        />
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* ADDRESS BLOCK */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Address</h3>
                        <p>You can edit your address and control who can see it.</p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">Country</div>
                        <input
                            type="text"
                            value={form.country}
                            onChange={handleChange("country")}
                            placeholder="Country"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">State</div>
                        <input
                            type="text"
                            value={form.state}
                            onChange={handleChange("state")}
                            placeholder="State / Province"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">City</div>
                        <input
                            type="text"
                            value={form.city}
                            onChange={handleChange("city")}
                            placeholder="City"
                        />
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">ZIP</div>
                        <input
                            type="text"
                            value={form.zip}
                            onChange={handleChange("zip")}
                            placeholder="ZIP / Postal code"
                        />
                    </div>
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Street</div>
                        <input
                            type="text"
                            value={form.street}
                            onChange={handleChange("street")}
                            placeholder="Street address"
                        />
                    </div>
                </div>

                <div className="visibilityBlock">
                    <div className="visibilityLabel">
                        Who can see your address?
                    </div>
                    <div className="inlineRadios">
                        <label>
                            <input
                                type="radio"
                                name="addressVisibility"
                                checked={form.addressVisibility === "onlyMe"}
                                onChange={() =>
                                    handleRadioChange("addressVisibility", "onlyMe")
                                }
                            />
                            Only me
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="addressVisibility"
                                checked={form.addressVisibility === "followers"}
                                onChange={() =>
                                    handleRadioChange("addressVisibility", "followers")
                                }
                            />
                            Followers only
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="addressVisibility"
                                checked={form.addressVisibility === "everyone"}
                                onChange={() =>
                                    handleRadioChange("addressVisibility", "everyone")
                                }
                            />
                            Everyone
                        </label>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* PHONE BLOCK */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Phone</h3>
                        <p>
                            Add a phone number to stay connected and help with account
                            recovery.
                        </p>
                    </div>
                </div>

                <div className="sectionCard phoneCard">
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Number</div>
                        <input
                            type="tel"
                            value={form.phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            placeholder="+1 555-000-0000"
                        />
                    </div>
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Who can see your phone?</div>
                        <div className="inlineRadios">
                            <label>
                                <input
                                    type="radio"
                                    name="phoneVisibility"
                                    checked={form.phoneVisibility === "onlyMe"}
                                    onChange={() =>
                                        handleRadioChange("phoneVisibility", "onlyMe")
                                    }
                                />
                                Only me
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="phoneVisibility"
                                    checked={form.phoneVisibility === "followers"}
                                    onChange={() =>
                                        handleRadioChange("phoneVisibility", "followers")
                                    }
                                />
                                Followers only
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="phoneVisibility"
                                    checked={form.phoneVisibility === "everyone"}
                                    onChange={() =>
                                        handleRadioChange("phoneVisibility", "everyone")
                                    }
                                />
                                Everyone
                            </label>
                        </div>
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

export default PersonalInfo;
