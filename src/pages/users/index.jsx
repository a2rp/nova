// src/pages/users/index.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";

// ------ Mock seed data (frontend only) ------
const INITIAL_USERS = [
    {
        id: 1,
        name: "Yaga Masamichi",
        email: "yaga.masamichi@gmail.com",
        status: "online",
        role: "Admin",
        department: "Engineering",
        phone: "+1 202-555-0180",
        location: "New York, USA",
        createdAt: "14 January, 2022",
        color: "#4f46e5",
    },
    {
        id: 2,
        name: "Nanami Suda",
        email: "nanami.suda@gmail.com",
        status: "online",
        role: "User",
        department: "Design",
        phone: "+44 20 7946 2233",
        location: "London, UK",
        createdAt: "07 February, 2023",
        color: "#ec4899",
    },
    {
        id: 3,
        name: "Okkotsu Yuta",
        email: "okkotsu.yuta@gmail.com",
        status: "offline",
        role: "User",
        department: "Support",
        phone: "+81 80-6543-8899",
        location: "Kyoto, Japan",
        createdAt: "21 June, 2023",
        color: "#22c55e",
    },
    {
        id: 4,
        name: "Kugisaki Nobara",
        email: "kugisaki.nobara@gmail.com",
        status: "online",
        role: "Supervisor",
        department: "Marketing",
        phone: "+61 2 9374 4000",
        location: "Sydney, Australia",
        createdAt: "03 November, 2023",
        color: "#f97316",
    },
    {
        id: 5,
        name: "Nanami Kento",
        email: "nanami.kento@gmail.com",
        status: "offline",
        role: "Admin",
        department: "Finance",
        phone: "+1 303-555-0134",
        location: "Denver, USA",
        createdAt: "30 August, 2021",
        color: "#0ea5e9",
    },
    {
        id: 6,
        name: "Fushiguro Megumi",
        email: "fushiguro.megumi@gmail.com",
        status: "online",
        role: "User",
        department: "Engineering",
        phone: "+49 30 901820",
        location: "Berlin, Germany",
        createdAt: "19 May, 2022",
        color: "#a855f7",
    },
    {
        id: 7,
        name: "Nitta Akari",
        email: "nitta.akari@gmail.com",
        status: "away",
        role: "Supervisor",
        department: "Design",
        phone: "+33 1 4020 5000",
        location: "Paris, France",
        createdAt: "12 March, 2023",
        color: "#22d3ee",
    },
    {
        id: 8,
        name: "Inumaki Toge",
        email: "inumaki.toge@gmail.com",
        status: "online",
        role: "User",
        department: "Support",
        phone: "+82 10-7788-5566",
        location: "Seoul, South Korea",
        createdAt: "28 July, 2023",
        color: "#facc15",
    },
    {
        id: 9,
        name: "Miwa Kasumi",
        email: "miwa.kasumi@gmail.com",
        status: "online",
        role: "User",
        department: "Human Resources",
        phone: "+81 50-3322-1877",
        location: "Tokyo, Japan",
        createdAt: "10 April, 2022",
        color: "#fb7185",
    },
    {
        id: 10,
        name: "Gojo Satoru",
        email: "gojo.satoru@gmail.com",
        status: "away",
        role: "Admin",
        department: "Engineering",
        phone: "+1 415-555-4400",
        location: "San Francisco, USA",
        createdAt: "03 May, 2020",
        color: "#60a5fa",
    },
    {
        id: 11,
        name: "Zenin Maki",
        email: "zenin.maki@gmail.com",
        status: "online",
        role: "Supervisor",
        department: "Support",
        phone: "+65 6123 4400",
        location: "Singapore",
        createdAt: "09 September, 2022",
        color: "#34d399",
    },
    {
        id: 12,
        name: "Itadori Yuji",
        email: "itadori.yuji@gmail.com",
        status: "offline",
        role: "User",
        department: "Marketing",
        phone: "+55 11 5566-1122",
        location: "São Paulo, Brazil",
        createdAt: "18 December, 2021",
        color: "#f97316",
    },
];

const PAGE_SIZE = 8;

const departmentOptions = [
    "All",
    "Engineering",
    "Design",
    "Support",
    "Marketing",
    "Finance",
    "Human Resources",
];

const statusOptions = ["All", "Online", "Offline", "Away"];

const roleOptions = ["All", "Admin", "User", "Supervisor"];

const filterColumns = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "location", label: "Location" },
    { id: "department", label: "Department" },
    { id: "role", label: "Role" },
];

const operators = [
    { id: "contains", label: "contains" },
    { id: "equals", label: "equals" },
    { id: "startsWith", label: "starts with" },
    { id: "endsWith", label: "ends with" },
];

const Users = () => {
    const [users, setUsers] = useState(INITIAL_USERS);
    const [search, setSearch] = useState("");
    const [deptFilter, setDeptFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [roleFilter, setRoleFilter] = useState("All");

    const [moreFilterOpen, setMoreFilterOpen] = useState(false);
    const [moreFilter, setMoreFilter] = useState({
        column: "name",
        operator: "contains",
        value: "",
    });

    // 🔹 which top filter dropdown is open?
    const [openFilter, setOpenFilter] = useState(null); // 'department' | 'status' | 'role' | null

    // 🔹 sorting: column + direction
    const [sortConfig, setSortConfig] = useState({
        key: "name",
        direction: "asc",
    });

    // 🔹 selection
    const [selectedIds, setSelectedIds] = useState([]);
    const headerCheckboxRef = useRef(null);

    const [page, setPage] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        status: "online",
        role: "User",
        department: "Engineering",
        phone: "",
        location: "",
        createdAt: "",
    });

    // 🔹 row actions menu (three dots)
    const [openRowMenuId, setOpenRowMenuId] = useState(null);

    const moreFilterRef = useRef(null);
    const modalRef = useRef(null);
    const fileInputRef = useRef(null);
    const filtersRef = useRef(null); // wrapper for all dropdown filters
    const tableWrapperRef = useRef(null); // for row menu click-outside

    // click-outside for filter panel, modal, top filters, row menus
    useEffect(() => {
        const handler = (e) => {
            if (
                moreFilterOpen &&
                moreFilterRef.current &&
                !moreFilterRef.current.contains(e.target)
            ) {
                setMoreFilterOpen(false);
            }

            if (
                addModalOpen &&
                modalRef.current &&
                !modalRef.current.contains(e.target)
            ) {
                setAddModalOpen(false);
                setEditingUserId(null);
            }

            if (
                openFilter &&
                filtersRef.current &&
                !filtersRef.current.contains(e.target)
            ) {
                setOpenFilter(null);
            }

            if (openRowMenuId) {
                const target = e.target;
                const insideMenu =
                    target.closest &&
                    (target.closest(".rowMenu") ||
                        target.closest(".dotsBtn"));
                if (!insideMenu) {
                    setOpenRowMenuId(null);
                }
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [moreFilterOpen, addModalOpen, openFilter, openRowMenuId]);

    // ------- Filtering + sorting logic -------
    const filteredUsers = useMemo(() => {
        let list = [...users];

        const q = search.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (u) =>
                    u.name.toLowerCase().includes(q) ||
                    u.email.toLowerCase().includes(q) ||
                    u.location.toLowerCase().includes(q)
            );
        }

        if (deptFilter !== "All") {
            list = list.filter((u) => u.department === deptFilter);
        }
        if (statusFilter !== "All") {
            list = list.filter(
                (u) => u.status.toLowerCase() === statusFilter.toLowerCase()
            );
        }
        if (roleFilter !== "All") {
            list = list.filter((u) => u.role === roleFilter);
        }

        const v = moreFilter.value.trim().toLowerCase();
        if (v) {
            list = list.filter((u) => {
                const col = moreFilter.column;
                const raw = String(u[col] ?? "").toLowerCase();
                if (!raw) return false;

                switch (moreFilter.operator) {
                    case "equals":
                        return raw === v;
                    case "startsWith":
                        return raw.startsWith(v);
                    case "endsWith":
                        return raw.endsWith(v);
                    default:
                        return raw.includes(v);
                }
            });
        }

        // 🔹 apply sort
        if (sortConfig?.key) {
            const { key, direction } = sortConfig;
            const dir = direction === "desc" ? -1 : 1;

            list.sort((a, b) => {
                const va = (a[key] ?? "").toString().toLowerCase();
                const vb = (b[key] ?? "").toString().toLowerCase();
                if (va < vb) return -1 * dir;
                if (va > vb) return 1 * dir;
                return 0;
            });
        }

        return list;
    }, [
        users,
        search,
        deptFilter,
        statusFilter,
        roleFilter,
        moreFilter,
        sortConfig,
    ]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredUsers.length / PAGE_SIZE)
    );

    const pagedUsers = useMemo(() => {
        if (showAll) return filteredUsers;
        const start = page * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        return filteredUsers.slice(start, end);
    }, [filteredUsers, page, showAll]);

    const startIndex = showAll ? 1 : page * PAGE_SIZE + 1;
    const endIndex = showAll
        ? filteredUsers.length
        : Math.min(filteredUsers.length, (page + 1) * PAGE_SIZE);

    // whenever filters/search change, reset page
    useEffect(() => {
        setPage(0);
    }, [search, deptFilter, statusFilter, roleFilter, moreFilter.value]);

    // ------- sorting handlers -------
    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (!prev || prev.key !== key) {
                return { key, direction: "asc" };
            }
            // same key -> toggle
            const nextDir = prev.direction === "asc" ? "desc" : "asc";
            return { key, direction: nextDir };
        });
    };

    const renderSortIndicator = (key) => {
        if (!sortConfig || sortConfig.key !== key) return null;
        return sortConfig.direction === "asc" ? " ↑" : " ↓";
    };

    // ------- selection logic -------
    const allVisibleSelected =
        pagedUsers.length > 0 &&
        pagedUsers.every((u) => selectedIds.includes(u.id));
    const someVisibleSelected =
        pagedUsers.some((u) => selectedIds.includes(u.id)) &&
        !allVisibleSelected;

    // control header checkbox indeterminate
    useEffect(() => {
        if (headerCheckboxRef.current) {
            headerCheckboxRef.current.indeterminate = someVisibleSelected;
        }
    }, [someVisibleSelected]);

    const toggleSelectAllVisible = () => {
        if (allVisibleSelected) {
            // deselect all visible
            const visibleIds = new Set(pagedUsers.map((u) => u.id));
            setSelectedIds((prev) => prev.filter((id) => !visibleIds.has(id)));
        } else {
            // select all visible + keep previous
            const idsToAdd = pagedUsers.map((u) => u.id);
            setSelectedIds((prev) => Array.from(new Set([...prev, ...idsToAdd])));
        }
    };

    const toggleSelectRow = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    // ------- Export / Import -------
    const handleExport = () => {
        const blob = new Blob([JSON.stringify(filteredUsers, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "nova-users-export.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleImportFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const parsed = JSON.parse(reader.result);
                if (Array.isArray(parsed)) {
                    const mapped = parsed.map((u, idx) => ({
                        id:
                            u.id ??
                            Date.now() +
                            idx +
                            Math.floor(Math.random() * 1000),
                        name: u.name ?? "Unnamed",
                        email: u.email ?? "",
                        status: (u.status || "online").toLowerCase(),
                        role: u.role || "User",
                        department: u.department || "Engineering",
                        phone: u.phone || "",
                        location: u.location || "",
                        createdAt: u.createdAt || "",
                        color:
                            u.color ||
                            `hsl(${Math.floor(Math.random() * 360)},70%,55%)`,
                    }));
                    setUsers(mapped);
                    setPage(0);
                    setSelectedIds([]);
                }
            } catch {
                // ignore invalid file
            }
        };
        reader.readAsText(file);
        e.target.value = "";
    };

    // ------- Add / Edit user modal -------
    const openAddModal = () => {
        setNewUser({
            name: "",
            email: "",
            status: "online",
            role: "User",
            department: "Engineering",
            phone: "",
            location: "",
            createdAt: "",
        });
        setEditingUserId(null);
        setAddModalOpen(true);
    };

    const openEditModal = (user) => {
        setNewUser({
            name: user.name,
            email: user.email,
            status: user.status,
            role: user.role,
            department: user.department,
            phone: user.phone,
            location: user.location,
            createdAt: user.createdAt,
        });
        setEditingUserId(user.id);
        setAddModalOpen(true);
    };

    const handleAddUserField = (field, value) => {
        setNewUser((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        if (!newUser.name.trim() || !newUser.email.trim()) {
            return;
        }

        const payload = {
            name: newUser.name.trim(),
            email: newUser.email.trim(),
            status: newUser.status.toLowerCase(),
            role: newUser.role,
            department: newUser.department,
            phone: newUser.phone,
            location: newUser.location,
            createdAt: newUser.createdAt,
        };

        if (editingUserId) {
            // update existing
            setUsers((prev) =>
                prev.map((u) =>
                    u.id === editingUserId ? { ...u, ...payload } : u
                )
            );
        } else {
            // create new
            const created = {
                ...payload,
                id: Date.now(),
                color: `hsl(${Math.floor(Math.random() * 360)},70%,55%)`,
            };
            setUsers((prev) => [created, ...prev]);
        }

        setAddModalOpen(false);
        setEditingUserId(null);
        setPage(0);
    };

    // ------- Pagination -------
    const gotoPage = (idx) => {
        setShowAll(false);
        setPage(idx);
    };

    // helper to toggle a specific top filter dropdown
    const toggleFilterMenu = (key) => {
        setOpenFilter((prev) => (prev === key ? null : key));
    };

    // ------- row menu actions -------
    const toggleRowMenu = (id) => {
        setOpenRowMenuId((prev) => (prev === id ? null : id));
    };

    const handleDeleteUser = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        setSelectedIds((prev) => prev.filter((x) => x !== id));
        setOpenRowMenuId(null);
    };

    return (
        <Styled.Wrap>
            <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                style={{ display: "none" }}
                onChange={handleImportFile}
            />

            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="crumb">Home</span>
                <span className="crumbSep">/</span>
                <span className="crumb current">Users</span>
            </div>

            {/* Header row */}
            <div className="pageHeader">
                <h1>User list</h1>

                <div className="headerActions">
                    <button
                        type="button"
                        className="primaryBtn"
                        onClick={openAddModal}
                    >
                        + Add User
                    </button>

                    <div className="searchShell">
                        <input
                            type="text"
                            placeholder="Search user"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="divider" />

                    <button
                        type="button"
                        className="ghostBtn"
                        onClick={handleExport}
                    >
                        Export
                    </button>
                    <button
                        type="button"
                        className="ghostBtn"
                        onClick={handleImportClick}
                    >
                        Import
                    </button>
                </div>
            </div>

            {/* Filters row */}
            <div className="filtersRow" ref={filtersRef}>
                <div className="filterGroup">
                    {/* Department */}
                    <div className="filterDropdown">
                        <button
                            type="button"
                            className={
                                "filterTrigger" +
                                (openFilter === "department" ? " isOpen" : "")
                            }
                            onClick={() => toggleFilterMenu("department")}
                        >
                            Department
                        </button>
                        {openFilter === "department" && (
                            <div className="filterMenu">
                                {departmentOptions.map((item) => (
                                    <div
                                        key={item}
                                        className={
                                            "filterOption" +
                                            (deptFilter === item
                                                ? " active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setDeptFilter(item);
                                            setOpenFilter(null);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Status */}
                    <div className="filterDropdown">
                        <button
                            type="button"
                            className={
                                "filterTrigger" +
                                (openFilter === "status" ? " isOpen" : "")
                            }
                            onClick={() => toggleFilterMenu("status")}
                        >
                            Status
                        </button>
                        {openFilter === "status" && (
                            <div className="filterMenu">
                                {statusOptions.map((item) => (
                                    <div
                                        key={item}
                                        className={
                                            "filterOption" +
                                            (statusFilter === item
                                                ? " active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setStatusFilter(item);
                                            setOpenFilter(null);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Role */}
                    <div className="filterDropdown">
                        <button
                            type="button"
                            className={
                                "filterTrigger" +
                                (openFilter === "role" ? " isOpen" : "")
                            }
                            onClick={() => toggleFilterMenu("role")}
                        >
                            Role
                        </button>
                        {openFilter === "role" && (
                            <div className="filterMenu">
                                {roleOptions.map((item) => (
                                    <div
                                        key={item}
                                        className={
                                            "filterOption" +
                                            (roleFilter === item
                                                ? " active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setRoleFilter(item);
                                            setOpenFilter(null);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* More filters */}
                    <div className="moreFilterWrapper" ref={moreFilterRef}>
                        <button
                            type="button"
                            className={
                                "moreFilterTrigger" +
                                (moreFilterOpen ? " active" : "")
                            }
                            onClick={() =>
                                setMoreFilterOpen((prev) => !prev)
                            }
                        >
                            More filters
                        </button>
                        {moreFilterOpen && (
                            <div className="moreFilterPanel surface-card">
                                <div className="panelHeader">
                                    <span>Filter</span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMoreFilterOpen(false)
                                        }
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="panelBody">
                                    <label>
                                        <span className="label">Column</span>
                                        <select
                                            value={moreFilter.column}
                                            onChange={(e) =>
                                                setMoreFilter((prev) => ({
                                                    ...prev,
                                                    column: e.target.value,
                                                }))
                                            }
                                        >
                                            {filterColumns.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.label}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <label>
                                        <span className="label">Operator</span>
                                        <select
                                            value={moreFilter.operator}
                                            onChange={(e) =>
                                                setMoreFilter((prev) => ({
                                                    ...prev,
                                                    operator: e.target.value,
                                                }))
                                            }
                                        >
                                            {operators.map((op) => (
                                                <option key={op.id} value={op.id}>
                                                    {op.label}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <label>
                                        <span className="label">Value</span>
                                        <input
                                            type="text"
                                            value={moreFilter.value}
                                            onChange={(e) =>
                                                setMoreFilter((prev) => ({
                                                    ...prev,
                                                    value: e.target.value,
                                                }))
                                            }
                                            placeholder="Filter value"
                                        />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div
                className="tableShell surface-card"
                ref={tableWrapperRef}
            >
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    ref={headerCheckboxRef}
                                    type="checkbox"
                                    checked={allVisibleSelected}
                                    onChange={toggleSelectAllVisible}
                                />
                            </th>
                            <th>Avatar</th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("name")}
                            >
                                Name{renderSortIndicator("name")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("email")}
                            >
                                Email{renderSortIndicator("email")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("status")}
                            >
                                Status{renderSortIndicator("status")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("role")}
                            >
                                Role{renderSortIndicator("role")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("department")}
                            >
                                Department{renderSortIndicator("department")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("phone")}
                            >
                                Phone{renderSortIndicator("phone")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("location")}
                            >
                                Location{renderSortIndicator("location")}
                            </th>
                            <th
                                className="sortable"
                                onClick={() => handleSort("createdAt")}
                            >
                                Created At{renderSortIndicator("createdAt")}
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {pagedUsers.map((u) => (
                            <tr key={u.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(u.id)}
                                        onChange={() => toggleSelectRow(u.id)}
                                    />
                                </td>
                                <td>
                                    <div
                                        className="avatar"
                                        style={{ "--avatar-color": u.color }}
                                    >
                                        {u.name.charAt(0)}
                                    </div>
                                </td>
                                <td>{u.name}</td>
                                <td>
                                    <a href={`mailto:${u.email}`}>{u.email}</a>
                                </td>
                                <td>
                                    <span
                                        className={`statusChip status-${u.status}`}
                                    >
                                        {u.status === "online" && "Online"}
                                        {u.status === "offline" && "Offline"}
                                        {u.status === "away" && "Away"}
                                    </span>
                                </td>
                                <td>
                                    <span className="roleChip">{u.role}</span>
                                </td>
                                <td>{u.department}</td>
                                <td>{u.phone}</td>
                                <td>{u.location}</td>
                                <td>{u.createdAt}</td>
                                <td className="actionsCell">
                                    <button
                                        type="button"
                                        className="dotsBtn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleRowMenu(u.id);
                                        }}
                                        title="More actions"
                                    >
                                        ⋯
                                    </button>
                                    {openRowMenuId === u.id && (
                                        <div className="rowMenu">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    openEditModal(u);
                                                    setOpenRowMenuId(null);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="danger"
                                                onClick={() =>
                                                    handleDeleteUser(u.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}

                        {pagedUsers.length === 0 && (
                            <tr>
                                <td colSpan={11} className="emptyRow">
                                    No users found for current filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination */}
            <div className="tableFooter">
                <div className="footerLeft">
                    Showing {startIndex}-{endIndex} of {filteredUsers.length}{" "}
                    users
                    <button
                        type="button"
                        className="linkBtn"
                        onClick={() => setShowAll(true)}
                    >
                        Show all
                    </button>
                </div>

                {!showAll && (
                    <div className="pagination">
                        <button
                            type="button"
                            onClick={() => gotoPage(Math.max(page - 1, 0))}
                            disabled={page === 0}
                        >
                            ‹
                        </button>
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={
                                    "pageBtn" +
                                    (idx === page ? " isActive" : "")
                                }
                                onClick={() => gotoPage(idx)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() =>
                                gotoPage(Math.min(page + 1, totalPages - 1))
                            }
                            disabled={page >= totalPages - 1}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>

            {/* Add / Edit user modal */}
            {addModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCard surface-card" ref={modalRef}>
                        <div className="modalHeader">
                            <h2>
                                {editingUserId ? "Edit user" : "Add user"}
                            </h2>
                            <button
                                type="button"
                                onClick={() => {
                                    setAddModalOpen(false);
                                    setEditingUserId(null);
                                }}
                            >
                                ×
                            </button>
                        </div>
                        <form className="modalBody" onSubmit={handleAddUserSubmit}>
                            <div className="modalGrid">
                                <label>
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        value={newUser.name}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        value={newUser.email}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Status</span>
                                    <select
                                        value={newUser.status}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "status",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="online">Online</option>
                                        <option value="offline">Offline</option>
                                        <option value="away">Away</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Role</span>
                                    <select
                                        value={newUser.role}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "role",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                        <option value="Supervisor">
                                            Supervisor
                                        </option>
                                    </select>
                                </label>
                                <label>
                                    <span>Department</span>
                                    <select
                                        value={newUser.department}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "department",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {departmentOptions
                                            .filter((d) => d !== "All")
                                            .map((d) => (
                                                <option key={d} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                    </select>
                                </label>
                                <label>
                                    <span>Phone</span>
                                    <input
                                        type="text"
                                        value={newUser.phone}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                </label>
                                <label>
                                    <span>Location</span>
                                    <input
                                        type="text"
                                        value={newUser.location}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "location",
                                                e.target.value
                                            )
                                        }
                                    />
                                </label>
                                <label>
                                    <span>Created at</span>
                                    <input
                                        type="text"
                                        placeholder="e.g. 02 May, 2024"
                                        value={newUser.createdAt}
                                        onChange={(e) =>
                                            handleAddUserField(
                                                "createdAt",
                                                e.target.value
                                            )
                                        }
                                    />
                                </label>
                            </div>
                            <div className="modalFooter">
                                <button
                                    type="button"
                                    className="ghostBtn"
                                    onClick={() => {
                                        setAddModalOpen(false);
                                        setEditingUserId(null);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="primaryBtn">
                                    {editingUserId ? "Save changes" : "Save user"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Styled.Wrap>
    );
};

export default Users;
