import { useState } from "react";
// 4. Add a “Clear” button to reset an input field back to empty
// Build a form that stores firstName, lastName in state and displays the full name below as you type (live preview).
export default function Name() {
  // const [firstName, SetfirstName] = useState("");
  // const [lastName, SetLastName] = useState("");
  const [text, Settext] = useState("");
  const handleCLick = () => {
    Settext("");
  };
  return (
    <>
      <h1>Live name</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => Settext(e.target.value)}
        value={text}
      />
      {/* <p>{text}</p> */}
      <button onClick={handleCLick}>Clear Input</button>
    </>
  );
}

// import React, { useState } from "react";
// import { Plus, Edit, Trash2 } from "lucide-react";
// import AdminLayout from "../../../components/AdminLayout";
// import { useAdminManagement } from "../../../hooks/useAdminManagement";
// import toast from "react-hot-toast";

// // A reusable modal for creating and editing admins
// const AdminFormModal = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
//   const [formData, setFormData] = useState({
//     name: initialData.name || "",
//     email: initialData.email || "",
//     password: "", // Always empty for security
//     role: initialData.role || "admin",
//   });
//   const isEditMode = !!initialData.id;

//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-4">
//           {isEditMode ? "Edit Admin" : "Create New Admin"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//             className="w-full p-2 border rounded"
//           />
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//             className="w-full p-2 border rounded"
//             disabled={isEditMode}
//           />
//           {!isEditMode && (
//             <input
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//               className="w-full p-2 border rounded"
//             />
//           )}
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="admin">Admin</option>
//             <option value="superadmin">Super Admin</option>
//           </select>
//           <div className="flex justify-end gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded bg-gray-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 rounded bg-[#1a233a] text-white"
//             >
//               {isEditMode ? "Save Changes" : "Create Admin"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Skeleton Loader component for a single row
// const TableRowSkeleton = () => (
//   <tr className="animate-pulse">
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//     <td className="px-4 py-3">
//       <div className="h-4 bg-gray-200 rounded"></div>
//     </td>
//   </tr>
// );

// export default function AdminManagement() {
//   const {
//     admins,
//     loading,
//     error,
//     addAdmin,
//     editAdmin,
//     removeAdmin,
//     updateStatus,
//   } = useAdminManagement();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAdmin, setEditingAdmin] = useState(null);

//   const handleCreateClick = () => {
//     setEditingAdmin(null);
//     setIsModalOpen(true);
//   };

//   const handleEditClick = (admin) => {
//     setEditingAdmin(admin);
//     setIsModalOpen(true);
//   };

//   const handleDeleteClick = async (id) => {
//     if (window.confirm("Are you sure you want to delete this admin?")) {
//       const toastId = toast.loading("Deleting admin...");
//       try {
//         await removeAdmin(id);
//         toast.success("Admin deleted successfully!", { id: toastId });
//       } catch (err) {
//         toast.error(err.message || "Failed to delete admin.", { id: toastId });
//       }
//     }
//   };

//   const handleStatusChange = async (id, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     const toastId = toast.loading("Updating status...");
//     try {
//       await updateStatus(id, newStatus);
//       toast.success("Status updated successfully!", { id: toastId });
//     } catch (err) {
//       toast.error(err.message || "Failed to update status.", { id: toastId });
//     }
//   };

//   const handleFormSubmit = async (formData) => {
//     const toastId = toast.loading(
//       editingAdmin ? "Updating admin..." : "Creating admin..."
//     );
//     try {
//       if (editingAdmin) {
//         const { name, role } = formData;
//         await editAdmin(editingAdmin.id, { name, role });
//         toast.success("Admin updated successfully!", { id: toastId });
//       } else {
//         await addAdmin(formData);
//         toast.success("Admin created successfully!", { id: toastId });
//       }
//       setIsModalOpen(false);
//     } catch (err) {
//       toast.error(err.message || "An error occurred.", { id: toastId });
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-semibold text-gray-800">
//             Admin Management
//           </h1>
//           <button
//             onClick={handleCreateClick}
//             className="flex items-center gap-2 px-4 py-2 bg-[#1a233a] text-white text-sm font-medium rounded-lg shadow hover:bg-gray-700 focus:ring-2 focus:ring-purple-400 transition-colors"
//           >
//             <Plus size={16} />
//             Create Admin
//           </button>
//         </div>

//         <div className="overflow-x-auto rounded-lg border border-gray-200">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Admin ID
//                 </th>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Email
//                 </th>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Status
//                 </th>
//                 <th className="px-4 py-3 text-sm font-medium text-gray-500">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <>
//                   <TableRowSkeleton />
//                   <TableRowSkeleton />
//                   <TableRowSkeleton />
//                 </>
//               ) : error ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="py-16 text-center text-red-500 text-sm"
//                   >
//                     Error: {error}
//                   </td>
//                 </tr>
//               ) : admins.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="py-16 text-center text-gray-400 text-sm"
//                   >
//                     No admins found. Click "Create Admin" to add one.
//                   </td>
//                 </tr>
//               ) : (
//                 admins.map((admin) => (
//                   <tr
//                     key={admin.id}
//                     className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
//                   >
//                     <td className="px-4 py-3 text-sm text-gray-700 font-mono">
//                       {admin.uniqueNum}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-800 font-semibold">
//                       {admin.name}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600">
//                       {admin.email}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600 capitalize">
//                       {admin.roll}
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <button
//                         onClick={() =>
//                           handleStatusChange(admin.id, admin.status)
//                         }
//                         className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${
//                           admin.status === "active"
//                             ? "bg-green-100 text-green-800 hover:bg-green-200"
//                             : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
//                         }`}
//                       >
//                         {admin.status}
//                       </button>
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <div className="flex gap-4">
//                         <button
//                           onClick={() => handleEditClick(admin)}
//                           className="text-blue-600 hover:text-blue-800 transition-colors"
//                         >
//                           <Edit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteClick(admin.id)}
//                           className="text-red-600 hover:text-red-800 transition-colors"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <AdminFormModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleFormSubmit}
//         initialData={editingAdmin || {}}
//       />
//     </AdminLayout>
//   );
// }
