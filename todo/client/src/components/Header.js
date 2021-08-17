import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <AssignmentIcon />
                <Typography>タスク一覧</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header