import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditProduct from './EditProduct'

const ProductItem = ({pro}) => {

    const id = pro._id;

    
    const [openEdit, setOpenEdit] = useState(false);

    const handlerDeleteProduct = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.delete(`/api/products/delete/${id}`);
            
            if(data) {
                alert("Producto eliminado exitosamente!");
            }

            

        } catch(err) {
            alert("Producto no eliminado!");
        }

    }

  return (
    <>
        <div className="filter-card" key={pro._id}>
            <div className="card-header">
                <img src={pro.image} alt={pro.name} />
            </div>
            <div className="card-body">
                <Link to={`../${pro.slug}`}>{pro.name} <FontAwesomeIcon icon={faEye} /></Link>
                <span className='category'>{pro.category}</span>
                <span className="price">${(pro.price).toFixed(2)}/kg</span>
            </div>
            <div className="card-footer account">
                <button onClick={() => setOpenEdit(true)}><FontAwesomeIcon icon={faPencil} /> Editar</button>
                <button onClick={(handlerDeleteProduct)}><FontAwesomeIcon icon={faTrash} /> Eliminar</button>
            </div>
        </div>
        {openEdit && <EditProduct pro={pro} setOpenEdit={setOpenEdit} />}
    </>
  )
}

export default ProductItem
