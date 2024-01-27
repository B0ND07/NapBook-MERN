import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Bookings = () => {
  return (
    <div>
        <div className='mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4'>
            <h2 className='text-2xl font-medium text-center my-8'>All Bookings</h2>
            <TableContainer>
                <Table className=''>
                    <TableHead>
                        <TableRow className='bg-red-300'>
                            <TableCell align='center'>id</TableCell>
                            <TableCell align='center'>date</TableCell>
                            <TableCell align='center'>status</TableCell>
                            <TableCell align='center'>details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center'>id</TableCell>
                            <TableCell align='center'>date</TableCell>
                            <TableCell align='center'>status</TableCell>
                            <TableCell align='center'>details</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default Bookings