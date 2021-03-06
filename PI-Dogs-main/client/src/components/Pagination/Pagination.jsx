import React from 'react'
import style from './pagination.module.css'
function Pagination({dogs, dogsPage, pagination, page}) {

    let pageNum = []
    
    for(let i = 1; i <= Math.ceil(dogs / dogsPage); i++){
        pageNum.push(i)
    }



    return (
    <>
    <nav>
        <ul className={style.pagination} >
                {page > 1 ? (
                    <li  onClick={() => pagination(page - 1)}>
                        <button className={style.btn}>Prev</button></li>
                ) : null}
                {pageNum.map(n => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a className={style.a} key={n} onClick={() => pagination(n)}>{n}</a>
                    
                    ))}
            {page < dogs / dogsPage ? (
                <li  onClick={() => pagination(page + 1)}>
                    <button className={style.btn} >Next</button>
                </li>
            ) : null}
        </ul>
    </nav>

    </>
    )
}

export default Pagination