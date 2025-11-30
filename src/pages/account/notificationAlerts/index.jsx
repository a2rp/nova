// src/pages/accounts/notificationAlerts/index.jsx
import { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    TbMail,
    TbBell,
    TbDeviceMobileMessage,
    TbAlertCircle,
    TbSparkles,
    TbCurrencyRupee,
} from "react-icons/tb";

const initialState = {
    emailEnabled: true,
    inAppEnabled: true,
    pushEnabled: false,
    digestFrequency: "daily", // daily | weekly | monthly
    categories: {
        productUpdates: true,
        securityAlerts: true,
        billing: true,
        marketing: false,
        tips: false,
    },
};

const NotificationAlerts = () => {
    const [form, setForm] = useState(initialState);
    const [saving, setSaving] = useState(false);

    const toggleSwitch = (field) => () => {
        setForm((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const toggleCategory = (key) => () => {
        setForm((prev) => ({
            ...prev,
            categories: {
                ...prev.categories,
                [key]: !prev.categories[key],
            },
        }));
    };

    const handleDigestChange = (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, digestFrequency: value }));
    };

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => setSaving(false), 700);
    };

    const handleReset = () => {
        setForm(initialState);
    };

    const preview = useMemo(() => {
        const channels = [
            form.emailEnabled ? "email" : null,
            form.inAppEnabled ? "in-app" : null,
            form.pushEnabled ? "push" : null,
        ].filter(Boolean);

        const freqText =
            form.digestFrequency === "daily"
                ? "once a day"
                : form.digestFrequency === "weekly"
                    ? "once a week"
                    : "once a month";

        const enabledCats = Object.entries(form.categories)
            .filter(([, value]) => value)
            .map(([key]) => {
                switch (key) {
                    case "productUpdates":
                        return "product updates";
                    case "securityAlerts":
                        return "security alerts";
                    case "billing":
                        return "billing";
                    case "marketing":
                        return "announcements";
                    case "tips":
                        return "tips & best practices";
                    default:
                        return key;
                }
            });

        return {
            channels:
                channels.length > 0
                    ? channels.join(", ")
                    : "no channels currently selected",
            freq: freqText,
            categories:
                enabledCats.length > 0
                    ? enabledCats.join(", ")
                    : "no categories selected",
        };
    }, [form]);

    return (
        <Styled.Wrap>
            {/* CHANNELS */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Notification channels</h3>
                        <p>
                            Turn individual channels on or off. You can still see
                            critical security alerts even if everything is off.
                        </p>
                    </div>
                </div>

                <div className="channelsRow">
                    <div
                        className={
                            "channelCard" +
                            (form.emailEnabled ? " isActive" : "")
                        }
                        onClick={toggleSwitch("emailEnabled")}
                    >
                        <div className="iconBubble">
                            <TbMail />
                        </div>
                        <div className="textBlock">
                            <div className="title">Email</div>
                            <div className="meta">
                                Messages sent to your primary email address.
                            </div>
                        </div>
                        <div className="toggleShell">
                            <div
                                className={
                                    "toggleSwitch" +
                                    (form.emailEnabled ? " isOn" : "")
                                }
                            >
                                <span className="thumb" />
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            "channelCard" +
                            (form.inAppEnabled ? " isActive" : "")
                        }
                        onClick={toggleSwitch("inAppEnabled")}
                    >
                        <div className="iconBubble">
                            <TbBell />
                        </div>
                        <div className="textBlock">
                            <div className="title">In-app</div>
                            <div className="meta">
                                Alerts that appear in your Nova notification center.
                            </div>
                        </div>
                        <div className="toggleShell">
                            <div
                                className={
                                    "toggleSwitch" +
                                    (form.inAppEnabled ? " isOn" : "")
                                }
                            >
                                <span className="thumb" />
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            "channelCard" +
                            (form.pushEnabled ? " isActive" : "")
                        }
                        onClick={toggleSwitch("pushEnabled")}
                    >
                        <div className="iconBubble">
                            <TbDeviceMobileMessage />
                        </div>
                        <div className="textBlock">
                            <div className="title">Push</div>
                            <div className="meta">
                                Mobile or browser push notifications for time-sensitive
                                activity.
                            </div>
                        </div>
                        <div className="toggleShell">
                            <div
                                className={
                                    "toggleSwitch" +
                                    (form.pushEnabled ? " isOn" : "")
                                }
                            >
                                <span className="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* DIGEST */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Summary digest</h3>
                        <p>
                            Receive a compact summary of your account each day, week or
                            month.
                        </p>
                    </div>
                </div>

                <div className="digestRow">
                    <div className="digestOptions">
                        <label>
                            <input
                                type="radio"
                                name="digest"
                                value="daily"
                                checked={form.digestFrequency === "daily"}
                                onChange={handleDigestChange}
                            />
                            Daily summary
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="digest"
                                value="weekly"
                                checked={form.digestFrequency === "weekly"}
                                onChange={handleDigestChange}
                            />
                            Weekly overview
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="digest"
                                value="monthly"
                                checked={form.digestFrequency === "monthly"}
                                onChange={handleDigestChange}
                            />
                            Monthly snapshot
                        </label>
                    </div>

                    <div className="digestNote">
                        <TbAlertCircle className="icon" />
                        <div>
                            <div className="title">Security alerts override</div>
                            <div className="meta">
                                Critical security notifications may still be sent right
                                away so you can react quickly.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* CATEGORIES */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Notification categories</h3>
                        <p>
                            Pick which types of notifications you want to hear about.
                        </p>
                    </div>
                </div>

                <div className="categoriesGrid">
                    <button
                        type="button"
                        className={
                            "categoryChip" +
                            (form.categories.productUpdates ? " isActive" : "")
                        }
                        onClick={toggleCategory("productUpdates")}
                    >
                        <TbSparkles className="icon" />
                        Product updates
                        <span className="sub">New features, improvements</span>
                    </button>

                    <button
                        type="button"
                        className={
                            "categoryChip" +
                            (form.categories.securityAlerts ? " isActive" : "")
                        }
                        onClick={toggleCategory("securityAlerts")}
                    >
                        <TbAlertCircle className="icon" />
                        Security alerts
                        <span className="sub">Unusual logins, password changes</span>
                    </button>

                    <button
                        type="button"
                        className={
                            "categoryChip" +
                            (form.categories.billing ? " isActive" : "")
                        }
                        onClick={toggleCategory("billing")}
                    >
                        <TbCurrencyRupee className="icon" />
                        Billing &amp; payments
                        <span className="sub">Invoices, payment issues</span>
                    </button>

                    <button
                        type="button"
                        className={
                            "categoryChip" +
                            (form.categories.marketing ? " isActive" : "")
                        }
                        onClick={toggleCategory("marketing")}
                    >
                        <TbSparkles className="icon" />
                        News &amp; announcements
                        <span className="sub">Launches, events, campaigns</span>
                    </button>

                    <button
                        type="button"
                        className={
                            "categoryChip" +
                            (form.categories.tips ? " isActive" : "")
                        }
                        onClick={toggleCategory("tips")}
                    >
                        <TbSparkles className="icon" />
                        Tips &amp; best practices
                        <span className="sub">Guides, productivity tips</span>
                    </button>
                </div>

                <div className="previewCard">
                    <div className="previewTitle">
                        <span className="iconBubble">
                            <TbBell />
                        </span>
                        <div>
                            <div className="label">Preview</div>
                            <div className="meta">
                                We&apos;ll send {preview.categories} via{" "}
                                {preview.channels}, bundled {preview.freq}.
                            </div>
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

export default NotificationAlerts;
