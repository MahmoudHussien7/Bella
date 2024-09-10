import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../Redux/Slices/AuthSlice";
import Pagination from "../../User/Components/Pagination";
import { IoCloseOutline } from "react-icons/io5";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.auth);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // Start from page 1
  const usersPerPage = 4;
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to page 1 on new search
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm)
  );

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Open delete modal
  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setDeleteModal(true);
  };

  // Close delete modal
  const closeDeleteModal = () => setDeleteModal(false);

  // Handle user deletion
  const handleDelete = async () => {
    if (userToDelete) {
      dispatch(deleteUser(userToDelete.id));
      closeDeleteModal();
    }
  };

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex my-5">
        <h1 className="text-2xl font-bold text-titleColor">Users</h1>
        <input
          type="text"
          className="w-[50%] input input-bordered focus:border-0 h-[2.5rem] m-auto"
          placeholder="Search"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>

      <div className="container mx-auto p-4 mt-3 bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">No users found</td>
                </tr>
              ) : (
                currentUsers.map((user, index) => (
                  <tr key={user.id} className="text-center">
                    <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.role}</td>
                    <td className="flex justify-center gap-2">
                      <button
                        className="btn btn-ghost btn-xs text-red-800"
                        onClick={() => openDeleteModal(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          postsPerPage={usersPerPage}
          totalPosts={filteredUsers.length} // Use filteredUsers for pagination
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

      {/* Delete User Modal */}
      {isDeleteModal && (
        <div className="fixed w-full z-[99999] inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box bg-white p-5 rounded-lg sm:w-[50rem]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Delete User</h2>
              <button
                className="btn btn-circle btn-ghost hover:bg-mainColor hover:text-white"
                onClick={closeDeleteModal}
              >
                <IoCloseOutline size={18} />
              </button>
            </div>
            <p className="py-4">Are you sure you want to delete this user?</p>
            <div className="modal-action">
              <button
                className="btn bg-white text-mainColor"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="btn bg-mainColor text-white"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;