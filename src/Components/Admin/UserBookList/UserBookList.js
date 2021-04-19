import React, { useContext, useEffect, useState } from 'react';
import { UseContext } from '../../../App';
import Admin from '../Admin/Admin';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import BookListByTable from '../BookListByTable/BookListByTable';
import NoAccess from '../NoAccess/NoAccess';
import './UserBookList.css';

const UserBookList = () => {
    const [isAdmin, setIsAdmin] = useState(null);
    const [userBookList, setUserBookList] = useState([]);
    const [logInUser, setLogInUser] = useContext(UseContext);


    useEffect(() => {
        fetch('http://localhost:5000/getAllBookList')
            .then(res => res.json())
            .then(data => setUserBookList(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/adminList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            });

    }, [])

    return (<>
        <section className=" row">
            <AdminSidebar />
            <div className="col-md-10">
                {
                    userBookList.length === 0 && <h5 className='text-center mt-5'>Loading....</h5>
                }

                { isAdmin && (
                    <table>
                        <thead>
                            <tr> <th> Name</th><th> E-mail</th><th>Service </th> <th>Pay With</th><th>Status</th></tr>
                        </thead>
                        {
                            userBookList.map((book, id) => <BookListByTable key={id} book={book} />)
                        }
                    </table>
                )

                }

                {
                    !isAdmin && (<NoAccess />)
                }
            </div>
        </section>
    </>
    );
};

export default UserBookList;