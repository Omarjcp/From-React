import React, { useState } from 'react'

export default function Search() {
    return (
        <>
            <input className="form-control me-2" type="search" placeholder="formulario.." aria-label="Search" />
            <button type="button" className="btn btn-outline-secondary">Buscar</button>
        </>
    )
}