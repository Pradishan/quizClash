import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


export default function AdimSidebar ()
{
    const [ toggle, setToggle ] = useState( false )
    return (
        <div style={ { height: '100vh', } }>

            <Sidebar
                breakPoint={ "md" }
                collapsed={ toggle }
                style={ { height: '100%', } }
                
            >

                <Menu
                    menuItemStyles={ {
                        button: ( { level, active, disabled } ) =>
                        {
                            // only apply styles on first level elements of the tree
                            if ( level === 0 )
                                return {
                                    color: disabled ? 'black' : 'blue',
                                    backgroundColor: active ? 'red' : undefined,
                                    textAlign: 'left'
                                };
                        },
                    } }



                >
                    {/* <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu> */}
                    <MenuItem
                        icon={ <img width="32" height="32" src="https://img.icons8.com/material/24/dashboard-layout.png" alt="dashboard-layout" /> }
                    > Dashboard </MenuItem>
                    <MenuItem
                        icon={ <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/help.png" alt="help" /> }
                    > Qustions </MenuItem>
                    <MenuItem
                        icon={ <img width="32" height="32" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1" /> }
                    > Users </MenuItem>
                    <MenuItem
                        icon={ <img width="32" height="32" src="https://img.icons8.com/fluency-systems-filled/48/settings.png" alt="settings" /> }
                        component={<Link to="/" />}  
                    > Settings </MenuItem>
                </Menu>
                <button onClick={ () => setToggle( !toggle ) } className='btn btn-primary'>test</button>
            </Sidebar>
            <main>hello</main>

        </div>
    )
}
