// src/pages/accounts/languageRegion/index.jsx
import { useMemo, useState } from "react";
import { Styled } from "./styled";
import { TbWorld, TbClockHour4, TbCurrencyRupee } from "react-icons/tb";

const initialState = {
    language: "en",
    region: "IN",
    timeZone: "Asia/Kolkata",
    dateFormat: "DMY", // 15 Feb 2025
    timeFormat: "24h", // 14:35
    numberFormat: "indian", // 12,34,567.89
    firstDayOfWeek: "mon",
    currency: "INR",
};

const LanguageRegion = () => {
    const [form, setForm] = useState(initialState);
    const [saving, setSaving] = useState(false);

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => setSaving(false), 700);
    };

    const handleReset = () => {
        setForm(initialState);
    };

    // ---- Preview helpers (pure frontend feel) ----
    const preview = useMemo(() => {
        const sampleDate = new Date("2025-02-15T14:35:00");

        const day = sampleDate.getDate().toString().padStart(2, "0");
        const month = (sampleDate.getMonth() + 1).toString().padStart(2, "0");
        const year = sampleDate.getFullYear();

        let dateStr = "";
        switch (form.dateFormat) {
            case "MDY":
                dateStr = `${month}/${day}/${year}`;
                break;
            case "YMD":
                dateStr = `${year}-${month}-${day}`;
                break;
            case "DMY":
            default:
                dateStr = `${day}/${month}/${year}`;
                break;
        }

        const hours24 = sampleDate.getHours();
        const minutes = sampleDate.getMinutes().toString().padStart(2, "0");

        let timeStr = "";
        if (form.timeFormat === "12h") {
            const suffix = hours24 >= 12 ? "PM" : "AM";
            const h12 = ((hours24 + 11) % 12) + 1;
            timeStr = `${h12}:${minutes} ${suffix}`;
        } else {
            timeStr = `${hours24.toString().padStart(2, "0")}:${minutes}`;
        }

        const sampleNumber = 1234567.89;
        let numberStr = "";

        const [intPartRaw, fracRaw] = sampleNumber.toFixed(2).split(".");
        if (form.numberFormat === "indian") {
            // 12,34,567.89
            const last3 = intPartRaw.slice(-3);
            const rest = intPartRaw.slice(0, -3);
            let indianInt = "";
            if (rest.length > 0) {
                const parts = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
                indianInt = parts + "," + last3;
            } else {
                indianInt = last3;
            }
            numberStr = `${indianInt}.${fracRaw}`;
        } else if (form.numberFormat === "comma") {
            numberStr = sampleNumber.toLocaleString("en-US");
        } else if (form.numberFormat === "dot") {
            // 1.234.567,89
            const us = sampleNumber.toLocaleString("en-US");
            // "1,234,567.89" -> "1.234.567,89"
            numberStr = us.replace(/,/g, ".").replace(".", ",").replace(/\.(?=[^.]*$)/, ",");
        } else if (form.numberFormat === "space") {
            // 1 234 567.89
            const us = sampleNumber.toLocaleString("en-US");
            numberStr = us.replace(/,/g, " ");
        }

        const sampleCurrency = form.currency === "INR" ? "₹" : form.currency === "USD" ? "$" : "€";

        const weekStart =
            form.firstDayOfWeek === "mon"
                ? "Monday"
                : form.firstDayOfWeek === "sun"
                    ? "Sunday"
                    : "Saturday";

        return {
            dateStr,
            timeStr,
            numberStr,
            currencyStr: `${sampleCurrency} ${numberStr}`,
            weekStart,
        };
    }, [form]);

    return (
        <Styled.Wrap>
            {/* LANGUAGE */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Language</h3>
                        <p>
                            Choose your application language. This will affect menus,
                            tooltips and messages.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">App language</div>
                        <select
                            value={form.language}
                            onChange={handleChange("language")}
                        >
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Region</div>
                        <select
                            value={form.region}
                            onChange={handleChange("region")}
                        >
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="EU">European Union</option>
                            <option value="APAC">Asia-Pacific</option>
                        </select>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* TIME & DATE */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Time &amp; date</h3>
                        <p>
                            Control how dates and times are displayed across the
                            dashboard.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">Time zone</div>
                        <select
                            value={form.timeZone}
                            onChange={handleChange("timeZone")}
                        >
                            <option value="Asia/Kolkata">Asia / Kolkata (IST)</option>
                            <option value="UTC">UTC</option>
                            <option value="Europe/Berlin">
                                Europe / Berlin (CET/CEST)
                            </option>
                            <option value="America/New_York">
                                America / New York (ET)
                            </option>
                            <option value="Asia/Singapore">
                                Asia / Singapore (SGT)
                            </option>
                        </select>
                    </div>

                    <div className="fieldGroup">
                        <div className="fieldLabel">Date format</div>
                        <select
                            value={form.dateFormat}
                            onChange={handleChange("dateFormat")}
                        >
                            <option value="DMY">15/02/2025</option>
                            <option value="MDY">02/15/2025</option>
                            <option value="YMD">2025-02-15</option>
                        </select>
                    </div>

                    <div className="fieldGroup">
                        <div className="fieldLabel">Time format</div>
                        <select
                            value={form.timeFormat}
                            onChange={handleChange("timeFormat")}
                        >
                            <option value="24h">24-hour (14:35)</option>
                            <option value="12h">12-hour (2:35 PM)</option>
                        </select>
                    </div>

                    <div className="fieldGroup">
                        <div className="fieldLabel">First day of week</div>
                        <select
                            value={form.firstDayOfWeek}
                            onChange={handleChange("firstDayOfWeek")}
                        >
                            <option value="mon">Monday</option>
                            <option value="sun">Sunday</option>
                            <option value="sat">Saturday</option>
                        </select>
                    </div>
                </div>

                <div className="previewCard">
                    <div className="previewTitle">
                        <span className="iconBubble">
                            <TbClockHour4 />
                        </span>
                        <div>
                            <div className="label">Preview</div>
                            <div className="meta">
                                This is how time and date will appear in your account.
                            </div>
                        </div>
                    </div>
                    <div className="previewRow">
                        <span className="hint">Sample:</span>
                        <span className="value">
                            {preview.dateStr} · {preview.timeStr} · Week starts on{" "}
                            {preview.weekStart}
                        </span>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* NUMBERS & CURRENCY */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Numbers &amp; currency</h3>
                        <p>
                            Configure how large values and currency amounts are
                            formatted.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup">
                        <div className="fieldLabel">Number formatting</div>
                        <select
                            value={form.numberFormat}
                            onChange={handleChange("numberFormat")}
                        >
                            <option value="indian">Indian grouping (12,34,567.89)</option>
                            <option value="comma">1,234,567.89</option>
                            <option value="dot">1.234.567,89</option>
                            <option value="space">1 234 567.89</option>
                        </select>
                    </div>
                    <div className="fieldGroup">
                        <div className="fieldLabel">Currency</div>
                        <select
                            value={form.currency}
                            onChange={handleChange("currency")}
                        >
                            <option value="INR">INR – Indian rupee</option>
                            <option value="USD">USD – US dollar</option>
                            <option value="EUR">EUR – Euro</option>
                        </select>
                    </div>
                </div>

                <div className="previewCard">
                    <div className="previewTitle">
                        <span className="iconBubble">
                            <TbCurrencyRupee />
                        </span>
                        <div>
                            <div className="label">Number preview</div>
                            <div className="meta">
                                We are using a sample value to show formatting.
                            </div>
                        </div>
                    </div>
                    <div className="previewRow">
                        <span className="hint">1,234,567.89 →</span>
                        <span className="value">{preview.numberStr}</span>
                    </div>
                    <div className="previewRow">
                        <span className="hint">Currency:</span>
                        <span className="value">{preview.currencyStr}</span>
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

export default LanguageRegion;
