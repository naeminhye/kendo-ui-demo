import React, { useState } from 'react';
// Antd
import Pagination from 'antd/es/pagination';

import 'antd/es/pagination/style/css';

const GridPager = ({ skip, take, total, onPageChange }) => {
    const currentPage = Math.floor(skip / take) + 1;
    const handleChange = (page, pageSize) => {
        onPageChange({
            skip: (page - 1) * take,
            take: take,
        })
    }

    return <Pagination className="m-2" current={currentPage} total={total} onChange={handleChange} pageSize={take} />
}

export default GridPager;