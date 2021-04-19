import React from 'react';
import './BookListByTable.css';

const BookListByTable = ({ book }) => {


    return (
        <tbody>
            <tr>
                <td> {book.name}</td>
                <td>{book.email}</td>
                <td>{book.service}</td>
                <td>{book.paymentCard}</td>
                <td>
                    <select className="form-control form-select">
                        <option className="bg-warning">{book.status}</option>
                        <option className="bg-danger"> Pending</option>
                        <option className="bg-success">Done</option>
                    </select>
                </td>
            </tr>

        </tbody>
    );
};

export default BookListByTable;