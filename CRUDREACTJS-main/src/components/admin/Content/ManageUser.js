import ModalCreateUser from './ModalCreateUser';
import TableUser from './TableUser';
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title text-center">
                <h1>ManageUser</h1>
            </div>
            <div className="users-content">
                <div className='create-user'>
                    <ModalCreateUser />
                </div>
                <div className='table-user'>
                    <TableUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;