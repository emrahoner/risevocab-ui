import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

function BottomMenu () {
    const history = useHistory()
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Search" icon={<Search />} onClick={() => { history.push('/') }} />
        </BottomNavigation>
    )
}

export default BottomMenu